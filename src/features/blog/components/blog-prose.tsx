import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const blogProseClassName = cn(
  "blog-prose max-w-none text-[15px] leading-[1.72] tracking-[-0.01em] text-foreground/88",
  "[&_h1]:text-foreground [&_h1]:mt-0 [&_h1]:mb-5 [&_h1]:text-[28px] [&_h1]:leading-[1.15] [&_h1]:font-semibold [&_h1]:tracking-[-0.03em]",
  "[&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:leading-[1.22] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em]",
  "[&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-[18px] [&_h3]:leading-[1.32] [&_h3]:font-semibold [&_h3]:tracking-[-0.014em]",
  "[&_h4]:text-foreground [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-[16px] [&_h4]:leading-[1.4] [&_h4]:font-semibold [&_h4]:tracking-[-0.01em]",
  "[&_p]:my-4 [&_ul]:my-4 [&_ol]:my-4 [&_blockquote]:my-4 [&_table]:my-4 [&_figure]:my-4",
  "[&_a]:decoration-foreground/25 [&_a]:underline [&_a]:decoration-[0.06em] [&_a]:underline-offset-[3px] [&_a]:transition-all [&_a]:duration-200 [&_a:hover]:decoration-foreground/50",
  "[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li+li]:mt-1.5 [&_li>p]:my-1",
  "[&_hr]:my-10 [&_hr]:h-px [&_hr]:border-none [&_hr]:[background:linear-gradient(to_right,transparent,color-mix(in_srgb,var(--color-foreground)_14%,transparent)_20%,color-mix(in_srgb,var(--color-foreground)_14%,transparent)_80%,transparent)]",
  "[&_img]:my-6 [&_img]:w-full [&_img]:rounded-xl",
  "[&_blockquote]:my-5 [&_blockquote]:rounded-r-lg [&_blockquote]:border-l-[3px] [&_blockquote]:py-0.5 [&_blockquote]:pr-4 [&_blockquote]:pl-4 [&_blockquote]:not-italic",
  "[&_blockquote]:[border-color:color-mix(in_srgb,var(--color-foreground)_18%,transparent)]",
  "[&_blockquote]:[background-color:color-mix(in_srgb,var(--color-foreground)_3%,transparent)]",
  "[&_blockquote]:[color:color-mix(in_srgb,var(--color-foreground)_72%,transparent)]",
  "[&_blockquote_p:first-child]:mt-2 [&_blockquote_p:last-child]:mb-2",
  "[&_table]:my-6 [&_table]:w-full [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:text-left [&_table]:text-[13.5px] [&_table]:leading-[1.55]",
  "[&_table]:[border-collapse:separate] [&_table]:[border-spacing:0]",
  "[&_table]:[border:1px_solid_color-mix(in_srgb,var(--color-foreground)_10%,transparent)]",
  "[&_table]:[box-shadow:0_1px_3px_-1px_color-mix(in_srgb,var(--color-foreground)_4%,transparent)]",
  "[&_thead_th]:px-4 [&_thead_th]:py-2.5 [&_thead_th]:text-[11.5px] [&_thead_th]:font-semibold [&_thead_th]:tracking-[0.06em] [&_thead_th]:uppercase",
  "[&_thead_th]:[color:color-mix(in_srgb,var(--color-foreground)_58%,transparent)]",
  "[&_thead_th]:[border-bottom:1px_solid_color-mix(in_srgb,var(--color-foreground)_12%,transparent)]",
  "[&_thead_th]:[background-color:color-mix(in_srgb,var(--color-foreground)_4%,transparent)]",
  "[&_thead_th:not(:last-child)]:[border-right:1px_solid_color-mix(in_srgb,var(--color-foreground)_6%,transparent)]",
  "[&_tbody_td]:px-4 [&_tbody_td]:py-3 [&_tbody_td]:align-top [&_tbody_td]:transition-colors [&_tbody_td]:duration-150",
  "[&_tbody_td]:[border-bottom:1px_solid_color-mix(in_srgb,var(--color-foreground)_7%,transparent)]",
  "[&_tbody_td:not(:last-child)]:[border-right:1px_solid_color-mix(in_srgb,var(--color-foreground)_5%,transparent)]",
  "[&_tbody_tr:last-child_td]:border-b-0",
  "[&_tbody_tr:hover_td]:[background-color:color-mix(in_srgb,var(--color-foreground)_3%,transparent)]",
  "[&_tbody_tr:nth-child(even)_td]:[background-color:color-mix(in_srgb,var(--color-foreground)_2%,transparent)]",
  "[&_tbody_tr:nth-child(even):hover_td]:[background-color:color-mix(in_srgb,var(--color-foreground)_4.5%,transparent)]",
);

export function BlogProse({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return (
    <article className={cn(blogProseClassName, className)} {...props}>
      {children}
    </article>
  );
}
