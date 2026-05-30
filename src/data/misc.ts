import {
  BadgeCheck,
  ShieldCheck,
  Wallet,
  Zap,
  MapPin,
  Lock,
  Headphones,
  Award,
  Search,
  CalendarClock,
  DoorOpen,
} from "lucide-react";
import type { Feature, ProcessStep, Stat } from "@/lib/types";

export const whyChooseFeatures: Feature[] = [
  {
    id: "verified",
    title: "Verified Experts",
    description:
      "Every professional clears a 7-step verification before entering your home.",
    icon: BadgeCheck,
  },
  {
    id: "background",
    title: "Background Checked",
    description:
      "ID, address, and police background checks are mandatory — re-verified quarterly.",
    icon: ShieldCheck,
  },
  {
    id: "pricing",
    title: "Transparent Pricing",
    description:
      "Flat, upfront rates with zero hidden fees. See the price before you confirm.",
    icon: Wallet,
  },
  {
    id: "instant",
    title: "Instant Booking",
    description:
      "Confirm a slot in under 60 seconds. On-demand pros arrive within the hour.",
    icon: Zap,
  },
  {
    id: "tracking",
    title: "Live Tracking",
    description:
      "Watch your pro on the map from start to doorstep — with real-time ETA updates.",
    icon: MapPin,
  },
  {
    id: "secure",
    title: "Secure Payments",
    description:
      "PCI-compliant payments, UPI, cards, wallets, or cash. Refunds in 24 hours.",
    icon: Lock,
  },
  {
    id: "support",
    title: "Customer Support",
    description:
      "Real humans on chat and call, 18 hours a day. Average response under 90 seconds.",
    icon: Headphones,
  },
  {
    id: "guarantee",
    title: "Service Guarantee",
    description:
      "Not satisfied? We redo the job free, or refund you in full — within 7 days.",
    icon: Award,
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Choose Service",
    description:
      "Browse 15+ verified services and pick what you need — cleaning, repairs, or care.",
    icon: Search,
  },
  {
    id: 2,
    title: "Select Date & Time",
    description:
      "Pick a slot that works for you. Book now or schedule up to 30 days ahead.",
    icon: CalendarClock,
  },
  {
    id: 3,
    title: "Professional Arrives",
    description:
      "Track your pro live to your doorstep. Rate, review, and pay — all in-app.",
    icon: DoorOpen,
  },
];

export const stats: Stat[] = [
  { id: "bookings", label: "Bookings completed", value: 50000, suffix: "+" },
  { id: "customers", label: "Happy customers", value: 10000, suffix: "+" },
  { id: "pros", label: "Verified professionals", value: 5000, suffix: "+" },
  { id: "cities", label: "Cities served", value: 25, suffix: "+" },
];
