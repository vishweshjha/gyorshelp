"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const featured = services.slice(0, 12);

export function ServicesGrid() {
  return (
    <section id="services" className="section bg-background">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Everything your home needs, <span className="gradient-text">on demand</span></>}
          description="From sparkling deep cleans to certified caregivers and licensed repair pros — every service is delivered by a verified, background-checked professional."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (idx % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
            >
              <Link
                href={`/services/${service.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Book ${service.name}`}
              />

              <div className="relative aspect-[5/4] w-full overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/35 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-soft backdrop-blur">
                  <service.icon className="h-5 w-5" />
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-secondary shadow-soft backdrop-blur">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  {service.rating}
                  <span className="text-muted-foreground">· {service.bookings}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-secondary">{service.name}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Starting
                    </p>
                    <p className="font-display text-xl font-bold text-secondary">
                      {formatPrice(service.startingPrice)}
                    </p>
                  </div>

                  <span className="relative z-20 inline-flex items-center gap-1 rounded-full bg-secondary/5 px-3 py-1.5 text-xs font-semibold text-secondary transition-all group-hover:bg-primary group-hover:text-white">
                    Book
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg" className="relative z-10">
            <Link href="/services">
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
