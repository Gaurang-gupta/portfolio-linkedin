import NextImage from "next/image";

import { cn } from "@/lib/utils";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  priority?: boolean;
  className?: string;
}

export function Image({
  src,
  alt,
  width = 1600,
  height = 900,
  caption,
  priority = false,
  className,
}: ImageProps) {
  return (
    <figure className="my-10">
      <div className="bg-card overflow-hidden rounded-2xl border shadow-sm">
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={cn(
            "w-full object-cover transition-transform duration-300 hover:scale-[1.01]",
            className,
          )}
        />
      </div>

      {caption && (
        <figcaption className="text-muted-foreground mt-3 text-center text-sm italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
