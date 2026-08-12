import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Urgent help | trans.melbourne",
  description:
    "If you are in immediate danger or need help right now, these are the numbers to call in Melbourne and Victoria.",
};

const lines = [
  {
    name: "Emergency services",
    number: "000",
    detail: "Police, ambulance, fire. Call if there is immediate physical danger.",
    highlight: true,
  },
  {
    name: "QLife",
    number: "1800 184 527",
    detail:
      "LGBTIQ+ counselling and referral. 3 pm – midnight, every day. Also available via webchat at qlife.org.au.",
    highlight: false,
  },
  {
    name: "Lifeline",
    number: "13 11 14",
    detail: "Crisis support and suicide prevention. 24 hours, every day.",
    highlight: false,
  },
  {
    name: "Beyond Blue",
    number: "1300 22 4636",
    detail: "Anxiety, depression and mental health support. 24 hours, every day.",
    highlight: false,
  },
  {
    name: "Safe Steps (family violence)",
    number: "1800 015 188",
    detail:
      "Family violence response. 24 hours, every day. If you are not safe at home or your partner is hurting you.",
    highlight: false,
  },
  {
    name: "1800RESPECT",
    number: "1800 737 732",
    detail:
      "National sexual assault and family violence counselling. 24 hours, every day.",
    highlight: false,
  },
  {
    name: "Kids Helpline",
    number: "1800 55 1800",
    detail: "For young people up to age 25. 24 hours, every day.",
    highlight: false,
  },
  {
    name: "Suicide Call Back Service",
    number: "1300 659 467",
    detail: "Suicide prevention counselling. 24 hours, every day.",
    highlight: false,
  },
];

export default function UrgentPage() {
  return (
    <main className="bluntPage">
      <nav className="bluntNav">
        <Link href="/">← trans.melbourne</Link>
        <span>Urgent help</span>
      </nav>

      <header className="bluntHeader">
        <span>URGENT HELP</span>
        <h1>Get help right now.</h1>
        <p>
          If there is immediate danger, call 000. These services are available
          now — no referral, no waiting list.
        </p>
      </header>

      <section className="urgentLines" aria-label="Crisis lines">
        {lines.map((line) => (
          <div
            className={line.highlight ? "urgentLine urgentLineHighlight" : "urgentLine"}
            key={line.name}
          >
            <div className="urgentLineText">
              <strong>{line.name}</strong>
              <span>{line.detail}</span>
            </div>
            <a className="urgentNumber" href={`tel:${line.number.replace(/\s/g, "")}`}>
              {line.number}
            </a>
          </div>
        ))}
      </section>

      <section className="urgentNote">
        <p>
          <strong>If someone is monitoring your phone:</strong> use a device
          they don&apos;t have access to, call from a different number, or contact
          Safe Steps or QLife via webchat.
        </p>
        <p>
          Need help with housing, legal, or safety planning?{" "}
          <Link href="/safety">Go to the Safety page →</Link>
        </p>
      </section>
    </main>
  );
}
