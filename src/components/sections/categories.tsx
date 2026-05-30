"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CategoriesCarousel() {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section id="categories" className="section bg-white">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Popular Categories"
            title={<>Browse by <span className="gradient-text">category</span></>}
            description="Pick a category, see what’s included, and book with confidence."
          />

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Previous categories"
              className="h-11 w-11"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Next categories"
              className="h-11 w-11"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div
          ref={scrollerRef}
          className="container-wide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative w-[78vw] shrink-0 snap-start sm:w-[420px] lg:w-[460px]"
            >
              <Link
                href={`/services?category=${cat.id}`}
                className="relative block overflow-hidden rounded-3xl border border-border/60 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-soft",
                    )}
                  >
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                      {cat.serviceCount} services
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold">{cat.title}</h3>
                    <p className="mt-1 text-sm text-white/85 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
