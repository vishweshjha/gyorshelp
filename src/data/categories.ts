import {
  Sparkles,
  Wrench,
  HeartHandshake,
  Hammer,
  Car,
  Briefcase,
} from "lucide-react";
import type { CategoryGroup } from "@/lib/types";

export const categories: CategoryGroup[] = [
  {
    id: "cleaning",
    title: "Cleaning",
    description:
      "Daily cleaning, deep cleaning, and move-in/move-out sparkle for every corner of your home.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    icon: Sparkles,
    serviceCount: 6,
    accent: "from-sky-100 to-sky-50",
  },
  {
    id: "repairs",
    title: "Repairs",
    description:
      "Plumbers, electricians, AC techs, and appliance pros — diagnosed and fixed the same day.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    icon: Wrench,
    serviceCount: 8,
    accent: "from-amber-100 to-amber-50",
  },
  {
    id: "caregiving",
    title: "Caregiving",
    description:
      "Verified cooks, babysitters, and elder-care attendants who treat your home like their own.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    icon: HeartHandshake,
    serviceCount: 4,
    accent: "from-rose-100 to-rose-50",
  },
  {
    id: "home-improvement",
    title: "Home Improvement",
    description:
      "Painting, carpentry, pest control, and finishing touches — full-service or one-time visits.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
    icon: Hammer,
    serviceCount: 5,
    accent: "from-emerald-100 to-emerald-50",
  },
  {
    id: "drivers",
    title: "Drivers",
    description:
      "RTO-verified drivers for daily commutes, weekend outings, and outstation trips on demand.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    icon: Car,
    serviceCount: 3,
    accent: "from-indigo-100 to-indigo-50",
  },
  {
    id: "office-support",
    title: "Office Support",
    description:
      "Pantry, housekeeping, laundry, and front-desk assistance for offices and co-working spaces.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    icon: Briefcase,
    serviceCount: 4,
    accent: "from-violet-100 to-violet-50",
  },
];
