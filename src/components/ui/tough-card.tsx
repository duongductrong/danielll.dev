import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

export interface ToughCardProps extends ComponentProps<"div"> {}

export const ToughCard = ({ className, ...props }: ToughCardProps) => {
  return (
    <div
      className={cn(
        "border border-border hover:bg-card transition-colors cursor-pointer",
        className
      )}
      {...props}
    />
  );
};

export interface ToughCardContentProps extends ComponentProps<"div"> {}

export const ToughCardContent = ({
  className,
  ...props
}: ToughCardContentProps) => {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
};

export interface ToughCardHeaderProps extends ComponentProps<"div"> {
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const ToughCardHeader = ({
  className,
  leftLabel,
  rightLabel,
  leftIcon,
  rightIcon,
  ...props
}: ToughCardHeaderProps) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center px-6 pt-6 pb-6",
        className
      )}
      {...props}
    >
      {(leftLabel || leftIcon) && (
        <div className="flex items-center gap-2 text-sm text-foreground">
          {leftIcon && (
            <span className="flex items-center font-bold">{leftIcon}</span>
          )}
          {leftLabel && (
            <span className="font-bold uppercase">{leftLabel}</span>
          )}
        </div>
      )}
      {(rightLabel || rightIcon) && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
          {rightLabel && <span className="font-bold">{rightLabel}</span>}
        </div>
      )}
    </div>
  );
};

export interface ToughCardTitleProps extends ComponentProps<"h3"> {}

export const ToughCardTitle = ({
  className,
  ...props
}: ToughCardTitleProps) => {
  return (
    <h3
      className={cn("text-2xl font-bold font-title mb-3", className)}
      {...props}
    />
  );
};

export interface ToughCardDescriptionProps extends ComponentProps<"p"> {}

export const ToughCardDescription = ({
  className,
  ...props
}: ToughCardDescriptionProps) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
};

export interface ToughCardIconProps extends ComponentProps<"div"> {
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

export const ToughCardIcon = ({
  className,
  children,
  ...props
}: ToughCardIconProps) => {
  if (!children) {
    return null;
  }

  return (
    <div
      className={cn("flex items-center justify-center pb-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};
