import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalDocumentProps {
  sections: LegalSection[];
  lastUpdated: string;
  className?: string;
}

export function LegalDocument({
  sections,
  lastUpdated,
  className,
}: LegalDocumentProps) {
  return (
    <div className={cn("container-wide pb-20 sm:pb-24", className)}>
      <p className="text-sm text-muted-foreground">
        Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
      </p>

      <nav
        aria-label="Table of contents"
        className="mt-8 rounded-2xl border border-border/60 bg-white p-6 shadow-soft"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary">
          On this page
        </h2>
        <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-b border-border/60 pb-12 last:border-0"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
              {section.title}
            </h2>
            <div className="prose-legal mt-5">{section.content}</div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        Questions about this document?{" "}
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Contact us
        </Link>
        .
      </p>
    </div>
  );
}
