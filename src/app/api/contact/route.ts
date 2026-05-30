import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  subject: z.string().min(3),
  message: z.string().min(10).max(800),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // In a real app this would forward to email/CRM/Slack.
  // For now we just acknowledge.
  return NextResponse.json(
    {
      ok: true,
      message: "Message received. We will respond within one business day.",
      ticketId: `GY-${Date.now().toString(36).toUpperCase()}`,
    },
    { status: 201 },
  );
}
