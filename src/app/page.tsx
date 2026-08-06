const topics = [
  {
    n: "01",
    title: "Healthcare",
    blunt: "I NEED HORMONES, A TRANS-FRIENDLY DOCTOR, SURGERY INFO OR HEALTHCARE THAT ACTUALLY GETS IT.",
    href: "#healthcare",
    icon: "♡",
  },
  {
    n: "02",
    title: "Housing",
    blunt: "I NEED SOMEWHERE SAFE TO SLEEP, I'M AT RISK OF HOMELESSNESS, OR MY HOME ISN'T SAFE.",
    href: "#housing",
    icon: "⌂",
  },
  {
    n: "03",
    title: "Money & Centrelink",
    blunt: "I'M BROKE, A PAYMENT IS MISSING, OR I NEED CENTRELINK OR EMERGENCY MONEY NOW.",
    href: "#money",
    icon: "$",
  },
  {
    n: "04",
    title: "Jobs",
    blunt: "I NEED A JOB, I'M BEING TREATED DIFFERENTLY AT WORK, OR I DON'T KNOW WHAT I HAVE TO DISCLOSE.",
    href: "#jobs",
    icon: "▣",
  },
  {
    n: "05",
    title: "Safety",
    blunt: "SOMEONE IS THREATENING, STALKING, CONTROLLING OR MONITORING ME. I NEED TO GET SAFE.",
    href: "#safety",
    icon: "◇",
  },
  {
    n: "06",
    title: "Legal",
    blunt: "I'M DEALING WITH POLICE, COURT, DISCRIMINATION, AN INTERVENTION ORDER OR A LEGAL PROBLEM.",
    href: "#legal",
    icon: "⚖",
  },
  {
    n: "07",
    title: "Change name & ID",
    blunt: "I WANT MY NAME, SEX OR GENDER DETAILS CHANGED ON MY OFFICIAL DOCUMENTS.",
    href: "#documents",
    icon: "▤",
  },
  {
    n: "08",
    title: "Transition",
    blunt: "I WANT TO TRANSITION BUT DON'T KNOW WHAT MY OPTIONS ARE, WHAT'S OPTIONAL OR WHERE TO START.",
    href: "#transition",
    icon: "○",
  },
  {
    n: "09",
    title: "Community",
    blunt: "I WANT TRANS-FRIENDLY PEOPLE, GROUPS, PLACES, EVENTS OR SERVICES IN MELBOURNE.",
    href: "#community",
    icon: "◎",
  },
  {
    n: "10",
    title: "Need help right now?",
    blunt: "I'M IN IMMEDIATE DANGER, I'M NOT SAFE, OR I NEED URGENT SUPPORT RIGHT NOW.",
    href: "#urgent",
    icon: "!",
    urgent: true,
  },
];

const guides = [
  {
    id: "healthcare",
    title: "Healthcare",
    short:
      "You do not need to understand the entire medical system first. Start with the exact care you need.",
  },
  {
    id: "housing",
    title: "Housing",
    short:
      "If you might have nowhere safe to sleep, deal with tonight first. Applications and paperwork come second.",
  },
  {
    id: "money",
    title: "Money & Centrelink",
    short:
      "If you cannot afford essentials, check immediate assistance instead of assuming you must wait for your next payment.",
  },
  {
    id: "jobs",
    title: "Jobs",
    short:
      "An employer does not automatically need every personal detail about your gender, history or transition.",
  },
  {
    id: "safety",
    title: "Safety",
    short:
      "Threats, stalking, coercive control and digital monitoring are safety problems. Treat them like one.",
  },
  {
    id: "legal",
    title: "Legal",
    short:
      "Save evidence. Write down what happened. Get proper advice before assuming nothing can be done.",
  },
  {
    id: "documents",
    title: "Change your name & ID",
    short:
      "Start with the foundational identity documents. Updating everything else is easier afterwards.",
  },
  {
    id: "transition",
    title: "Transition",
    short:
      "There is no mandatory transition checklist. Hormones, surgery, presentation, voice and documents are separate choices.",
  },
  {
    id: "community",
    title: "Community",
    short:
      "You do not need to navigate Melbourne's services, spaces and community entirely by yourself.",
  },
  {
    id: "urgent",
    title: "Need help right now?",
    short:
      "If there is immediate danger, prioritise getting somewhere safe and contacting emergency support over everything else.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#">
          trans.melbourne
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="#start">Start here</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
          <a href="#urgent">Help now</a>
        </nav>
      </header>

      <section className="opening" id="start">
        <div className="intro">
          <span className="eyebrow">MELBOURNE, VICTORIA</span>

          <h1>
            Find what you need. <em>No bullshit.</em>
          </h1>

          <p>
            Practical information for trans and gender-diverse people in
            Melbourne. Healthcare, housing, money, safety, work, legal help and
            transition — explained quickly.
          </p>
        </div>

        <div className="topicGrid" aria-label="Choose what you need help with">
          {topics.map((topic) => (
            <a
              href={topic.href}
              className={`topicCard ${topic.urgent ? "urgentCard" : ""}`}
              key={topic.title}
            >
              <div className="cardTop">
                <span className="number">{topic.n}</span>
                <span className="icon" aria-hidden="true">
                  {topic.icon}
                </span>
              </div>

              <div className="cardBody">
                <h2>{topic.title}</h2>
                <p>{topic.blunt}</p>
              </div>

              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="promise">
          <span>ⓘ</span>
          <p>
            No account. No paywall. No twenty-page article before the answer.
            <strong> No bullshit.</strong>
          </p>
        </div>
      </section>

      <section className="guides" id="guides">
        <div className="sectionLabel">THE SHORT VERSION OF EACH TOPIC</div>

        <div className="guideRows">
          {guides.map((guide) => (
            <article className="guideRow" id={guide.id} key={guide.id}>
              <h2>{guide.title}</h2>

              <p>{guide.short}</p>

              <span className="coming">Full guide coming next</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <span className="sectionLabel">ABOUT TRANS.MELBOURNE</span>
          <h2>Built to get you to the answer faster.</h2>
          <p>
            This is information, not individual medical or legal advice.
          </p>
        </div>

        <div>
          <span className="sectionLabel">MELBOURNE, VICTORIA</span>
          <p>
            Focused on local services, rights, support and realities in
            Victoria.
          </p>
        </div>

        <div>
          <span className="sectionLabel">THE RULE</span>
          <p>
            Give the useful answer first. Explain the complicated stuff second.
          </p>
        </div>
      </section>

      <footer>
        <strong>trans.melbourne</strong>
        <span>Melbourne, Victoria</span>
      </footer>
    </main>
  );
}
