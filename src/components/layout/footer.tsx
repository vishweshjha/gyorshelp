"use client";

import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Cleaning", href: "/services/house-cleaning" },
      { label: "Repairs", href: "/services/electrician" },
      { label: "Caregiving", href: "/services/babysitter" },
      { label: "All services", href: "/#services" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Service Guarantee", href: "/guarantee" },
      { label: "Cancellation", href: "/cancellation" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refunds" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter", href: siteConfig.social.twitter },
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: Youtube, label: "YouTube", href: siteConfig.social.youtube },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  }

  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="container-wide pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-secondary hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-secondary hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-3 text-secondary">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="max-w-xs leading-relaxed">{siteConfig.address}</span>
              </div>
            </div>

            <form
              onSubmit={onSubscribe}
              className="mt-7 max-w-md"
              aria-label="Newsletter signup"
            >
              <p className="text-sm font-semibold text-secondary">Join the newsletter</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Service tips, city launches, and member-only offers. No spam, ever.
              </p>
              <div className="mt-3 flex gap-2">
                <Input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                />
                <Button type="submit" size="default" className="shrink-0">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              {subscribed ? (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-accent-700">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Thanks for subscribing!
                </p>
              ) : null}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-secondary">{col.title}</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Gyors Technologies Pvt. Ltd. All rights reserved.
            </p>
            <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs"
            >
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <span className="hidden text-border sm:inline" aria-hidden>
                ·
              </span>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
