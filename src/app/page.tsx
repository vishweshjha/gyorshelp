import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyChoose } from "@/components/sections/why-choose";
import { CategoriesCarousel } from "@/components/sections/categories";
import { AppDownload } from "@/components/sections/app-download";
import { TestimonialsCarousel } from "@/components/sections/testimonials";
import { PartnerCTA } from "@/components/sections/partner-cta";
import { StatsSection } from "@/components/sections/stats";
import { FAQ } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <WhyChoose />
      <CategoriesCarousel />
      <AppDownload />
      <TestimonialsCarousel />
      <PartnerCTA />
      <StatsSection />
      <FAQ />
      <ContactSection />
    </>
  );
}
