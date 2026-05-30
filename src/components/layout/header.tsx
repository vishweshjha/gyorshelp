"use client";

import * as React from "react";
import Link from "next/link";
import { Download, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/brand/logo";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/80 backdrop-blur-xl shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-secondary/80 transition-colors hover:bg-secondary/5 hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden text-secondary/80 md:inline-flex"
          >
            <Link href="/login">
              <User className="h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link href="/#app">
              <Download className="h-4 w-4" />
              Download App
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[88vw] max-w-sm flex-col">
              <div className="flex items-center justify-between">
                <Logo />
              </div>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-secondary hover:bg-primary/5"
                    >
                      {item.label}
                      <span className="text-primary">→</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <SheetClose asChild>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/login">
                      <User className="h-4 w-4" /> Login
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild size="lg">
                    <Link href="/#app">
                      <Download className="h-4 w-4" /> Download App
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
