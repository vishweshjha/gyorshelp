import { NextResponse } from "next/server";
import { testimonials } from "@/data/testimonials";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ data: testimonials, count: testimonials.length });
}
