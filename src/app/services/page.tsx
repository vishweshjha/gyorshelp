import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CategoriesCarousel } from "@/components/sections/categories";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Browse all Gyors services — cleaning, repairs, caregiving, drivers, office support, and more.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="All Services"
        title={<>Every service, <span className="gradient-text">one app</span></>}
        description="From sparkling cleans to certified caregivers, we cover the help your home needs."
      />
      <CategoriesCarousel />
      <ServicesGrid />
      <FAQ />
    </>
  );
}
