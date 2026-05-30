"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Only digits and +-() are allowed"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message must be at least 10 characters").max(800),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  async function onSubmit(values: ContactValues) {
    // Mock API: simulate latency
    await new Promise((res) => setTimeout(res, 900));
    // eslint-disable-next-line no-console
    console.log("[Gyors contact]", values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section id="contact" className="section bg-background">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>We’re here to <span className="gradient-text">help</span></>}
          description="Have a question, partnership idea, or feedback? Drop us a note and our team will get back within one business day."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.5fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <ContactInfo
              icon={Mail}
              title="Email us"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              hint="Replies within a few hours during business days."
            />
            <ContactInfo
              icon={Phone}
              title="Call us"
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              hint="Monday–Sunday · 7am to 12am IST"
            />
            <ContactInfo
              icon={MapPin}
              title="Visit us"
              value={siteConfig.address}
              hint="By appointment only."
            />

            <div className="relative mt-2 aspect-[16/10] overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-soft">
              <MapPlaceholder />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-border/60 bg-white p-7 shadow-soft sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold text-secondary">
              Send us a message
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the form below and we’ll be in touch soon.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2"
              noValidate
            >
              <Field label="Full name" error={errors.name?.message} required>
                <Input
                  {...register("name")}
                  placeholder="Aisha Verma"
                  aria-invalid={!!errors.name}
                />
              </Field>

              <Field label="Email" error={errors.email?.message} required>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="you@email.com"
                  aria-invalid={!!errors.email}
                />
              </Field>

              <Field label="Phone" error={errors.phone?.message} required>
                <Input
                  type="tel"
                  {...register("phone")}
                  placeholder="+91 98765 43210"
                  aria-invalid={!!errors.phone}
                />
              </Field>

              <Field label="Subject" error={errors.subject?.message} required>
                <Input
                  {...register("subject")}
                  placeholder="What is this about?"
                  aria-invalid={!!errors.subject}
                />
              </Field>

              <Field
                label="Message"
                error={errors.message?.message}
                className="sm:col-span-2"
                required
              >
                <Textarea
                  rows={5}
                  {...register("message")}
                  placeholder="Tell us a bit more…"
                  aria-invalid={!!errors.message}
                />
              </Field>

              <div className="sm:col-span-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="text-primary underline-offset-2 hover:underline">
                    privacy policy
                  </a>
                  .
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="sm:min-w-[180px]"
                >
                  {isSubmitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              {submitted ? (
                <div className="sm:col-span-2 flex items-center gap-2 rounded-2xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! Your message is on its way — we’ll get back soon.
                </div>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  error,
  required,
  className,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
  className?: string;
}) {
  const id = React.useId();
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={id}>
        {label} {required ? <span className="text-destructive">*</span> : null}
      </Label>
      <div id={id}>{children}</div>
      {error ? (
        <p className="text-xs font-medium text-destructive">{error}</p>
      ) : null}
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  title,
  value,
  hint,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  hint?: string;
  href?: string;
}) {
  const Content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 text-sm font-semibold text-secondary">{value}</p>
        {hint ? (
          <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
        ) : null}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {Content}
    </a>
  ) : (
    Content
  );
}

function MapPlaceholder() {
  return (
    <div className="relative h-full w-full">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #EEF2FF 0%, #E0F2FE 50%, #ECFDF5 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full" aria-hidden>
        <path
          d="M-20 220 C 120 120, 260 280, 380 180 S 620 80, 700 180"
          stroke="rgba(37,99,235,0.5)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 60 C 180 110, 220 260, 360 240"
          stroke="rgba(34,197,94,0.4)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="mx-auto flex h-12 w-12 animate-float items-center justify-center rounded-full bg-primary text-white shadow-glow">
          <MapPin className="h-6 w-6" />
        </div>
        <p className="mt-3 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-secondary backdrop-blur">
          Gyors HQ · Mumbai
        </p>
      </div>
    </div>
  );
}
