"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function TestimonialsCarousel() {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section id="testimonials" className="section bg-background">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Loved By Customers"
            title={<>Real stories from <span className="gradient-text">real homes</span></>}
            description="Over 10,000 customers across 25+ cities. Every booking is rated — here’s what they’re saying."
          />
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Previous testimonial" className="h-11 w-11">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Next testimonial" className="h-11 w-11">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div
          ref={scrollerRef}
          className="container-wide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              data-card
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative flex w-[88vw] shrink-0 snap-start flex-col rounded-3xl border border-border/60 bg-white p-7 shadow-soft sm:w-[400px] lg:w-[420px]"
            >
              <Quote className="absolute right-7 top-7 h-9 w-9 text-primary/10" aria-hidden />

              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-secondary">
                “{t.review}”
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-border/60 pt-5">
                <div
                  className="h-11 w-11 rounded-full bg-cover bg-center ring-2 ring-white shadow-soft"
                  style={{ backgroundImage: `url(${t.avatar})` }}
                  aria-hidden
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-secondary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.city} · {t.service}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
