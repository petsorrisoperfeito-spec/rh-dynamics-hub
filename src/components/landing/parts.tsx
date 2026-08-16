import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { offer } from "@/config/site";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn(visible ? "reveal-in" : "reveal-hidden", className)}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function CtaButton({
  children,
  className,
  size = "lg",
  pulse = false,
}: {
  children: ReactNode;
  className?: string;
  size?: "lg" | "md";
  pulse?: boolean;
}) {
  return (
    <a
      href={offer.checkoutUrl}
      className={cn(
        "group inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-2xl bg-cta text-center font-display font-extrabold uppercase tracking-tight text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cta/40 active:translate-y-0",
        size === "lg"
          ? "px-6 py-4 text-base leading-tight sm:px-10 sm:py-5 sm:text-lg"
          : "px-5 py-3.5 text-sm sm:text-base",
        pulse && "animate-pulse-soft",
        className,
      )}
    >
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
  invert = false,
}: {
  children: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <h2
      className={cn(
        "text-balance-tight text-2xl font-extrabold uppercase leading-tight sm:text-4xl",
        invert ? "text-brand-foreground" : "text-brand",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/12 text-sm font-bold text-teal",
        className,
      )}
    >
      ✓
    </span>
  );
}
