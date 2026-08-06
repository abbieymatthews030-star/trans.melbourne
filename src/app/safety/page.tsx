import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

const questions = [
  {
    id: "situation",
    label: "What's happening?",
    multiple: true,
    options: [
      "Someone is stalking me",
      "Someone is threatening me",
      "A partner or ex is controlling me",
      "Someone is monitoring my phone or accounts",
      "Someone is threatening to out me",
      "Someone knows or is trying to find where I'm staying",
      "I'm experiencing violence",
      "I don't feel safe at home",
      "Police or court are involved",
      "Something else",
    ],
  },

  {
    id: "when",
    label: "Is this happening right now?",
    options: [
      "Yes — right now",
      "It happened recently",
      "It keeps happening",
      "I'm worried it will happen",
      "I'm not sure",
    ],
  },

  {
    id: "person",
    label: "Who is involved?",
    options: [
      "Partner or ex-partner",
      "Family member",
      "Housemate",
      "Employer or coworker",
      "Someone I know",
      "Stranger",
      "More than one person",
      "I'd rather not say",
    ],
  },

  {
    id: "help",
    label: "What do you actually want help with?",
    multiple: true,
    options: [
      "I need somewhere safe",
      "I need help understanding my options",
      "I need help with stalking",
      "I need digital security help",
      "I need legal information",
      "I need help dealing with police or court",
      "I need housing help",
      "I need someone to point me to the right service",
      "I'm not sure — I just need help",
      "Something else",
    ],
  },
];

export default function SafetyPage() {
  return (
    <main className="bluntPage">
      <nav className="bluntNav">
        <Link href="/">← trans.melbourne</Link>
        <span>Safety</span>
      </nav>

      <header className="bluntHeader safetyIntro">
        <span>SAFETY</span>

        <h1>Someone is making you feel unsafe.</h1>

        <p>
          Stalking, threats, controlling behaviour and digital monitoring
          count. You don't have to work out what legal label fits before asking
          for help.
        </p>
      </header>

      <EnquiryForm
        category="Safety"
        heading="Tell us what's happening."
        intro="Tick whatever fits. More than one answer is completely fine."
        questions={questions}
      />
    </main>
  );
}
