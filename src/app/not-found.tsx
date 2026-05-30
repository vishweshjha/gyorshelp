import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-wide flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl font-bold text-secondary sm:text-9xl">404</p>
      <h1 className="display-2 mt-4">
        We can’t find that <span className="gradient-text">page</span>
      </h1>
      <p className="lede mt-5 max-w-md">
        The page you’re looking for may have moved, been renamed, or never
        existed. Let’s get you back on track.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </section>
  );
}
