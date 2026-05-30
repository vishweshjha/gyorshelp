"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock4,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: BadgeCheck, label: "Verified Professionals" },
  { icon: Clock4, label: "Same-Day Service" },
  { icon: ShieldCheck, label: "Transparent Pricing" },
  { icon: Users, label: "10,000+ Happy Customers" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-10 sm:pt-14">
      {/* Background flourishes */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-hero-radial" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(60%_55%_at_50%_30%,black,transparent)]"
        aria-hidden
      >
        <div className="bg-grid h-full w-full" />
      </div>

      <div className="container-wide grid grid-cols-1 items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32 lg:pt-12">
        <div className="flex flex-col">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Reliable Help. Delivered Fast.
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="display-1 mt-5 text-balance"
          >
            Home Services{" "}
            <span className="relative whitespace-nowrap">
              <span className="gradient-text">At Your Doorstep</span>
              <svg
                aria-hidden
                viewBox="0 0 318 12"
                className="absolute -bottom-2 left-0 h-2 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C70 3 150 3 316 9"
                  stroke="url(#g)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="lede mt-6 max-w-xl"
          >
            Book trusted professionals for cleaning, repairs, caregiving, and
            everyday help within minutes. Background-checked, insured, and
            rated by thousands.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="xl" className="group">
              <Link href="/#services">
                Book Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/become-a-partner">Become a Partner</Link>
            </Button>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            aria-label="Why customers trust Gyors"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 rounded-2xl border border-border/60 bg-white/80 px-3 py-3 backdrop-blur"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <badge.icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-secondary">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.dl>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      {/* Backdrop card */}
      <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-600 via-primary-700 to-secondary p-8 shadow-elevated">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,197,94,0.4), transparent 50%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Pro photo card */}
        <div className="absolute left-6 top-6 z-10 w-56 max-w-[60%] rounded-3xl bg-white p-3 shadow-elevated">
          <div
            className="aspect-[4/5] w-full rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80)",
            }}
          />
          <div className="mt-3 flex items-center justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-secondary">Asha M.</p>
              <p className="text-xs text-muted-foreground">Cleaning Pro</p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent-700">
              <Star className="h-3 w-3 fill-current" />
              4.9
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute -bottom-2 -right-2 z-20 w-[58%] sm:-right-4 sm:bottom-0 sm:w-[260px]"
        >
          <PhoneMock />
        </motion.div>

        {/* Floating chips */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 top-12 hidden rounded-2xl bg-white/95 px-3 py-2 text-xs font-semibold text-secondary shadow-soft backdrop-blur sm:flex sm:items-center sm:gap-2"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent" />
          Arriving in 12 min
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 left-4 hidden rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-secondary shadow-soft sm:flex sm:items-center sm:gap-2"
        >
          <BadgeCheck className="h-3.5 w-3.5 text-primary" />
          Verified & insured
        </motion.div>
      </div>

      {/* Decorative blur */}
      <div className="absolute -bottom-10 -left-10 -z-10 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full bg-primary/30 blur-3xl" />
    </motion.div>
  );
}

function PhoneMock() {
  return (
    <div className="rounded-[2rem] border-[6px] border-secondary bg-secondary p-1 shadow-2xl">
      <div className="overflow-hidden rounded-[1.6rem] bg-white">
        <div className="flex items-center justify-between bg-white px-4 pb-2 pt-3 text-[10px] font-semibold text-secondary">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-3 rounded-sm bg-secondary" />
            <span className="h-1.5 w-3 rounded-sm bg-secondary" />
            <span className="h-2 w-3 rounded-sm border border-secondary" />
          </span>
        </div>
        <div className="px-4 pb-4">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Your booking
          </p>
          <p className="mt-1 text-sm font-semibold text-secondary">
            Deep Cleaning · 2BHK
          </p>
          <div className="mt-3 rounded-xl bg-primary/5 p-3">
            <p className="text-[10px] font-semibold uppercase text-primary">
              On the way
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2.6&w=80&h=80&q=80)",
                }}
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-secondary">Priya R.</p>
                <p className="text-[10px] text-muted-foreground">★ 4.9 · 850 jobs</p>
              </div>
              <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-white">
                12 min
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-accent" />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {["Track", "Chat", "Cancel"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-border/60 py-2 text-[10px] font-semibold text-secondary"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
