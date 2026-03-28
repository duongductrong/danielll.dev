import { motion } from "motion/react";
import { ModularBlockTile } from "./modular-block-tile";
import type { Variants } from "motion/react";

type ModularBlockShowcaseProps = {
  shouldReduceMotion?: boolean | null;
};

function toneForClusterCell(index: number): "moss" | "basalt" | "sand" {
  const row = Math.floor(index / 5);
  const column = index % 5;
  const insidePlatform =
    row >= 1 && row <= 3 && column >= 1 && column <= 3;

  if (insidePlatform) {
    return "basalt";
  }

  return (row + column) % 2 === 0 ? "moss" : "sand";
}

export function ModularBlockShowcase({
  shouldReduceMotion = false,
}: ModularBlockShowcaseProps) {
  const containerVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
            delayChildren: 0.04,
            staggerChildren: 0.07,
          },
        },
      };

  const itemVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section className="w-full rounded-[30px] border border-black/10 bg-[#dfdfd8] px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.1)] sm:px-8 sm:py-9">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.p
          variants={itemVariants}
          className="text-[11px] tracking-[0.22em] text-black/45 uppercase"
        >
          Modular Construction Demo
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-2 text-2xl leading-tight font-semibold tracking-[-0.02em] text-black/85"
        >
          Từ Khối Đơn Đến Cụm Hoàn Chỉnh
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-2 max-w-2xl text-sm leading-relaxed text-black/62"
        >
          Cùng một block nền được lặp lại và ghép thành dải, sau đó mở rộng
          thành cụm terrain có vùng trung tâm để đặt kiến trúc chính.
        </motion.p>

        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          <motion.article
            variants={itemVariants}
            className="rounded-[22px] border border-black/10 bg-white/44 p-5"
          >
            <p className="text-sm font-medium text-black/76">01. Khối đơn lập</p>
            <p className="mt-1 text-xs text-black/54">
              Các biến thể vật liệu cùng form superellipse.
            </p>
            <div className="mt-5 flex items-end justify-center gap-2">
              <ModularBlockTile tone="moss" size={108} />
              <ModularBlockTile tone="sand" size={108} />
              <ModularBlockTile tone="basalt" size={108} />
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="rounded-[22px] border border-black/10 bg-white/44 p-5"
          >
            <p className="text-sm font-medium text-black/76">02. Ghép thành dải</p>
            <p className="mt-1 text-xs text-black/54">
              Lặp block theo trục ngang để tạo nhịp địa hình.
            </p>
            <div className="mt-5 flex h-[132px] items-center justify-center">
              {Array.from({ length: 6 }, (_, index) => (
                <ModularBlockTile
                  key={`strip-${index}`}
                  tone={index % 3 === 0 ? "sand" : "moss"}
                  size={84}
                  className="-ml-6 first:ml-0"
                />
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="rounded-[22px] border border-black/10 bg-white/44 p-5"
          >
            <p className="text-sm font-medium text-black/76">03. Cụm hoàn chỉnh</p>
            <p className="mt-1 text-xs text-black/54">
              Terrain 5x5 từ cùng primitive, thêm lõi kiến trúc ở tâm.
            </p>
            <div className="relative mx-auto mt-4 w-[320px] max-w-full">
              <div className="grid grid-cols-5 place-items-center">
                {Array.from({ length: 25 }, (_, index) => (
                  <ModularBlockTile
                    key={`cluster-${index}`}
                    tone={toneForClusterCell(index)}
                    size={78}
                    className="-m-3"
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute top-1/2 left-1/2 w-[120px] -translate-x-1/2 -translate-y-[42%]">
                <div className="rounded-[15px] border border-[#2B2014]/35 bg-gradient-to-b from-[#6D5336] to-[#403125] px-3 pb-3 pt-2 shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                  <div className="mx-auto h-2 w-10 rounded-full bg-[#A88A5B]/65" />
                  <div className="mt-2 h-9 rounded-[9px] border border-[#2B2014]/45 bg-gradient-to-b from-[#7B6043] to-[#4D3A2B]" />
                  <div className="mx-auto mt-2 h-0 w-0 border-x-[9px] border-x-transparent border-t-[12px] border-t-[#5ECD63]" />
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
