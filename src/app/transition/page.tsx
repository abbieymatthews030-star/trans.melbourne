import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Transition | trans.melbourne",
  description:
    "Hormones, surgery, coming out, documents, voice — information about transition for trans people in Melbourne.",
};

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Transition"
      headline="What part of transition are you trying to figure out?"
      description="There isn't one required order. Pick what you're actually thinking about."
      questions={[
        {
          id: "topic",
          label: "What do you want information about?",
          multiple: true,
          options: [
            "Hormones",
            "Surgery",
            "Changing my name or documents",
            "Voice",
            "Hair removal",
            "Clothing or presentation",
            "Coming out",
            "Healthcare",
            "Costs",
            "I don't know where to start",
            "Something else",
          ],
        },
        {
          id: "stage",
          label: "Where are you at?",
          options: [
            "Just thinking about it",
            "Ready to start",
            "Already transitioning",
            "Returning after stopping",
            "I'm unsure",
          ],
        },
      ]}
      resources={[
        {
          heading: "Starting your transition in Melbourne",
          description: "There is no required order. These resources cover common starting points.",
          resources: [
            {
              name: "Equinox Gender Diverse Health Centre",
              detail: "Hormones, GP care, nurse practitioners. Fitzroy. Bulk-billing available.",
              link: "https://equinox.org.au",
            },
            {
              name: "Transgender Victoria",
              detail: "Guides on legal, medical and social transition in Victoria.",
              link: "https://transgendervictoria.com",
            },
            {
              name: "Thorne Harbour Health",
              detail: "LGBTIQ+ health services including counselling and GP care.",
              link: "https://thorneharbour.org",
            },
            {
              name: "ACON — Trans and gender diverse health",
              detail: "Transition resources, including hormones, surgery, and navigating services.",
              link: "https://acon.org.au/trans",
            },
          ],
        },
      ]}
    />
  );
}
