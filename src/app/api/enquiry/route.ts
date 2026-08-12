import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type Enquiry = {
  category?: unknown;
  answers?: unknown;
  other?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  contactMethod?: unknown;
  safeTime?: unknown;
  consent?: unknown;
  website?: unknown;
};

function clean(value: unknown, max = 3000) {
  if (typeof value !== "string") return "";

  return value
    .replace(/\0/g, "")
    .trim()
    .slice(0, max);
}

function buildEmailText(enquiry: {
  receivedAt: string;
  category: string;
  name: string;
  contactMethod: string;
  email: string;
  phone: string;
  safeTime: string;
  answers: Record<string, string[]>;
  other: string;
}) {
  const lines: string[] = [
    `New enquiry — ${enquiry.category}`,
    `Received: ${enquiry.receivedAt}`,
    "",
    `Name: ${enquiry.name || "(not provided)"}`,
    `Contact method: ${enquiry.contactMethod || "(not provided)"}`,
    `Email: ${enquiry.email || "(not provided)"}`,
    `Phone: ${enquiry.phone || "(not provided)"}`,
    `Safe time to contact: ${enquiry.safeTime || "(not provided)"}`,
    "",
    "Answers:",
  ];

  for (const [key, values] of Object.entries(enquiry.answers)) {
    lines.push(`  ${key}: ${values.join(", ") || "(none selected)"}`);
  }

  if (enquiry.other) {
    lines.push("", `Other notes:`, enquiry.other);
  }

  return lines.join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Enquiry;

    // Honeypot spam field.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const category = clean(body.category, 100);
    const name = clean(body.name, 200);
    const email = clean(body.email, 320);
    const phone = clean(body.phone, 100);
    const contactMethod = clean(body.contactMethod, 100);
    const safeTime = clean(body.safeTime, 500);
    const other = clean(body.other, 5000);

    if (!category) {
      return NextResponse.json(
        { error: "Missing category" },
        { status: 400 }
      );
    }

    if (body.consent !== true) {
      return NextResponse.json(
        { error: "Consent required" },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Provide an email or phone number" },
        { status: 400 }
      );
    }

    const answers: Record<string, string[]> = {};

    if (
      body.answers &&
      typeof body.answers === "object" &&
      !Array.isArray(body.answers)
    ) {
      for (const [key, value] of Object.entries(body.answers)) {
        if (!Array.isArray(value)) continue;

        answers[clean(key, 100)] = value
          .filter((item): item is string => typeof item === "string")
          .map((item) => clean(item, 500))
          .filter(Boolean)
          .slice(0, 20);
      }
    }

    const enquiry = {
      receivedAt: new Date().toISOString(),
      category,
      name,
      contactMethod,
      email,
      phone,
      safeTime,
      answers,
      other,
    };

    const resendApiKey = process.env.RESEND_API_KEY;
    const enquiryToEmail = process.env.ENQUIRY_TO_EMAIL;

    if (resendApiKey && enquiryToEmail) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "enquiries@trans.melbourne",
        to: enquiryToEmail,
        subject: `New enquiry — ${category}`,
        text: buildEmailText(enquiry),
      });
    } else {
      // Fallback: log to Vercel console when email is not configured.
      console.log(
        "TRANS_MELBOURNE_ENQUIRY",
        JSON.stringify(enquiry)
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error("ENQUIRY_ERROR", error);

    return NextResponse.json(
      { error: "Unable to submit enquiry" },
      { status: 500 }
    );
  }
}
