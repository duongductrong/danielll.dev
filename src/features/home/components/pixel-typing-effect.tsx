import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "idle" | "deleting" | "typing";

interface PixelTypingEffectProps {
  phrases: Array<string>;
  /** ms to hold text before starting delete (default 2000) */
  holdDelay?: number;
  /** ms per character when typing (default 80) */
  typeSpeed?: number;
  /** ms per character when deleting (default 50) */
  deleteSpeed?: number;
  /** ms pause between delete-complete and next type start (default 400) */
  pauseDelay?: number;
  className?: string;
}

export function PixelTypingEffect({
  phrases,
  holdDelay = 2000,
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseDelay = 400,
  className,
}: PixelTypingEffectProps) {
  const [displayText, setDisplayText] = useState(phrases[0] ?? "");
  const [phase, setPhase] = useState<Phase>("idle");
  const phraseIndex = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const currentPhrase = useCallback(
    () => phrases[phraseIndex.current % phrases.length] ?? "",
    [phrases],
  );

  // Phase: idle — hold full text, then start deleting
  useEffect(() => {
    if (phase !== "idle") return;
    timeoutRef.current = setTimeout(() => setPhase("deleting"), holdDelay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, holdDelay]);

  // Phase: deleting — remove one char at a time
  useEffect(() => {
    if (phase !== "deleting") return;
    if (displayText.length === 0) {
      // Advance to next phrase, start typing
      phraseIndex.current += 1;
      timeoutRef.current = setTimeout(() => setPhase("typing"), pauseDelay);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
    timeoutRef.current = setTimeout(() => {
      setDisplayText((prev) => prev.slice(0, -1));
    }, deleteSpeed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, displayText, deleteSpeed, pauseDelay]);

  // Phase: typing — add one char at a time
  useEffect(() => {
    if (phase !== "typing") return;
    const target = currentPhrase();
    if (displayText.length >= target.length) {
      setPhase("idle");
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setDisplayText(target.slice(0, displayText.length + 1));
    }, typeSpeed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, displayText, typeSpeed, currentPhrase]);

  return (
    <span className={className} aria-label={currentPhrase()}>
      <span>{displayText}</span>
      <span className="ml-px inline-block h-[9px] w-[5px] translate-y-px animate-pulse bg-current" />
    </span>
  );
}
