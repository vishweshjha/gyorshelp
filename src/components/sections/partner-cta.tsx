"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  GraduationCap,
  IndianRupee,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: CalendarCheck,
    title: "Flexible Hours",
    description: "Choose your slots. Work part-time, full-time, or weekends.",
  },
  {
    icon: IndianRupee,
    title: "Weekly Payouts",
    description: "Earnings hit your bank every Monday. Zero deductions.",
  },
  {
    icon: Users,
    title: "More Customers",
    description: "Get matched with high-intent customers in your locality.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description: "Free skills training, tools allowance, and 24×7 support.",
  },
];

export function PartnerCTA() {
  return (
    <section id="partner" className="section bg-white">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 100% 0%, rgba(34,197,94,0.5), transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(255,255,255,0.3), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="text-white">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur"
              >
                <Briefcase className="h-3.5 w-3.5" />
                For Service Providers
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              >
                Earn more,{" "}
                <span className="bg-gradient-to-r from-accent-100 to-white bg-clip-text text-transparent">
                  on your own terms
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-5 max-w-lg text-base leading-relaxed text-white/85"
              >
                Join 5,000+ verified professionals already earning with Gyors.
                Flexible hours, weekly payouts, and a steady stream of
                customers — backed by tools and training that make the work
                easier.
              </motion.p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" variant="accent" className="shadow-glow">
                  <Link href="/become-a-partner">
                    Become a Service Partner
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-secondary">
                  <Link href="/partner-faqs">Partner FAQs</Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm text-white/80">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2.6&w=80&h=80&q=80",
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2.6&w=80&h=80&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.6&w=80&h=80&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.6&w=80&h=80&q=80",
                  ].map((url, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-cover bg-center ring-2 ring-primary-600"
                      style={{ backgroundImage: `url(${url})` }}
                    />
                  ))}
                </div>
                <span>
                  <span className="font-semibold text-white">5,000+ pros</span>{" "}
                  rated <Star className="inline h-3.5 w-3.5 fill-accent text-accent" /> 4.8 avg
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((b, idx) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 * idx }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur transition-colors hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                    {b.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
