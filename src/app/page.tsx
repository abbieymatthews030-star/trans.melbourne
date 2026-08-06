const sections = [
  {
    title: "Healthcare",
    text: "Hormones, doctors, surgery, costs and what you actually need.",
    href: "#healthcare",
  },
  {
    title: "Housing",
    text: "Need somewhere to live, emergency accommodation or housing support?",
    href: "#housing",
  },
  {
    title: "Money & Centrelink",
    text: "Payments, emergency money, concessions and financial support.",
    href: "#money",
  },
  {
    title: "Jobs",
    text: "Finding work, workplace rights and dealing with discrimination.",
    href: "#jobs",
  },
  {
    title: "Safety",
    text: "Family violence, stalking, unsafe housing and getting somewhere safe.",
    href: "#safety",
  },
  {
    title: "Legal",
    text: "Discrimination, police, intervention orders and free legal help.",
    href: "#legal",
  },
  {
    title: "Change your name & ID",
    text: "Birth certificate, licence, passport and updating your records.",
    href: "#documents",
  },
  {
    title: "Transition",
    text: "A practical map of social, medical and legal transition pathways.",
    href: "#transition",
  },
  {
    title: "Community",
    text: "Groups, services, events and finding other people in Melbourne.",
    href: "#community",
  },
];

const guides = [
  {
    id: "healthcare",
    title: "Healthcare",
    blunt:
      "You do not need to figure out the entire medical system before making your first appointment.",
    body:
      "Start with a trans-competent GP. From there you can work out hormones, referrals, blood tests, mental health support and specialist care based on what you actually want.",
  },
  {
    id: "housing",
    title: "Housing",
    blunt:
      "If you could be without somewhere safe to sleep, deal with tonight first — paperwork comes second.",
    body:
      "Emergency accommodation, homelessness services, longer-term housing applications and tenancy help are different systems. We’ll separate them so you know which one you actually need.",
  },
  {
    id: "money",
    title: "Money & Centrelink",
    blunt:
      "If you have no money for essentials, check immediate assistance before waiting for your next normal payment.",
    body:
      "This section will cover Centrelink options, emergency relief, concessions and organisations that can help with essential expenses.",
  },
  {
    id: "jobs",
    title: "Jobs",
    blunt:
      "You do not have to disclose more personal information to an employer than the situation actually requires.",
    body:
      "Find inclusive employers, understand workplace protections, prepare applications and know what to do when something crosses the line.",
  },
  {
    id: "safety",
    title: "Safety",
    blunt:
      "If someone is threatening, stalking, controlling or monitoring you, treat the immediate safety problem separately from everything else.",
    body:
      "This section will point directly to Victorian crisis, family violence, housing and digital-safety options without making you hunt through generic information.",
  },
  {
    id: "legal",
    title: "Legal",
    blunt:
      "Write down what happened, preserve relevant evidence and get advice before assuming you have no options.",
    body:
      "Clear pathways for discrimination, intervention orders, tenancy disputes, employment issues and free or low-cost legal assistance.",
  },
  {
    id: "documents",
    title: "Change your name & ID",
    blunt:
      "Do the foundational identity documents first; everything else becomes easier to update afterward.",
    body:
      "Step-by-step Victorian guidance for names, birth certificates, driver licences, passports and updating organisations.",
  },
  {
    id: "transition",
    title: "Transition",
    blunt:
      "There is no mandatory checklist called 'transition'. Pick the changes that matter to you.",
    body:
      "A practical overview of social transition, hormones, voice, hair removal, surgery, documents and other options — including what is optional.",
  },
  {
    id: "community",
    title: "Community",
    blunt:
      "You do not need to navigate Melbourne's services and community entirely by yourself.",
    body:
      "Find relevant organisations, peer groups, social spaces, events and services without scrolling through an enormous undifferentiated directory.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="/">trans.melbourne</a>
        <div className="navLinks">
          <a href="#start">Start here</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="start">
        <div className="eyebrow">Melbourne, Victoria</div>
        <h1>
          Find what you need.
          <br />
          <span>No bullshit.</span>
        </h1>
        <p className="heroText">
          Practical information for trans and gender-diverse people in Melbourne.
          Healthcare, housing, money, safety, work, legal help and transition —
          explained quickly.
        </p>

        <div className="heroActions">
          <a className="primary" href="#guides">What do you need?</a>
          <a className="secondary" href="#safety">I need help now</a>
        </div>

        <p className="note">
          No account. No paywall. No twenty-page article before the answer.
        </p>
      </section>

      <section className="directory" id="guides">
        <div className="sectionHeading">
          <span>START HERE</span>
          <h2>What are you trying to sort out?</h2>
        </div>

        <div className="grid">
          {sections.map((item, index) => (
            <a className="card" href={item.href} key={item.title}>
              <span className="number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="guideList">
        {guides.map((guide) => (
          <article className="guide" id={guide.id} key={guide.id}>
            <div className="guideLabel">GUIDE</div>
            <h2>{guide.title}</h2>

            <div className="reality">
              <span>THE SHORT VERSION</span>
              <strong>{guide.blunt}</strong>
            </div>

            <p>{guide.body}</p>

            <button type="button" disabled>
              Full Melbourne guide coming next
            </button>
          </article>
        ))}
      </section>

      <section className="about" id="about">
        <span>ABOUT</span>
        <h2>Built to get you to the answer faster.</h2>
        <p>
          trans.melbourne is being built as a practical Melbourne-specific
          starting point. It is not here to bury simple answers underneath
          jargon, generic advice or endless directories.
        </p>
      </section>

      <footer>
        <a className="brand" href="/">trans.melbourne</a>
        <p>Melbourne, Victoria</p>
        <p className="muted">Information, not individual medical or legal advice.</p>
      </footer>
    </main>
  );
}
