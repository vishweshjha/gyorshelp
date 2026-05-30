"use client";

import { motion } from "framer-motion";
import { whyChooseFeatures } from "@/data/misc";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyChoose() {
  return (
    <section id="why" className="section bg-background">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Choose Gyors"
          title={<>Built on <span className="gradient-text">trust</span>, designed for ease</>}
          description="Verified pros, transparent pricing, secure payments, and a service promise that has your back. The way home services should always have worked."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (idx % 4) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-secondary">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
