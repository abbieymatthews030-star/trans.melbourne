import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Jobs | trans.melbourne",
  description:
    "Finding trans-friendly work, understanding workplace rights, and dealing with discrimination in Melbourne.",
};

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Jobs"
      headline="Are you looking for work, or is work treating you badly?"
      description="Tell us the actual employment problem."
      questions={[
        {
          id: "problem",
          label: "What are you dealing with?",
          multiple: true,
          options: [
            "I need a job",
            "I need help with my resume",
            "I need help applying for jobs",
            "I'm worried about being trans at work",
            "I'm being misgendered or deadnamed",
            "I'm being bullied or harassed",
            "I think I'm being discriminated against",
            "I've lost my job",
            "I'm having problems changing my details at work",
            "Something else",
          ],
        },
        {
          id: "help",
          label: "What would help most?",
          multiple: true,
          options: [
            "Finding trans-friendly employers",
            "Job search help",
            "Resume or application help",
            "Understanding my workplace rights",
            "Dealing with discrimination",
            "Making a complaint",
            "Someone to explain my options",
            "Something else",
          ],
        },
      ]}
      resources={[
        {
          heading: "Employment support and workplace rights",
          description: "Your employer is not automatically entitled to details about your gender or medical history.",
          resources: [
            {
              name: "Victorian Equal Opportunity and Human Rights Commission",
              detail: "Free advice on discrimination at work. Complaints and mediation.",
              link: "https://humanrightscommission.vic.gov.au",
            },
            {
              name: "Fair Work Ombudsman",
              detail: "Workplace rights, unfair dismissal, and pay disputes.",
              link: "https://fairwork.gov.au",
            },
            {
              name: "JobWatch",
              detail: "Free employment legal advice in Victoria. Call 9662 1933.",
              link: "https://jobwatch.org.au",
            },
            {
              name: "Transgender Victoria",
              detail: "Advocacy and resources including employment rights information.",
              link: "https://transgendervictoria.com",
            },
          ],
        },
      ]}
    />
  );
}
