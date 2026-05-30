import type { Metadata } from "next";
import Link from "next/link";
import { Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsCarousel } from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gyors is on a mission to make trusted home help instant, transparent, and dignified — for customers and professionals alike.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Trust by design",
    description:
      "Every pro is verified through a 7-step process. Every job is insured. Every rupee is transparent.",
  },
  {
    icon: HeartHandshake,
    title: "Dignity of work",
    description:
      "We pay our partners fairly, on time, every week — with training, tools, and benefits built in.",
  },
  {
    icon: Sparkles,
    title: "Craft and care",
    description:
      "We obsess over the small details so every booking — your tenth or your first — feels effortless.",
  },
  {
    icon: Compass,
    title: "Local, always",
    description:
      "We launch city by city, listen to neighborhoods, and adapt to what your community actually needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Gyors"
        title={<>Reliable help, <span className="gradient-text">on demand</span></>}
        description="We started Gyors with one belief: getting trusted help at home shouldn’t require a phone tree, a friend-of-a-friend, or a leap of faith. Today, we’re building the most trusted on-demand services platform in India."
      />

      <section className="section pt-0">
        <div className="container-wide grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cover bg-center shadow-elevated"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80)",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/80 to-transparent p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                Est. 2024 · Mumbai
              </p>
              <p className="mt-2 font-display text-2xl font-bold">
                Built for the people who make homes work.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="display-2 text-balance">Our story</h2>
            <p className="lede mt-5">
              In 2024, our founders waited four hours for a plumber who never showed.
              That afternoon, we sketched what would become Gyors — a platform that
              treats both customers and professionals like the partners they are.
            </p>
            <p className="lede mt-4">
              Two years on, we serve 25+ cities, employ 5,000+ verified pros, and
              complete a job every minute somewhere in India. We’re just getting
              started.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/become-a-partner">Work with us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-wide">
          <h2 className="display-2 max-w-2xl text-balance">
            The values that shape <span className="gradient-text">every booking</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-secondary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsCarousel />
    </>
  );
}
