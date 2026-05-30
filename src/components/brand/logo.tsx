import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

const sizes = {
  sm: { height: 28, width: 100 },
  md: { height: 36, width: 128 },
  lg: { height: 44, width: 156 },
} as const;

export function Logo({
  className,
  href = "/",
  size = "md",
  showWordmark = true,
}: LogoProps) {
  const { height, width } = sizes[size];
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link
      href={href}
      aria-label="Gyors home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <Image
        src="/logo.png"
        alt="Gyors"
        width={width}
        height={height}
        className="h-auto w-auto object-contain"
        style={{ height, width: "auto", maxWidth: width }}
        priority
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-display font-bold tracking-tight text-secondary",
            textSize,
          )}
        >
          Gyors
        </span>
      ) : null}
    </Link>
  );
}
