import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "center",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden pt-16 sm:pt-20", className)}>
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-hero-radial"
        aria-hidden
      />
      <div className="container-wide pb-12 pt-6 sm:pb-16">
        <div
          className={cn(
            "flex flex-col gap-5",
            align === "center" ? "items-center text-center" : "items-start text-left",
          )}
        >
          {eyebrow ? (
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="display-1 max-w-3xl text-balance">{title}</h1>
          {description ? (
            <p className="lede max-w-2xl text-pretty">{description}</p>
          ) : null}
          {children ? <div className="mt-2">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
