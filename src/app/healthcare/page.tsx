import Link from "next/link";

const situations = [
  ["I need hormones", "/healthcare/hormones"],
  ["I need a GP who actually understands trans healthcare", "/healthcare/gp"],
  ["I need a prescription or refill now", "/healthcare/prescription"],
  ["I want surgery and don't know where to start", "/healthcare/surgery"],
  ["I can't afford appointments", "/healthcare/cost"],
  ["My doctor is refusing or making this difficult", "/healthcare/doctor-problem"],
  ["I need blood tests", "/healthcare/blood-tests"],
  ["I don't know what healthcare I actually need", "/healthcare/start"],
];

export default function Healthcare() {
  return (
    <main className="bluntPage">
      <nav className="bluntNav">
        <Link href="/">← trans.melbourne</Link>
        <span>Healthcare</span>
      </nav>

      <header className="bluntHeader">
        <span>HEALTHCARE</span>
        <h1>What's actually going on?</h1>
        <p>Pick the closest one. You don't need to know the medical terminology.</p>
      </header>

      <section className="bluntChoices">
        {situations.map(([label, href]) => (
          <Link href={href} className="bluntChoice" key={href}>
            <strong>{label}</strong>
            <span>→</span>
          </Link>
        ))}
      </section>

      <Link href="/" className="bluntBack">
        ← None of these / go back
      </Link>
    </main>
  );
}
