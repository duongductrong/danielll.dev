import { createFileRoute } from '@tanstack/react-router'
import { InteractiveConferenceBadge } from '@/features/home/components/interactive-conference-badge'

export const Route = createFileRoute('/')({ component: HomePage })

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-background overflow-hidden">
      <div className="w-full max-w-[70vw] sm:max-w-[50vw] md:max-w-[40vw] lg:max-w-[30vw] xl:max-w-[25vw] 2xl:max-w-[21.25vw] px-4 mt-[min(20vh,160px)]">
        <InteractiveConferenceBadge className="w-full h-auto" />
      </div>

      {/* {mode === 'development' && <PerformanceMonitorPanel />} */}

      <footer className="mt-auto w-full px-4 py-6">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          &copy; {new Date().getFullYear()} Trong Duong
        </p>
      </footer>
    </div>
  )
}
