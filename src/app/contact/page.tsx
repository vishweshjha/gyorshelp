import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ContactSection } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Gyors team. Customer support, partnerships, press, and feedback — we’re happy to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s <span className="gradient-text">talk</span></>}
        description="Customer support, partnerships, press, or just a hello — we’d love to hear from you."
      />
      <ContactSection />
      <FAQ />
    </>
  );
}
