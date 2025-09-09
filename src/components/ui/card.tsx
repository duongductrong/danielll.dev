import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef } from "react";

export interface CardProps {}

export const Card = forwardRef(
  ({ className, as = "div", ...props }, ref) => {
    const Comp = as ?? "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-xl border bg-card text-card-foreground shadow",
          className
        )}
        {...props}
      />
    );
  }
) as ForwardRefComponent<"div", CardProps>;

Card.displayName = "Card";

export interface CardHeaderProps {}

export const CardHeader = forwardRef(
  ({ className, as = "div", ...props }, ref) => {
    const Comp = as ?? "div";
    return (
      <Comp
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      />
    );
  }
) as ForwardRefComponent<"div", CardHeaderProps>;

CardHeader.displayName = "CardHeader";

export interface CardTitleProps {}

export const CardTitle = forwardRef(
  ({ className, as = "h3", ...props }, ref) => {
    const Comp = as ?? "h3";
    return (
      <Comp
        ref={ref}
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
      />
    );
  }
) as ForwardRefComponent<"h3", CardTitleProps>;

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps {}

export const CardDescription = forwardRef(
  ({ className, as = "p", ...props }, ref) => {
    const Comp = as ?? "p";
    return (
      <Comp
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    );
  }
) as ForwardRefComponent<"p", CardDescriptionProps>;

CardDescription.displayName = "CardDescription";

export interface CardContentProps {}

export const CardContent = forwardRef(
  ({ className, as = "div", ...props }, ref) => {
    const Comp = as ?? "div";
    return (
      <Comp ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    );
  }
) as ForwardRefComponent<"div", CardContentProps>;

CardContent.displayName = "CardContent";

export interface CardFooterProps {}

export const CardFooter = forwardRef(
  ({ className, as = "div", ...props }, ref) => {
    const Comp = as ?? "div";
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
      />
    );
  }
) as ForwardRefComponent<"div", CardFooterProps>;

CardFooter.displayName = "CardFooter";
