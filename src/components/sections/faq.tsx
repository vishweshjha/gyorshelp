"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LifeBuoy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="section bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Frequently Asked"
              title={<>Questions, <span className="gradient-text">answered</span></>}
              description="Everything you need to know about booking, verification, payments, and more."
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 rounded-3xl border border-primary/15 bg-primary/5 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <LifeBuoy className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-secondary">
                Still have questions?
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Our customer support team is available 18 hours a day. We
                typically respond in under 90 seconds.
              </p>
              <Button asChild variant="default" size="default" className="mt-5">
                <Link href="/contact">Contact support</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible defaultValue={faqs[0]?.id} className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem value={faq.id} key={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
