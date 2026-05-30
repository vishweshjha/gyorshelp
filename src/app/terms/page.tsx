import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions governing your use of the Gyors platform, bookings, payments, and service provider relationships.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "May 30, 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    content: (
      <>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement
          between you and Gyors Technologies Pvt. Ltd. (&quot;Gyors,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) governing your access to and use of our website,
          mobile application, and related services (collectively, the &quot;Platform&quot;).
        </p>
        <p>
          By creating an account, booking a service, or otherwise using the Platform, you
          confirm that you are at least 18 years old and agree to these Terms. If you do not
          agree, you must not use Gyors.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Our services",
    content: (
      <>
        <p>
          Gyors is a technology marketplace that connects customers with independent service
          professionals (&quot;Partners&quot;) for home and personal services. Gyors facilitates
          bookings, payments, and communication but does not itself perform the underlying
          services unless expressly stated.
        </p>
        <p>
          Service descriptions, pricing, availability, and estimated durations are displayed on
          the Platform and may vary by city. We reserve the right to modify, suspend, or
          discontinue any service at any time.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "User accounts",
    content: (
      <>
        <p>You are responsible for:</p>
        <ul>
          <li>Providing accurate and complete registration information</li>
          <li>Maintaining the confidentiality of your login credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Notifying us immediately of any unauthorised use</li>
        </ul>
        <p>
          We may suspend or terminate accounts that violate these Terms, engage in fraud, or
          misuse the Platform.
        </p>
      </>
    ),
  },
  {
    id: "bookings",
    title: "Bookings and cancellations",
    content: (
      <>
        <p>When you place a booking:</p>
        <ul>
          <li>
            You agree to provide accurate address details and be present (or arrange access) at
            the scheduled time
          </li>
          <li>
            Confirmed pricing is shown before payment; additional charges may apply only for
            approved add-ons or scope changes agreed in the app
          </li>
          <li>
            Cancellations made at least 60 minutes before the scheduled slot are eligible for a
            full refund to the original payment method
          </li>
          <li>
            Late cancellations or no-shows may incur a cancellation fee as displayed at booking
          </li>
          <li>
            Rescheduling is permitted up to 30 minutes before the slot, subject to partner
            availability
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments and refunds",
    content: (
      <>
        <p>
          Payments may be made via UPI, cards, net banking, wallets, or cash (where offered).
          All online payments are processed through authorised payment gateways. Gyors is not
          liable for delays caused by banks or payment networks.
        </p>
        <p>
          Refunds for eligible cancellations are typically processed within 5–7 business days.
          Disputes regarding service quality are handled under our Service Guarantee policy —
          contact support within 7 days of job completion.
        </p>
      </>
    ),
  },
  {
    id: "partners",
    title: "Relationship with service partners",
    content: (
      <p>
        Partners listed on Gyors are independent contractors, not employees of Gyors. While we
        conduct verification and training, Gyors does not guarantee the outcome of every job.
        Partners are responsible for their conduct and compliance with applicable laws while
        performing services. Gyors may assist in dispute resolution but is not a party to the
        direct service contract between you and the Partner.
      </p>
    ),
  },
  {
    id: "conduct",
    title: "User conduct",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Platform for unlawful, abusive, or fraudulent purposes</li>
          <li>Harass, threaten, or discriminate against Partners or staff</li>
          <li>Circumvent the Platform to book Partners directly and avoid fees</li>
          <li>Reverse engineer, scrape, or interfere with Platform security</li>
          <li>Post false reviews or manipulate ratings</li>
        </ul>
        <p>Violation may result in immediate account termination and legal action.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>
        All content on the Platform — including logos, text, graphics, software, and design —
        is owned by Gyors or its licensors and protected by copyright and trademark laws. You
        may not copy, modify, or distribute Platform content without prior written consent.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        The Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To
        the fullest extent permitted by law, Gyors disclaims all warranties, express or implied,
        including merchantability and fitness for a particular purpose. We do not warrant
        uninterrupted or error-free operation.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, Gyors shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages arising from your use
        of the Platform. Our total liability for any claim relating to a booking shall not
        exceed the amount you paid for that specific booking.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify and hold harmless Gyors, its officers, directors, and employees
        from any claims, damages, or expenses arising from your breach of these Terms, misuse
        of the Platform, or violation of any third-party rights.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and disputes",
    content: (
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the
        exclusive jurisdiction of the courts in Mumbai, Maharashtra. You may also raise
        complaints through our support channels before initiating legal proceedings.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to terms",
    content: (
      <p>
        We may revise these Terms at any time. Updated Terms will be posted on this page with a
        revised &quot;Last updated&quot; date. Material changes may be notified via email or
        in-app message. Continued use after changes constitutes acceptance.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>For questions about these Terms, contact:</p>
        <p>
          <strong>Gyors Technologies Pvt. Ltd.</strong>
          <br />
          {siteConfig.address}
          <br />
          Email:{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
            {siteConfig.email}
          </a>
          <br />
          Phone:{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-primary hover:underline"
          >
            {siteConfig.phone}
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        align="left"
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The rules and guidelines for using Gyors and booking services on our platform."
      />
      <LegalDocument sections={sections} lastUpdated={lastUpdated} />
    </>
  );
}
