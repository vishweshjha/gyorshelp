import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FAQ } from "@/components/sections/faq";
import { formatPrice } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} · Gyors`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

const inclusions = [
  "Verified, background-checked professional",
  "All tools, equipment, and consumables included",
  "Transparent flat pricing — no hidden fees",
  "Live tracking and in-app chat",
  "30-day workmanship warranty",
  "Gyors Service Promise — redo or refund",
];

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 4);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-12 sm:pt-16">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-hero-radial"
          aria-hidden
        />
        <div className="container-wide grid grid-cols-1 gap-12 pb-12 pt-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-20">
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              ← All services
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Badge variant="success">
                <Star className="h-3 w-3 fill-current" /> {service.rating} rating
              </Badge>
              <Badge>{service.bookings} bookings</Badge>
              <Badge variant="outline">
                <CalendarClock className="h-3 w-3" />
                {Math.round(service.durationMinutes / 60)} hr average
              </Badge>
            </div>

            <h1 className="display-1 mt-5 text-balance">{service.name}</h1>
            <p className="lede mt-5 max-w-xl">{service.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {service.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-700"
                >
                  <Sparkles className="h-3 w-3" /> {h}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="xl" asChild>
                <Link href="#book">
                  Book now · {formatPrice(service.startingPrice)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/contact">Ask a question</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2rem] shadow-elevated">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />

              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-soft backdrop-blur">
                <service.icon className="h-6 w-6" />
              </div>

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4 shadow-elevated backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Starting at
                    </p>
                    <p className="font-display text-2xl font-bold text-secondary">
                      {formatPrice(service.startingPrice)}
                    </p>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="#book">Book</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="section pt-0">
        <div className="container-wide grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="rounded-3xl border border-border/60 bg-white p-7 shadow-soft sm:p-9">
            <h2 className="font-display text-2xl font-bold text-secondary sm:text-3xl">
              What’s included
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every Gyors booking comes with the same standards — transparent
              pricing, verified pros, and a workmanship warranty.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary-700 to-primary-600 p-7 text-white shadow-glow">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/85">
              <ShieldCheck className="h-4 w-4" />
              Gyors guarantee
            </div>
            <p className="font-display mt-3 text-2xl font-bold">
              We promise the job, every time.
            </p>
            <p className="mt-2 text-sm text-white/85">
              Not 100% happy? We’ll redo the service free or refund your money —
              within 7 days. No questions, no hoops.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-accent" />
              <p className="text-sm">Backed by ₹10L professional insurance</p>
            </div>
            <Button asChild variant="accent" size="lg" className="mt-7 w-full">
              <Link href="/contact">
                Book a free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="section bg-background pt-0">
          <div className="container-wide">
            <h2 className="display-2">You may also like</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/services/${r.slug}`}
                  className="group overflow-hidden rounded-3xl border border-border/60 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-secondary">{r.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      From {formatPrice(r.startingPrice)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FAQ />
    </>
  );
}
