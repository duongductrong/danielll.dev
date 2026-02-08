import { createFileRoute } from "@tanstack/react-router";
import { InteractiveConferenceBadge } from "@/features/home/components/interactive-conference-badge";

export const Route = createFileRoute("/")({ component: HomePage });

export function HomePage() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-start overflow-hidden">
      {/* <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeSwitcher />
      </header> */}

      <div className="mt-[min(20vh,160px)] w-full max-w-[70vw] px-4 sm:max-w-[50vw] md:max-w-[40vw] lg:max-w-[30vw] xl:max-w-[25vw] 2xl:max-w-[21.25vw]">
        <InteractiveConferenceBadge className="h-auto w-full" />
      </div>

      {/* {mode === 'development' && <PerformanceMonitorPanel />} */}

      <footer className="mt-auto w-full px-4 py-6">
        <p className="text-muted-foreground text-xs tracking-wide uppercase">
          &copy; {new Date().getFullYear()} Trong Duong
        </p>
      </footer>
    </div>
  );
}
