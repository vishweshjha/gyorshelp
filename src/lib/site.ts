export const siteConfig = {
  name: "Gyors",
  tagline: "Reliable Help. Delivered Fast.",
  description:
    "Book trusted, verified professionals for cleaning, repairs, caregiving, and everyday home services on demand.",
  url: "https://gyors.example.com",
  ogImage: "/og.png",
  email: "hello@gyors.com",
  phone: "+91 80000 80000",
  address: "Noida",
  social: {
    twitter: "https://twitter.com/gyors",
    instagram: "https://instagram.com/gyors",
    facebook: "https://facebook.com/gyors",
    linkedin: "https://linkedin.com/company/gyors",
    youtube: "https://youtube.com/@gyors",
  },
  apps: {
    ios: "https://apps.apple.com/app/gyors/id000000000",
    android: "https://play.google.com/store/apps/details?id=com.gyors",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Become a Partner", href: "/become-a-partner" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
