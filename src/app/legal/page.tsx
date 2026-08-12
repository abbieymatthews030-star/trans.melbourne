import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Legal | trans.melbourne",
  description:
    "Legal help for trans people in Melbourne — discrimination, court, intervention orders, police, and knowing your rights.",
};

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Legal"
      headline="What legal problem are you actually dealing with?"
      description="You don't need to know the legal terminology. Tell us what happened."
      questions={[
        {
          id: "problem",
          label: "What's going on?",
          multiple: true,
          options: [
            "Police are involved",
            "I have a court matter",
            "I have an intervention order issue",
            "I'm experiencing discrimination",
            "I'm having a workplace problem",
            "I'm having a housing or tenancy problem",
            "I'm being harassed or threatened",
            "I'm dealing with stalking",
            "I need help changing legal documents",
            "I don't know whether I have a legal problem",
            "Something else",
          ],
        },
        {
          id: "timing",
          label: "Is there a deadline or upcoming event?",
          options: [
            "Court or hearing very soon",
            "Something is due within a few days",
            "Something is due within a few weeks",
            "No deadline that I know of",
            "I'm not sure",
          ],
        },
        {
          id: "help",
          label: "What do you need?",
          multiple: true,
          options: [
            "Legal advice",
            "Help understanding my rights",
            "Help finding a lawyer or legal service",
            "Help understanding court",
            "Help documenting what happened",
            "Help understanding an intervention order",
            "I don't know — tell me where to start",
            "Something else",
          ],
        },
      ]}
      resources={[
        {
          heading: "Free legal services in Melbourne",
          description: "You don't need to pay for a lawyer to get legal information or advice.",
          resources: [
            {
              name: "Victorian Legal Aid",
              detail: "Free legal advice and representation. Call 1300 792 387.",
              link: "https://legalaid.vic.gov.au",
            },
            {
              name: "LGBTIQ+ Legal Service",
              detail: "Free legal advice specifically for LGBTIQ+ people in Victoria.",
              link: "https://lgbtiqls.org.au",
            },
            {
              name: "Victorian Equal Opportunity and Human Rights Commission",
              detail: "Discrimination complaints — at work, in housing, or in services.",
              link: "https://humanrightscommission.vic.gov.au",
            },
            {
              name: "Community Legal Centres Victoria",
              detail: "Free legal help across Melbourne. Find your nearest centre.",
              link: "https://clcvic.org.au",
            },
            {
              name: "Safe Steps",
              detail: "Legal support connected to family violence. 24 hrs.",
              link: "https://safesteps.org.au",
            },
          ],
        },
      ]}
    />
  );
}
