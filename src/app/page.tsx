const situations = [
  {
    category: "Healthcare",
    icon: "♡",
    text: "I need hormones or a doctor who actually knows trans healthcare.",
    href: "#healthcare",
  },
  {
    category: "Housing",
    icon: "⌂",
    text: "I need somewhere safe to sleep or I’m about to lose my housing.",
    href: "#housing",
  },
  {
    category: "Money & Centrelink",
    icon: "$",
    text: "I’m broke, my payment is missing, or I need money for essentials now.",
    href: "#money",
  },
  {
    category: "Jobs",
    icon: "▣",
    text: "I need work or I’m being treated differently because I’m trans.",
    href: "#jobs",
  },
  {
    category: "Safety",
    icon: "♢",
    text: "Someone is threatening, stalking, controlling or monitoring me.",
    href: "#safety",
  },
  {
    category: "Legal",
    icon: "⚖",
    text: "I’m dealing with police, court, discrimination or an intervention order.",
    href: "#legal",
  },
  {
    category: "Name & ID",
    icon: "▤",
    text: "My documents have the wrong name or gender and I want them changed.",
    href: "#documents",
  },
  {
    category: "Transition",
    icon: "○",
    text: "I want to transition but I don’t actually know where to start.",
    href: "#transition",
  },
  {
    category: "Community",
    icon: "◎",
    text: "I want trans-friendly people, places and services near me.",
    href: "#community",
  },
  {
    category: "Urgent help",
    icon: "!",
    text: "I’m not safe right now and I need help immediately.",
    href: "#urgent",
  },
];

const guides = [
  ["healthcare", "Healthcare", "You do not need to understand the entire medical system first. Start with the exact care you need."],
  ["housing", "Housing", "If you might have nowhere safe to sleep, deal with tonight first. Applications and paperwork come second."],
  ["money", "Money & Centrelink", "If you cannot afford essentials, check immediate assistance instead of assuming you must wait for your next payment."],
  ["jobs", "Jobs", "An employer does not automatically need every personal detail about your gender, history or transition."],
  ["safety", "Safety", "Threats, stalking, coercive control and digital monitoring are safety problems. Treat them like one."],
  ["legal", "Legal", "Save evidence. Write down what happened. Get proper advice before assuming nothing can be done."],
  ["documents", "Name & ID", "Start with the foundational identity documents. Updating everything else is easier afterwards."],
  ["transition", "Transition", "There is no mandatory transition checklist. Hormones, surgery, presentation and documents are separate choices."],
  ["community", "Community", "You do not need to navigate Melbourne’s services, spaces and community entirely by yourself."],
  ["urgent", "Urgent help", "If there is immediate danger, prioritise getting somewhere safe and contacting emergency support over everything else."],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/">trans.melbourne</a>

        <nav>
          <a href="#start">Start here</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
          <a className="helpButton" href="#urgent">Help now</a>
        </nav>
      </header>

      <section className="hero" id="start">
        <div className="eyebrow">Melbourne, Victoria</div>

        <h1>
          Find what you need.
          <br className="mobileBreak" /> No bullshit.
        </h1>

        <p>
          Practical information for trans and gender-diverse people in Melbourne.
          <br />
          Healthcare, housing, money, safety, work, legal help and transition —
          explained quickly.
        </p>
      </section>

      <section className="situationGrid" aria-label="Choose what you need help with">
        {situations.map((item) => (
          <a className="situationPill" href={item.href} key={item.category}>
            <div className="pillIcon" aria-hidden="true">
              {item.icon}
            </div>

            <div className="pillContent">
              <span className="pillCategory">{item.category}</span>
              <strong>{item.text}</strong>
            </div>

            <span className="arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </section>

      <div className="promise">
        <span>ⓘ</span>
        <span>No account.</span>
        <span>No paywall.</span>
        <span>No twenty-page article before the answer.</span>
        <strong>No bullshit.</strong>
      </div>

      <section className="guides" id="guides">
        <div className="sectionLabel">The short version of each topic</div>

        {guides.map(([id, title, description]) => (
          <article className="guideRow" id={id} key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button type="button">Full guide coming next</button>
          </article>
        ))}
      </section>

      <footer id="about">
        <div>
          <h3>About trans.melbourne</h3>
          <p>
            Built to get you to the answer faster.
            This is information, not individual medical or legal advice.
          </p>
        </div>

        <div>
          <h3>Melbourne, Victoria</h3>
          <p>
            We focus on local services, rights, support and realities in Victoria.
            Things change — we’ll keep this as current as possible.
          </p>
        </div>

        <div>
          <h3>You matter</h3>
          <p>
            Your safety, health and dignity are more important than anyone else’s
            opinion.
          </p>
        </div>

        <div className="emergency">
          <p>If you are in immediate danger</p>
          <strong>call 000</strong>
        </div>
      </footer>
    </main>
  );
}
