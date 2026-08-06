const situations = [
  {
    icon: "♡",
    category: "Healthcare",
    text: "I need hormones or a doctor who actually knows trans healthcare.",
    href: "#healthcare",
  },
  {
    icon: "⌂",
    category: "Housing",
    text: "I need somewhere safe to sleep or I’m about to lose my housing.",
    href: "#housing",
  },
  {
    icon: "$",
    category: "Money & Centrelink",
    text: "I’m broke, my payment is missing, or I need money for essentials now.",
    href: "#money",
  },
  {
    icon: "▣",
    category: "Jobs",
    text: "I need work or I’m being treated differently because I’m trans.",
    href: "#jobs",
  },
  {
    icon: "♢",
    category: "Safety",
    text: "Someone is threatening, stalking, controlling or monitoring me.",
    href: "#safety",
  },
  {
    icon: "⚖",
    category: "Legal",
    text: "I’m dealing with police, court, discrimination or an intervention order.",
    href: "#legal",
  },
  {
    icon: "▤",
    category: "Name & ID",
    text: "My documents have the wrong name or gender and I want them changed.",
    href: "#documents",
  },
  {
    icon: "○",
    category: "Transition",
    text: "I want to transition but I don’t actually know where to start.",
    href: "#transition",
  },
  {
    icon: "◎",
    category: "Community",
    text: "I want trans-friendly people, places and services near me.",
    href: "#community",
  },
  {
    icon: "!",
    category: "Urgent help",
    text: "I’m not safe right now and I need help immediately.",
    href: "#urgent",
  },
];

const guides = [
  {
    id: "healthcare",
    icon: "♡",
    title: "Healthcare",
    text: "You do not need to understand the entire medical system first. Start with the exact care you need.",
  },
  {
    id: "housing",
    icon: "⌂",
    title: "Housing",
    text: "If you might have nowhere safe to sleep, deal with tonight first. Applications and paperwork come second.",
  },
  {
    id: "money",
    icon: "$",
    title: "Money & Centrelink",
    text: "If you cannot afford essentials, check immediate assistance instead of assuming you must wait for your next payment.",
  },
  {
    id: "jobs",
    icon: "▣",
    title: "Jobs",
    text: "An employer does not automatically need every personal detail about your gender, history or transition.",
  },
  {
    id: "safety",
    icon: "♢",
    title: "Safety",
    text: "Threats, stalking, coercive control and digital monitoring are safety problems. Treat them like one.",
  },
  {
    id: "legal",
    icon: "⚖",
    title: "Legal",
    text: "Save evidence. Write down what happened. Get proper advice before assuming nothing can be done.",
  },
  {
    id: "documents",
    icon: "▤",
    title: "Name & ID",
    text: "Start with the foundational identity documents. Updating everything else is easier afterwards.",
  },
  {
    id: "transition",
    icon: "○",
    title: "Transition",
    text: "There is no mandatory transition checklist. Hormones, surgery, presentation and documents are separate choices.",
  },
  {
    id: "community",
    icon: "◎",
    title: "Community",
    text: "You do not need to navigate Melbourne’s services, spaces and community entirely by yourself.",
  },
  {
    id: "urgent",
    icon: "!",
    title: "Urgent help",
    text: "If there is immediate danger, prioritise getting somewhere safe and contacting emergency support over everything else.",
  },
];

export default function Home() {
  return (
    <main className="site">
      <header className="header">
        <a className="logo" href="#">
          trans.melbourne
        </a>

        <nav className="nav">
          <a href="#start">Start here</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
          <a href="#urgent" className="help">
            Help now
          </a>
        </nav>
      </header>

      <section className="hero" id="start">
        <span className="location">Melbourne, Victoria</span>

        <h1>
          Find what you need.
          <br />
          No bullshit.
        </h1>

        <p>
          Practical information for trans and gender-diverse people in Melbourne.
          <br />
          Healthcare, housing, money, safety, work, legal help and transition —
          explained quickly.
        </p>
      </section>

      <section
        className="situations"
        aria-label="Choose what you need help with"
      >
        {situations.map((item) => (
          <a className="pill" href={item.href} key={item.category}>
            <span className="pillIcon" aria-hidden="true">
              {item.icon}
            </span>

            <span className="pillDivider" />

            <span className="pillCopy">
              <span className="pillCategory">{item.category}</span>
              <strong>{item.text}</strong>
            </span>

            <span className="pillArrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </section>

      <div className="promise">
        <span className="info">i</span>
        <span>No account.</span>
        <span>No paywall.</span>
        <span>No twenty-page article before the answer.</span>
        <strong>No bullshit.</strong>
      </div>

      <section className="guideSection" id="guides">
        <p className="sectionTitle">The short version of each topic</p>

        <div className="guideList">
          {guides.map((guide) => (
            <article className="guide" id={guide.id} key={guide.id}>
              <span className="guideIcon">{guide.icon}</span>

              <h2>{guide.title}</h2>

              <p>{guide.text}</p>

              <button type="button">Full guide coming next</button>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="about">
        <div>
          <h3>About trans.melbourne</h3>
          <p>
            Built to get you to the answer faster.
            <br />
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
            Your safety, health and dignity are more important than anyone
            else&apos;s opinion.
          </p>
        </div>

        <div className="emergency">
          <span>If you are in immediate danger</span>
          <strong>call 000</strong>
          <span>If you need to talk right now</span>
          <strong>call 13 11 14</strong>
        </div>
      </footer>
    </main>
  );
}
