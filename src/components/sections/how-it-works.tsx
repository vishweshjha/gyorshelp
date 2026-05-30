"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/misc";
import { SectionHeading } from "@/components/shared/section-heading";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section relative bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How Gyors Works"
          title={<>Three taps to your <span className="gradient-text">doorstep</span></>}
          description="From browse to booking to a knock at your door — Gyors keeps it effortless, transparent, and lightning fast."
        />

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden md:block">
            <div className="mx-auto h-px max-w-[78%] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-primary/10" />
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.15 + 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-glow"
                  >
                    <step.icon className="h-7 w-7" />
                  </motion.div>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-accent text-xs font-bold text-white shadow-soft">
                    {step.id}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-secondary">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
