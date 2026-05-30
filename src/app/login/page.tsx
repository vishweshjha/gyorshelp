import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Smartphone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Gyors account.",
};

export default function LoginPage() {
  return (
    <section className="container-wide grid min-h-[80vh] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2">
      <div className="hidden lg:block">
        <Logo size="lg" />
        <h1 className="display-1 mt-8 max-w-md text-balance">
          Welcome back to <span className="gradient-text">Gyors</span>.
        </h1>
        <p className="lede mt-5 max-w-md">
          Book your favorite pros, track bookings live, and manage payments —
          all from one place.
        </p>
        <div
          className="mt-10 aspect-[4/3] w-full max-w-md rounded-3xl bg-cover bg-center shadow-elevated"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-md">
        <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Smartphone className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold text-secondary">Sign in</h2>
              <p className="text-sm text-muted-foreground">
                We’ll text you a one-time code to verify.
              </p>
            </div>
          </div>

          <form className="mt-7 space-y-5" action="#" method="post">
            <div className="space-y-1.5">
              <Label htmlFor="phone">Mobile number</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send code
              <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              New to Gyors?{" "}
              <Link href="/" className="font-semibold text-primary hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
