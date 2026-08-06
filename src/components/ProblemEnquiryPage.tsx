import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

type Question = {
  id: string;
  label: string;
  options: string[];
  multiple?: boolean;
};

type Props = {
  category: string;
  headline: string;
  description: string;
  questions: Question[];
};

export default function ProblemEnquiryPage({
  category,
  headline,
  description,
  questions,
}: Props) {
  return (
    <main className="bluntPage">
      <nav className="bluntNav">
        <Link href="/">← trans.melbourne</Link>
        <span>{category}</span>
      </nav>

      <header className="bluntHeader">
        <span>{category.toUpperCase()}</span>
        <h1>{headline}</h1>
        <p>{description}</p>
      </header>

      <EnquiryForm
        category={category}
        heading="Tell us what you actually need."
        intro="Tick whatever fits. Use the Other box if the choices don't describe it properly."
        questions={questions}
      />
    </main>
  );
}
