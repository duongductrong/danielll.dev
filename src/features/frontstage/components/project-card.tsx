import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

export interface ProjectCardProps extends ComponentProps<typeof Link> {
  // no: string;
  title: string;
  // category: string;
  description: string;
  url: string;
  // role: string;
  ogImage?: string | null;
  status?: string | null;
}

const ProjectCard = ({
  className,
  // no,
  title,
  // category,
  description,
  url,
  // role,
  ogImage,
  status,
  ...props
}: ProjectCardProps) => {
  const isComingSoon = status === "coming-soon";

  return (
    <Link
      {...props}
      href={url}
      target="_blank"
      className={cn(
        "flex flex-col border border-border p-2 rounded-md hover:border-green-500 transition-colors",
        isComingSoon ? "cursor-not-allowed" : "",
        className
      )}
    >
      <div className="relative leading-none mb-2">
        {ogImage ? (
          <Image
            src={ogImage}
            alt={title}
            width={400}
            height={400}
            className="w-full h-[200px] object-cover rounded-sm leading-none"
          />
        ) : (
          <div className="w-full h-[200px] relative flex items-center justify-center bg-secondary rounded-sm">
            <ImageOff className="size-6" />
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {isComingSoon ? (
          <div className="w-[200px]">
            <Text
              variant="caption"
              className="text-foreground bg-background px-2 py-1 rounded-md absolute top-2 -right-7 transform-gpu rotate-45 origin-center"
            >
              Coming Soon
            </Text>
          </div>
        ) : null}
      </div>

      <div>
        <Text variant="body" className="font-medium">
          {title}
        </Text>
        <Text variant="body" className="font-medium text-muted-foreground">
          {description}
        </Text>
      </div>
    </Link>
  );
};

export default ProjectCard;
