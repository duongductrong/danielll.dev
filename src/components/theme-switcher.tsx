import type { Theme } from "@/hooks/use-theme";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const THEMES: Array<{ id: Theme; color: string; label: string }> = [
  { id: "dark", color: "#888", label: "Dark" },
  { id: "amber", color: "#f5c542", label: "Amber" },
  { id: "blue", color: "#4a9eff", label: "Blue" },
];

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          aria-label={`Switch to ${t.label} theme`}
          onClick={() => setTheme(t.id)}
          className={cn(
            "size-4 cursor-pointer rounded-full border-2 transition-all duration-200",
            "focus-visible:ring-ring focus-visible:ring-offset-background hover:scale-125 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            theme === t.id
              ? "border-foreground scale-110"
              : "border-transparent opacity-60 hover:opacity-100",
          )}
          style={{ backgroundColor: t.color }}
        />
      ))}
    </div>
  );
}
