import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Safety | trans.melbourne",
  description:
    "Stalking, threats, coercive control and digital monitoring are safety problems. Get help navigating your options in Melbourne.",
};

export default function SafetyPage() {
  return (
    <ProblemEnquiryPage
      category="Safety"
      headline="Someone is making you feel unsafe."
      description="Stalking, threats, controlling behaviour and digital monitoring count. You don't have to work out what legal label fits before asking for help."
      questions={[
        {
          id: "situation",
          label: "What's happening?",
          multiple: true,
          options: [
            "Someone is stalking me",
            "Someone is threatening me",
            "A partner or ex is controlling me",
            "Someone is monitoring my phone or accounts",
            "Someone is threatening to out me",
            "Someone knows or is trying to find where I'm staying",
            "I'm experiencing violence",
            "I don't feel safe at home",
            "Police or court are involved",
            "Something else",
          ],
        },
        {
          id: "when",
          label: "Is this happening right now?",
          options: [
            "Yes — right now",
            "It happened recently",
            "It keeps happening",
            "I'm worried it will happen",
            "I'm not sure",
          ],
        },
        {
          id: "person",
          label: "Who is involved?",
          options: [
            "Partner or ex-partner",
            "Family member",
            "Housemate",
            "Employer or coworker",
            "Someone I know",
            "Stranger",
            "More than one person",
            "I'd rather not say",
          ],
        },
        {
          id: "help",
          label: "What do you actually want help with?",
          multiple: true,
          options: [
            "I need somewhere safe",
            "I need help understanding my options",
            "I need help with stalking",
            "I need digital security help",
            "I need legal information",
            "I need help dealing with police or court",
            "I need housing help",
            "I need someone to point me to the right service",
            "I'm not sure — I just need help",
            "Something else",
          ],
        },
      ]}
      resources={[
        {
          heading: "Safety and crisis services in Melbourne",
          description: "If you are in immediate danger, call 000. These services can also help.",
          resources: [
            {
              name: "Safe Steps",
              detail: "Family violence crisis response. 24 hours, every day.",
              link: "https://safesteps.org.au",
            },
            {
              name: "QLife",
              detail: "LGBTIQ+ crisis support. 3 pm – midnight. Call 1800 184 527.",
              link: "https://qlife.org.au",
            },
            {
              name: "1800RESPECT",
              detail: "Sexual assault and family violence support. 24 hours. Call 1800 737 732.",
              link: "https://1800respect.org.au",
            },
            {
              name: "eSafety Commissioner",
              detail: "Help with online abuse, image-based abuse, and digital monitoring.",
              link: "https://esafety.gov.au",
            },
            {
              name: "LGBTIQ+ Legal Service",
              detail: "Free legal advice including intervention orders and family violence.",
              link: "https://lgbtiqls.org.au",
            },
          ],
        },
      ]}
    />
  );
}
