"use client";

import { motion } from "framer-motion";
import { Bell, CreditCard, History, MapPin, QrCode } from "lucide-react";
import { siteConfig } from "@/lib/site";

const appFeatures = [
  { icon: Bell, label: "One-Tap Booking" },
  { icon: MapPin, label: "Live Tracking" },
  { icon: CreditCard, label: "Easy Payments" },
  { icon: History, label: "Booking History" },
];

export function AppDownload() {
  return (
    <section
      id="app"
      className="section relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#0a1023] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 20%, rgba(37,99,235,0.55), transparent 60%), radial-gradient(50% 50% at 10% 80%, rgba(34,197,94,0.35), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-wide relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Mobile App
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Your home services,{" "}
            <span className="bg-gradient-to-r from-accent to-primary-300 bg-clip-text text-transparent">
              one tap away.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/75"
          >
            Track your pro live, manage bookings, pay securely, and rate your
            experience — all from the Gyors app. Built for iOS and Android.
          </motion.p>

          <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            {appFeatures.map((f, idx) => (
              <motion.li
                key={f.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <f.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-white">{f.label}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.apps.android}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 transition-all hover:bg-white hover:text-secondary"
            >
              <GooglePlayIcon className="h-7 w-7 transition" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-80">
                  Get it on
                </span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </a>
            <a
              href={siteConfig.apps.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 transition-all hover:bg-white hover:text-secondary"
            >
              <AppleIcon className="h-7 w-7 transition" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-80">
                  Download on the
                </span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </a>

            <div className="ml-1 hidden items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 sm:flex">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-secondary">
                <QrCode className="h-9 w-9" />
              </div>
              <p className="text-xs leading-tight text-white/85">
                Scan to <br /> download
              </p>
            </div>
          </div>
        </div>

        <AppShowcase />
      </div>
    </section>
  );
}

function AppShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex w-full max-w-[520px] items-end justify-center"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[55%] -rotate-[6deg] sm:w-[260px]"
      >
        <PhoneScreen variant="track" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="relative z-20 -ml-12 w-[55%] rotate-[4deg] sm:w-[260px]"
      >
        <PhoneScreen variant="home" />
      </motion.div>

      <div className="absolute -bottom-12 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
    </motion.div>
  );
}

function PhoneScreen({ variant }: { variant: "track" | "home" }) {
  return (
    <div className="rounded-[2.4rem] border-[8px] border-secondary bg-secondary p-1 shadow-2xl ring-1 ring-white/10">
      <div className="overflow-hidden rounded-[1.9rem] bg-white">
        <div className="flex items-center justify-between bg-white px-4 pb-1.5 pt-2.5 text-[10px] font-semibold text-secondary">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-3 rounded-sm bg-secondary" />
            <span className="h-1.5 w-3 rounded-sm bg-secondary" />
            <span className="h-2 w-3 rounded-sm border border-secondary" />
          </span>
        </div>
        {variant === "home" ? <HomeScreen /> : <TrackScreen />}
      </div>
    </div>
  );
}

function HomeScreen() {
  const tiles = [
    { label: "Cleaning", color: "bg-sky-100 text-sky-700" },
    { label: "Plumber", color: "bg-amber-100 text-amber-700" },
    { label: "Babysitter", color: "bg-rose-100 text-rose-700" },
    { label: "Electrician", color: "bg-violet-100 text-violet-700" },
  ];
  return (
    <div className="px-4 pb-5 pt-2">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Hello, Aisha</p>
      <p className="text-sm font-bold text-secondary">What do you need today?</p>
      <div className="mt-3 flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-[11px] text-muted-foreground">
        <span>🔍</span> Search services
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {tiles.map((t) => (
          <div
            key={t.label}
            className={`flex h-16 items-end rounded-xl ${t.color} px-2.5 py-2 text-[11px] font-semibold`}
          >
            {t.label}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-primary p-3 text-white">
        <p className="text-[10px] uppercase tracking-wider opacity-80">Today’s offer</p>
        <p className="text-xs font-bold">25% off Deep Cleaning</p>
      </div>
    </div>
  );
}

function TrackScreen() {
  return (
    <div className="px-4 pb-5 pt-2">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Tracking</p>
      <p className="text-sm font-bold text-secondary">Asha is 12 min away</p>
      <div className="relative mt-3 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.2) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        <svg
          viewBox="0 0 200 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <path
            d="M10 80 Q 60 30 100 60 T 190 20"
            stroke="#2563EB"
            strokeWidth="3"
            fill="none"
            strokeDasharray="5 5"
          />
          <circle cx="10" cy="80" r="5" fill="#22C55E" />
          <circle cx="190" cy="20" r="5" fill="#2563EB" />
        </svg>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-muted p-2.5">
        <div
          className="h-9 w-9 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2.6&w=80&h=80&q=80)",
          }}
        />
        <div className="flex-1">
          <p className="text-xs font-semibold text-secondary">Asha M.</p>
          <p className="text-[10px] text-muted-foreground">Deep Cleaning · 2BHK</p>
        </div>
        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-white">
          ETA 12m
        </span>
      </div>
    </div>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.4 2.235-1.05 3.05-.71.88-1.84 1.55-2.96 1.45-.13-1.15.43-2.31 1.07-3.04.72-.84 1.96-1.46 2.94-1.46zM20.5 17.13c-.6 1.36-.88 1.97-1.66 3.17-1.08 1.66-2.6 3.73-4.48 3.75-1.67.02-2.1-1.09-4.36-1.07-2.26.02-2.74 1.09-4.41 1.07-1.88-.02-3.32-1.89-4.4-3.55-3.02-4.66-3.34-10.13-1.47-13.03 1.32-2.06 3.41-3.27 5.38-3.27 2 0 3.26 1.1 4.91 1.1 1.6 0 2.58-1.1 4.9-1.1 1.76 0 3.62.96 4.95 2.62-4.35 2.38-3.64 8.6-.13 10.31z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M3.5 2.5l11 9.5-11 9.5c-.3-.2-.5-.6-.5-1.1V3.6c0-.5.2-.9.5-1.1z"
        fill="#22C55E"
      />
      <path
        d="M14.5 12L18.7 8.5 5.4 1.5c-.4-.2-.9-.2-1.3 0L14.5 12z"
        fill="#60A5FA"
      />
      <path
        d="M14.5 12l4.2 3.5-13.3 7c-.4.2-.9.2-1.3 0L14.5 12z"
        fill="#F59E0B"
      />
      <path
        d="M21 11.1l-2.3-1.3-4.2 2.2 4.2 2.2 2.3-1.3c.7-.4.7-1.4 0-1.8z"
        fill="#EF4444"
      />
    </svg>
  );
}
