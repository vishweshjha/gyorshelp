import type { Metadata } from "next";
import { PartnerCTA } from "@/components/sections/partner-cta";
import { StatsSection } from "@/components/sections/stats";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ClipboardList,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Join 5,000+ verified professionals earning more on their own terms with Gyors. Weekly payouts, flexible hours, training included.",
};

const onboarding = [
  {
    step: 1,
    title: "Apply online",
    description:
      "Fill our 5-minute form with your skills, city, and availability.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Verification & training",
    description:
      "Clear our 7-step verification and complete a 2-day skills program — free of cost.",
    icon: ShieldCheck,
  },
  {
    step: 3,
    title: "Start earning",
    description:
      "Activate your profile, accept jobs near you, and get paid every Monday.",
    icon: Wallet,
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="For Service Providers"
        title={<>Build a career, <span className="gradient-text">on your terms</span></>}
        description="Whether you’re an electrician, cleaner, cook, or driver — Gyors gives you steady work, fair pay, and the tools to grow. Join 5,000+ verified pros today."
      >
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="xl">
            <Link href="#apply">Apply now</Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="tel:+918000080000">
              <PhoneCall className="h-4 w-4" />
              Talk to a recruiter
            </Link>
          </Button>
        </div>
      </PageHero>

      <PartnerCTA />

      <section id="apply" className="section bg-background">
        <div className="container-wide">
          <h2 className="display-2 max-w-2xl text-balance">
            Getting started is <span className="gradient-text">easy</span>
          </h2>
          <p className="lede mt-4 max-w-2xl">
            Three simple steps and you’re ready to earn. Most partners are
            activated within 72 hours.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {onboarding.map((o) => (
              <div
                key={o.step}
                className="relative rounded-3xl border border-border/60 bg-white p-7 shadow-soft"
              >
                <span className="absolute -top-3 left-7 inline-flex h-7 items-center rounded-full bg-primary px-3 text-xs font-bold text-white">
                  Step {o.step}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <o.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-secondary">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {o.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-primary/15 bg-primary/5 p-8 sm:p-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="eyebrow"><Sparkles className="h-3 w-3" /> Earnings Promise</span>
                <p className="mt-3 font-display text-2xl font-bold text-secondary sm:text-3xl">
                  Top partners earn ₹40,000+ per month
                </p>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  Earnings vary by city, category, and hours. Backed by our
                  weekly-payout guarantee and zero deductions on tips.
                </p>
              </div>
              <Button asChild size="xl">
                <Link href="#apply">Start your application</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}
