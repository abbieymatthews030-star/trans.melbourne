import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Money & Centrelink | trans.melbourne",
  description:
    "Emergency financial assistance, Centrelink help, and money support for trans people in Melbourne.",
};

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Money & Centrelink"
      headline="What can't you afford or what payment has gone wrong?"
      description="Start with the immediate problem."
      questions={[
        {
          id: "problem",
          label: "What's happening?",
          multiple: true,
          options: [
            "I don't have enough money for food",
            "I can't afford accommodation",
            "I can't afford medication or healthcare",
            "My Centrelink payment is missing",
            "My payment was reduced or stopped",
            "I'm waiting for a Centrelink claim",
            "I need an advance or urgent payment",
            "I have bills I can't pay",
            "I need emergency financial assistance",
            "Something else",
          ],
        },
        {
          id: "urgency",
          label: "How urgent is it?",
          options: [
            "I need help today",
            "I need help in the next few days",
            "I can manage for a week",
            "I'm trying to prevent a problem",
          ],
        },
        {
          id: "help",
          label: "What do you want help finding?",
          multiple: true,
          options: [
            "Emergency money or vouchers",
            "Centrelink options",
            "Food assistance",
            "Rent or accommodation assistance",
            "Medical costs",
            "Help understanding what I'm entitled to",
            "Someone to point me to the right service",
            "Something else",
          ],
        },
      ]}
      resources={[
        {
          heading: "Financial and emergency assistance in Melbourne",
          description: "If you can't cover basics, try these before waiting for your next Centrelink payment.",
          resources: [
            {
              name: "Centrelink crisis payments",
              detail: "Apply via myGov or call 132 850. Advance payments and crisis payments available.",
              link: "https://servicesaustralia.gov.au",
            },
            {
              name: "Good Shepherd Financial Wellbeing",
              detail: "Emergency relief, no-interest loans (NILS), and financial counselling.",
              link: "https://goodshep.org.au",
            },
            {
              name: "Foodbank Victoria",
              detail: "Emergency food relief — check your nearest location online.",
              link: "https://foodbankvictoria.org.au",
            },
            {
              name: "Financial Counselling Australia",
              detail: "Free financial counselling. Call 1800 007 007.",
              link: "https://financialcounsellingaustralia.org.au",
            },
          ],
        },
      ]}
    />
  );
}
