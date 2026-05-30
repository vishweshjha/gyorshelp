import {
  Sparkles,
  SprayCan,
  ChefHat,
  Baby,
  HeartHandshake,
  Car,
  Zap,
  Wrench,
  Snowflake,
  Refrigerator,
  Hammer,
  Brush,
  Bug,
  Shirt,
  Briefcase,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "house-cleaning",
    slug: "house-cleaning",
    name: "House Cleaning",
    category: "cleaning",
    description:
      "Trained cleaners for sparkling kitchens, bathrooms, and living spaces. Eco-friendly products included.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    startingPrice: 399,
    durationMinutes: 120,
    rating: 4.9,
    bookings: "12k+",
    highlights: ["Eco-friendly", "Same-day", "Insured"],
  },
  {
    id: "deep-cleaning",
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    category: "cleaning",
    description:
      "Top-to-bottom intensive cleaning with steam, scrub, and disinfectant treatment for every corner.",
    icon: SprayCan,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    startingPrice: 1499,
    durationMinutes: 300,
    rating: 4.8,
    bookings: "8k+",
    highlights: ["Steam clean", "Move-in ready", "5-hour service"],
  },
  {
    id: "cook",
    slug: "cook",
    name: "Cook at Home",
    category: "caregiving",
    description:
      "Skilled home chefs preparing fresh meals tailored to your taste — North Indian, South Indian, and continental.",
    icon: ChefHat,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    startingPrice: 599,
    durationMinutes: 90,
    rating: 4.9,
    bookings: "6k+",
    highlights: ["Custom menu", "Hygienic", "Trained chefs"],
  },
  {
    id: "babysitter",
    slug: "babysitter",
    name: "Babysitter",
    category: "caregiving",
    description:
      "Certified caregivers for infants and toddlers — fully background-verified with childcare training.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    startingPrice: 499,
    durationMinutes: 240,
    rating: 4.9,
    bookings: "3k+",
    highlights: ["First-aid trained", "Verified", "Hourly billing"],
  },
  {
    id: "elder-care",
    slug: "elder-care",
    name: "Elder Care",
    category: "caregiving",
    description:
      "Compassionate companions and trained attendants for daily care, mobility, and medical reminders.",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    startingPrice: 699,
    durationMinutes: 480,
    rating: 4.8,
    bookings: "2k+",
    highlights: ["Certified", "Patient care", "Medication reminders"],
  },
  {
    id: "electrician",
    slug: "electrician",
    name: "Electrician",
    category: "repairs",
    description:
      "Licensed electricians for wiring, switches, fans, lighting, and full home electrical fitouts.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    startingPrice: 249,
    durationMinutes: 60,
    rating: 4.8,
    bookings: "15k+",
    highlights: ["Licensed", "Warranty", "Genuine parts"],
  },
  {
    id: "plumber",
    slug: "plumber",
    name: "Plumber",
    category: "repairs",
    description:
      "Fast-response plumbing — leak fixes, pipe replacement, bathroom fittings, and water-heater work.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=900&q=80",
    startingPrice: 249,
    durationMinutes: 60,
    rating: 4.7,
    bookings: "11k+",
    highlights: ["30-min response", "Parts included", "Warranty"],
  },
  {
    id: "carpenter",
    slug: "carpenter",
    name: "Carpenter",
    category: "home-improvement",
    description:
      "Custom carpentry, furniture repair, door & lock fixes, and modular installations done right.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=900&q=80",
    startingPrice: 299,
    durationMinutes: 90,
    rating: 4.8,
    bookings: "7k+",
    highlights: ["Custom work", "Quality tools", "30-day warranty"],
  },
  {
    id: "ac-repair",
    slug: "ac-repair",
    name: "AC Repair & Service",
    category: "repairs",
    description:
      "Service, gas refill, deep clean, and installation for split, window, and cassette AC units.",
    icon: Snowflake,
    image:
      "https://images.unsplash.com/photo-1631545806609-ed1eb1c0c5b6?auto=format&fit=crop&w=900&q=80",
    startingPrice: 499,
    durationMinutes: 60,
    rating: 4.8,
    bookings: "9k+",
    highlights: ["All brands", "Gas refill", "60-day warranty"],
  },
  {
    id: "appliance-repair",
    slug: "appliance-repair",
    name: "Appliance Repair",
    category: "repairs",
    description:
      "Refrigerator, washing machine, microwave, geyser & chimney repair by certified technicians.",
    icon: Refrigerator,
    image:
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=900&q=80",
    startingPrice: 349,
    durationMinutes: 60,
    rating: 4.7,
    bookings: "8k+",
    highlights: ["All brands", "Free diagnosis", "Genuine spares"],
  },
  {
    id: "home-painting",
    slug: "home-painting",
    name: "Home Painting",
    category: "home-improvement",
    description:
      "Premium interior and exterior painting with branded paints, surface prep, and zero-mess delivery.",
    icon: Brush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
    startingPrice: 2999,
    durationMinutes: 1440,
    rating: 4.8,
    bookings: "1.2k+",
    highlights: ["Asian Paints", "1-yr warranty", "No-mess promise"],
  },
  {
    id: "pest-control",
    slug: "pest-control",
    name: "Pest Control",
    category: "home-improvement",
    description:
      "Safe, odorless pest control for cockroaches, termites, bedbugs, mosquitoes, and rodents.",
    icon: Bug,
    image:
      "https://images.unsplash.com/photo-1583338917496-7d4ec76b1f4f?auto=format&fit=crop&w=900&q=80",
    startingPrice: 999,
    durationMinutes: 120,
    rating: 4.8,
    bookings: "4k+",
    highlights: ["Pet-safe", "Odorless", "90-day warranty"],
  },
  {
    id: "laundry",
    slug: "laundry",
    name: "Laundry Assistance",
    category: "office-support",
    description:
      "Premium wash, dry-clean, iron & doorstep pickup — pay per kilogram with delivery in 24 hours.",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=900&q=80",
    startingPrice: 149,
    durationMinutes: 30,
    rating: 4.7,
    bookings: "5k+",
    highlights: ["24-hr delivery", "Pickup", "Per kg pricing"],
  },
  {
    id: "driver",
    slug: "driver",
    name: "Driver On Demand",
    category: "drivers",
    description:
      "Verified, well-trained drivers for daily commutes, outstation trips, or evening drop service.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    startingPrice: 399,
    durationMinutes: 240,
    rating: 4.9,
    bookings: "6k+",
    highlights: ["RTO-verified", "Outstation", "Hourly billing"],
  },
  {
    id: "office-support",
    slug: "office-support",
    name: "Office Support Staff",
    category: "office-support",
    description:
      "Pantry, housekeeping, courier, and front-desk assistance for offices and co-working spaces.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    startingPrice: 599,
    durationMinutes: 480,
    rating: 4.8,
    bookings: "1k+",
    highlights: ["Trained", "Uniformed", "B2B billing"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service["category"]): Service[] {
  return services.filter((s) => s.category === category);
}
