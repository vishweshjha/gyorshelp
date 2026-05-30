import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Gyors collects, uses, stores, and protects your personal information when you use our website and mobile app.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "May 30, 2026";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Gyors Technologies Pvt. Ltd. (&quot;Gyors,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) respects your privacy and is committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, disclose, and safeguard
          information when you visit our website, use our mobile application, or book services
          through our platform.
        </p>
        <p>
          By using Gyors, you agree to the collection and use of information in accordance with
          this policy. If you do not agree, please discontinue use of our services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account information:</strong> name, mobile number, email address, profile
            photo, and saved addresses.
          </li>
          <li>
            <strong>Booking information:</strong> service type, date and time, special
            instructions, ratings, reviews, and communication with service professionals.
          </li>
          <li>
            <strong>Payment information:</strong> transaction IDs, payment method type, and
            billing details. Card and UPI details are processed by PCI-compliant payment
            partners — we do not store full card numbers.
          </li>
          <li>
            <strong>Device and usage data:</strong> IP address, browser type, device
            identifiers, app version, pages viewed, and interaction logs.
          </li>
          <li>
            <strong>Location data:</strong> with your permission, GPS or approximate location
            to match you with nearby professionals and enable live tracking.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>Process and fulfil service bookings</li>
          <li>Verify your identity and prevent fraud</li>
          <li>Match you with verified service professionals</li>
          <li>Send booking confirmations, reminders, and support messages</li>
          <li>Improve our platform, services, and customer experience</li>
          <li>Comply with legal obligations and resolve disputes</li>
          <li>
            Send promotional communications where you have opted in (you may opt out at any
            time)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How we share information",
    content: (
      <>
        <p>We may share information with:</p>
        <ul>
          <li>
            <strong>Service professionals</strong> — limited details needed to complete your
            booking (name, address, contact number, service requirements)
          </li>
          <li>
            <strong>Payment processors</strong> — to process transactions securely
          </li>
          <li>
            <strong>Technology partners</strong> — hosting, analytics, customer support, and
            SMS/email delivery providers under strict confidentiality agreements
          </li>
          <li>
            <strong>Legal authorities</strong> — when required by law or to protect rights,
            safety, and security
          </li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    content: (
      <p>
        We retain personal data only as long as necessary to provide services, comply with
        legal obligations, resolve disputes, and enforce our agreements. Booking records are
        typically retained for up to seven years for accounting and legal purposes. You may
        request deletion of your account subject to applicable retention requirements.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We implement appropriate technical and organisational measures — including encryption
        in transit (TLS), access controls, and regular security reviews — to protect your
        data. No method of transmission over the internet is 100% secure; we cannot guarantee
        absolute security but work continuously to safeguard your information.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>Access and receive a copy of your personal data</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your data (subject to legal exceptions)</li>
          <li>Withdraw consent for marketing communications</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>
        <p>
          To exercise these rights, email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
            {siteConfig.email}
          </a>{" "}
          or use in-app account settings where available.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    content: (
      <p>
        Our website uses cookies and similar technologies to remember preferences, analyse
        traffic, and improve performance. You can control cookies through your browser
        settings. Disabling certain cookies may affect site functionality.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children&apos;s privacy",
    content: (
      <p>
        Gyors is not intended for users under 18 years of age. We do not knowingly collect
        personal information from children. If you believe we have collected data from a minor,
        please contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. We will post the revised version
        on this page and update the &quot;Last updated&quot; date. Material changes may be
        communicated via email or in-app notification. Continued use after changes constitutes
        acceptance of the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>For privacy-related questions or requests, contact:</p>
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        align="left"
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Gyors collects, uses, and protects your personal information."
      />
      <LegalDocument sections={sections} lastUpdated={lastUpdated} />
    </>
  );
}
