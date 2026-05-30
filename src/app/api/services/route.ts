import { NextResponse } from "next/server";
import { services } from "@/data/services";

export const dynamic = "force-static";

export async function GET() {
  const payload = services.map(({ icon, ...rest }) => rest);
  return NextResponse.json({ data: payload, count: payload.length });
}
