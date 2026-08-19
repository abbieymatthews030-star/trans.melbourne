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
              name: "TransHub",
              detail: "National, trans-led guides covering every part of transition in plain language.",
              link: "https://www.transhub.org.au",
            },
          ],
        },
        {
          heading: "Voice",
          description: "Voice training is optional, not a requirement. If you want it, these are real starting points.",
          resources: [
            {
              name: "Victorian Pride Centre — voice and communication training",
              detail: "Melbourne-based speech pathology for exploring your voice and communication.",
              link: "https://pridecentre.org.au/resources/gender-affirming-voice-training/",
            },
            {
              name: "Gender Voice Centre",
              detail: "Speech pathology for gender-affirming voice, by telehealth across Australia.",
              link: "https://www.gendervoicecentre.com.au",
            },
            {
              name: "TransHub — voice",
              detail: "What voice training actually involves and how to decide if you want it.",
              link: "https://www.transhub.org.au/social/voice/",
            },
          ],
        },
        {
          heading: "Hair removal & costs",
          description: "Medicare doesn't cover laser or electrolysis as a standalone item. Here's what actually affects the cost.",
          resources: [
            {
              name: "TransHub — Medicare and billing",
              detail: "Plain breakdown of what Medicare does and doesn't cover for gender-affirming care.",
              link: "https://www.transhub.org.au/medical/medicare-and-billing/",
            },
            {
              name: "Monash Gender Clinic",
              detail: "Public gender clinic that can refer for laser hair removal as part of a transition pathway.",
              link: "https://monashhealth.org/services/gender-clinic/",
            },
          ],
        },
        {
          heading: "Coming out & family support",
          description: "You don't have to come out to everyone at once, or ever, if it isn't safe.",
          resources: [
            {
              name: "TransHub — coming out",
              detail: "Practical guide to coming out (or 'inviting people in') to family, friends and work.",
              link: "https://www.transhub.org.au/coming-out",
            },
            {
              name: "Rainbow Door",
              detail: "Free Victorian LGBTIQA+ helpline for advice and referrals. Call 1800 729 367 or text 0480 017 246, 10am–5pm daily.",
              link: "https://www.rainbowdoor.org.au",
            },
            {
              name: "PFLAG Australia",
              detail: "Peer support for parents, families and friends learning how to support a trans loved one.",
              link: "https://pflagaustralia.org.au",
            },
          ],
        },
      ]}
    />
  );
}
