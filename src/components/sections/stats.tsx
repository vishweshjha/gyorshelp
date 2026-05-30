"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/misc";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function StatsSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-canvas to-white p-8 shadow-soft sm:p-10">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(50% 70% at 50% 0%, rgba(37,99,235,0.08), transparent 70%)",
            }}
          />

          <dl className="relative grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <dt className="order-2 mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
