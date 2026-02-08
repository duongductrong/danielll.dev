import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import { ConferenceBadgeCard } from "./conference-badge-card";
import { ConferenceBadgeCardBack } from "./conference-badge-card-back";
import { cn } from "@/lib/utils";

type SwingSpringConfig = {
  stiffness?: number;
  damping?: number;
  mass?: number;
};

type InteractiveConferenceBadgeProps = {
  className?: string;
  name?: string;
  role?: string;
  date?: string;
  location?: string;
  venue?: string;
  venueAddress?: string;
  /** Enable mouse-following gradient light on the card (default true) */
  enableLightEffect?: boolean;
  /** Degrees of rotation per pixel of drag (default 1.2) */
  dragToDeg?: number;
  /** Quadratic velocity scaling — higher = faster swipes spin harder (default 0.002) */
  velocityAcceleration?: number;
  /** Cap on velocity-based bonus degrees (default 400) */
  maxVelocityBonus?: number;
  /** Spring config for swing oscillation after release */
  swingSpring?: SwingSpringConfig;
};

const SPRING_CONFIG = { stiffness: 150, damping: 20, mass: 0.5 };
const TILT_MAX = 12;
const LANYARD_SWAY_MAX = 8;
const MOUSE_INFLUENCE_RADIUS = 600;
const GRAVITY_BIAS_X = -6;
const GRAVITY_BIAS_Y = -3;
const IDLE_TIMEOUT = 1500;
const SWAY_AMPLITUDE = 0.12;
const SWAY_PERIOD = 3000;
const IDLE_INTERVAL = 42; // ~24fps — slow sine wave is indistinguishable at 24 vs 60fps
const DEFAULT_DRAG_TO_DEG = 0.4; // low ratio = more drag needed per degree = heavier feel
const DEFAULT_VELOCITY_ACCELERATION = 0.0015;
const DEFAULT_MAX_VELOCITY_BONUS = 300;

// High mass + low damping = heavy, powerful oscillation
const DEFAULT_SWING_SPRING = { stiffness: 45, damping: 4, mass: 2.5 };

export function InteractiveConferenceBadge({
  className,
  enableLightEffect = true,
  dragToDeg = DEFAULT_DRAG_TO_DEG,
  velocityAcceleration = DEFAULT_VELOCITY_ACCELERATION,
  maxVelocityBonus = DEFAULT_MAX_VELOCITY_BONUS,
  swingSpring: swingSpringProp,
  ...badgeProps
}: InteractiveConferenceBadgeProps) {
  const swingSpring = { ...DEFAULT_SWING_SPRING, ...swingSpringProp };
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const idleIntervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const isIdleRef = useRef(true);
  const cachedRectRef = useRef<DOMRect | null>(null);
  const rafPending = useRef(false);
  const springAnimRef = useRef<ReturnType<typeof animate> | null>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Card-only Y rotation driven by drag, springs back to 0 on release
  const swingRotateY = useMotionValue(0);
  const dragStartRotation = useRef(0);

  // Drag layer Y translation — synced to visual card
  const dragY = useMotionValue(0);

  // Idle sway — setInterval at ~24fps instead of rAF at 60fps
  const startIdleSway = useCallback(() => {
    isIdleRef.current = true;
    const startTime = performance.now();
    const startX = mouseX.get();

    idleIntervalRef.current = setInterval(() => {
      if (!isIdleRef.current) return;
      const elapsed = performance.now() - startTime;
      const blend = Math.min(1, elapsed / 800);
      const sway =
        Math.sin((elapsed / SWAY_PERIOD) * Math.PI * 2) * SWAY_AMPLITUDE;
      const x = 0.5 + sway;
      mouseX.set(startX + (x - startX) * blend);
      const swayY =
        Math.sin((elapsed / (SWAY_PERIOD * 1.7)) * Math.PI * 2) *
        (SWAY_AMPLITUDE * 0.3);
      mouseY.set(0.5 + swayY * blend);
    }, IDLE_INTERVAL);
  }, [mouseX, mouseY]);

  const stopIdleSway = useCallback(() => {
    isIdleRef.current = false;
    if (idleIntervalRef.current != null) {
      clearInterval(idleIntervalRef.current);
      idleIntervalRef.current = null;
    }
  }, []);

  const resetIdleTimer = useCallback(() => {
    stopIdleSway();
    if (idleTimerRef.current != null) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(startIdleSway, IDLE_TIMEOUT);
  }, [startIdleSway, stopIdleSway]);

  // Spring-smoothed tilt values with gravity bias (mouse-following)
  const tiltRotateY = useSpring(
    useTransform(
      mouseX,
      [0, 1],
      [-TILT_MAX + GRAVITY_BIAS_Y, TILT_MAX + GRAVITY_BIAS_Y],
    ),
    SPRING_CONFIG,
  );
  const rotateX = useSpring(
    useTransform(
      mouseY,
      [0, 1],
      [TILT_MAX + GRAVITY_BIAS_X, -TILT_MAX + GRAVITY_BIAS_X],
    ),
    SPRING_CONFIG,
  );

  // Card Y rotation = mouse tilt + swing from swipe
  const cardRotateY = useTransform(
    [tiltRotateY, swingRotateY],
    ([tilt, swing]: Array<number>) => tilt + swing,
  );

  // Lanyard counter-sway (stays independent — NOT affected by card swing)
  const lanyardRotateY = useSpring(
    useTransform(mouseX, [0, 1], [LANYARD_SWAY_MAX, -LANYARD_SWAY_MAX]),
    { stiffness: 80, damping: 15, mass: 0.8 },
  );
  const lanyardRotateX = useSpring(
    useTransform(mouseY, [0, 1], [-LANYARD_SWAY_MAX / 2, LANYARD_SWAY_MAX / 2]),
    { stiffness: 80, damping: 15, mass: 0.8 },
  );

  // Cache container rect on mount, scroll, resize
  const updateCachedRect = useCallback(() => {
    if (containerRef.current) {
      cachedRectRef.current = containerRef.current.getBoundingClientRect();
    }
  }, []);

  // Start idle sway on mount, cache rect, clean up on unmount
  useEffect(() => {
    startIdleSway();
    updateCachedRect();

    window.addEventListener("scroll", updateCachedRect, { passive: true });
    window.addEventListener("resize", updateCachedRect, { passive: true });

    return () => {
      stopIdleSway();
      if (idleTimerRef.current != null) clearTimeout(idleTimerRef.current);
      window.removeEventListener("scroll", updateCachedRect);
      window.removeEventListener("resize", updateCachedRect);
    };
  }, [startIdleSway, stopIdleSway, updateCachedRect]);

  // Global mouse tracking — throttled via rAF, uses cached rect
  useEffect(() => {
    let rafId: number | null = null;

    function handleGlobalMouseMove(e: MouseEvent) {
      if (isDragging.current || rafPending.current) return;
      rafPending.current = true;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        rafPending.current = false;
        const rect = cachedRectRef.current;
        if (!rect) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = 0.5 + (e.clientX - centerX) / (MOUSE_INFLUENCE_RADIUS * 2);
        const y = 0.5 + (e.clientY - centerY) / (MOUSE_INFLUENCE_RADIUS * 2);

        mouseX.set(Math.max(0, Math.min(1, x)));
        mouseY.set(Math.max(0, Math.min(1, y)));
        resetIdleTimer();
      });
    }

    window.addEventListener("mousemove", handleGlobalMouseMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, resetIdleTimer]);

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (isDragging.current) return;
    const touch = e.touches[0];
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!touch) return;
    const rect = cachedRectRef.current;
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = 0.5 + (touch.clientX - centerX) / (MOUSE_INFLUENCE_RADIUS * 2);
    const y = 0.5 + (touch.clientY - centerY) / (MOUSE_INFLUENCE_RADIUS * 2);
    mouseX.set(Math.max(0, Math.min(1, x)));
    mouseY.set(Math.max(0, Math.min(1, y)));
    resetIdleTimer();
  }

  return (
    <div
      ref={containerRef}
      className={cn(className, "select-none")}
      style={{ perspective: 800 }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        resetIdleTimer();
      }}
    >
      {/* Lanyard anchor — stays fixed, slight counter-sway from mouse only */}
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateY: lanyardRotateY,
          rotateX: lanyardRotateX,
          transformOrigin: "top center",
        }}
        className="will-change-transform select-none"
      >
        <motion.div
          drag
          dragElastic={0.08}
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          whileTap={{ scale: 1.02 }}
          onDragStart={() => {
            isDragging.current = true;
            // Stop any running spring-back animation
            if (springAnimRef.current) {
              springAnimRef.current.stop();
              springAnimRef.current = null;
            }
            dragStartRotation.current = swingRotateY.get();
          }}
          onDrag={(_e, info) => {
            // Card follows drag in real-time
            swingRotateY.set(
              dragStartRotation.current + info.offset.x * dragToDeg,
            );
          }}
          onDragEnd={(_e, info) => {
            isDragging.current = false;

            // Velocity-based acceleration: fast swipes produce exponentially more spin
            // velocityBonus scales with velocity² so speed matters dramatically
            const velocityDeg = info.velocity.x * dragToDeg;
            const speed = Math.abs(info.velocity.x);
            const velocityBonus =
              Math.sign(info.velocity.x) *
              Math.min(speed * speed * velocityAcceleration, maxVelocityBonus);
            const totalVelocity = velocityDeg + velocityBonus;

            springAnimRef.current = animate(swingRotateY, 0, {
              type: "spring",
              ...swingSpring,
              velocity: totalVelocity,
              onComplete: () => {
                springAnimRef.current = null;
              },
            });
          }}
          style={{
            y: dragY,
            rotateX,
            rotateY: cardRotateY,
            translateZ: 30,
            cursor: "grab",
          }}
          className={cn(
            "absolute top-24 left-0 z-10 h-[80%] w-full bg-amber-400/0 will-change-transform",
            "after:absolute after:size-14 after:bg-amber-400/0",
            "after:-top-56 after:left-1/2 after:h-full after:-translate-x-1/2",
          )}
          whileDrag={{ cursor: "grabbing" }}
        />
        {/* Card — tilts with mouse, swings on swipe with damped spring-back */}
        <motion.div
          style={{
            y: dragY,
            rotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
            transformOrigin: "top center",
            cursor: "grab",
            filter:
              "drop-shadow(0 4px 6px rgba(0,0,0,0.5)) drop-shadow(0 12px 30px rgba(0,0,0,0.35))",
          }}
          className="pointer-events-none will-change-transform"
        >
          {/* Front face */}
          <div style={{ backfaceVisibility: "hidden" }}>
            <ConferenceBadgeCard
              className="h-auto w-full"
              {...(enableLightEffect ? { lightX: mouseX, lightY: mouseY } : {})}
              {...badgeProps}
            />
          </div>

          {/* Back face — rotated 180° so it shows when card is flipped */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
            }}
          >
            <ConferenceBadgeCardBack
              className="h-auto w-full"
              name={badgeProps.name}
              role={badgeProps.role}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
