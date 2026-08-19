import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | trans.melbourne",
  description:
    "Who built trans.melbourne and why — a note from Abbiey Matthews.",
};

export default function AboutPage() {
  return (
    <main className="bluntPage">
      <nav className="bluntNav">
        <Link href="/">← trans.melbourne</Link>
        <span>About</span>
      </nav>

      <header className="bluntHeader">
        <span>ABOUT</span>
        <h1>Hi, I&apos;m Abbiey.</h1>
        <p>Why this site exists, and how to reach me.</p>
      </header>

      <section className="aboutSection">
        <div className="aboutPhotos">
          <Image
            className="aboutPhoto"
            src="/abbiey.png"
            alt="Abbiey Matthews"
            width={277}
            height={399}
            priority
          />

          <Image
            className="aboutPhoto"
            src="/abbiey-2.png"
            alt="Abbiey Matthews"
            width={232}
            height={510}
            priority
          />
        </div>

        <div className="aboutBio">
          <p>
            My name&apos;s Abbiey Matthews. I&apos;m 21, and I built
            trans.melbourne on my own.
          </p>

          <p>
            I know how long and confusing it can be to find real answers —
            hours lost to dead links, generic advice, and services that
            don&apos;t actually apply to you when you&apos;re trying to work
            out something as basic as where to start. I&apos;ve been through
            that. This site exists so the next person doesn&apos;t have to
            lose as much time as I did.
          </p>

          <p>
            trans.melbourne isn&apos;t run by an organisation — it&apos;s me,
            trying to get people to the actual answer faster.
          </p>

          <p>
            If something here is wrong, missing, or you just want to get in
            touch, email me directly:{" "}
            <a href="mailto:transhelpvictoria@gmail.com">
              transhelpvictoria@gmail.com
            </a>
          </p>
        </div>
      </section>

      <Link className="bluntBack" href="/">
        ← Back to trans.melbourne
      </Link>
    </main>
  );
}
