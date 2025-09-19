"use client";

import { cn } from "@/lib/utils";
import { Atom, Loader } from "lucide-react";
import { ComponentProps, ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export interface CodeSpotProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export const CodeSpot = ({ className, children, ...props }: CodeSpotProps) => {
  return (
    <ErrorBoundary FallbackComponent={CodeSpotError}>
      <Suspense
        fallback={
          <div className="rounded-lg border border border-preview-border bg-preview-bg p-4 text-sm text-sm text-center min-h-14 h-20 flex items-center justify-center">
            <div className="flex items-center flex-col">
              <Loader className="size-6 animate-spin text-center" />
              <span className="inline-block mt-1">Loading</span>
            </div>
          </div>
        }
      >
        <div
          {...props}
          data-slot="code-spot"
          className={cn(
            className,
            "border border-preview-border bg-preview-bg rounded-lg min-h-64",
            "flex items-center justify-center text-sm p-2"
          )}
        >
          {children}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

const CodeSpotError = ({ error }: { error: Error }) => {
  return (
    <div
      role="alert"
      className="rounded-lg border border-preview-border bg-preview-bg p-4 text-sm h-20 flex items-center justify-center"
    >
      Error: {error.message}
    </div>
  );
};
