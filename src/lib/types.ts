import type { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "cleaning"
  | "repairs"
  | "caregiving"
  | "home-improvement"
  | "drivers"
  | "office-support";

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  icon: LucideIcon;
  image: string;
  startingPrice: number;
  durationMinutes: number;
  rating: number;
  bookings: string;
  highlights: string[];
}

export interface CategoryGroup {
  id: ServiceCategory;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  serviceCount: number;
  accent: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  service: string;
  review: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
