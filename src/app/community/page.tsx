import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Community | trans.melbourne",
  description:
    "Find trans-friendly social groups, events, support services, and community in Melbourne.",
};

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Community"
      headline="What kind of people, place or service are you trying to find?"
      description="Tell us what would actually make Melbourne easier to navigate."
      questions={[
        {
          id: "lookingFor",
          label: "What are you looking for?",
          multiple: true,
          options: [
            "Trans friends or social groups",
            "Support groups",
            "Trans-friendly healthcare",
            "Trans-friendly businesses",
            "Events",
            "Youth services",
            "Family or partner support",
            "Local services",
            "Online communities",
            "Something else",
          ],
        },
        {
          id: "preference",
          label: "How do you want to connect?",
          multiple: true,
          options: [
            "In person",
            "Online",
            "One-on-one",
            "Group setting",
            "I don't mind",
          ],
        },
      ]}
      resources={[
        {
          heading: "Trans community in Melbourne",
          description: "You don't have to figure out Melbourne's services and social spaces alone.",
          resources: [
            {
              name: "Transgender Victoria",
              detail: "Advocacy, community events, and support groups across Victoria.",
              link: "https://transgendervictoria.com",
            },
            {
              name: "Minus18",
              detail: "Australia's leading LGBTIQ+ youth organisation. Events and social groups.",
              link: "https://minus18.org.au",
            },
            {
              name: "Thorne Harbour Health",
              detail: "LGBTIQ+ social and support programs in Melbourne.",
              link: "https://thorneharbour.org",
            },
            {
              name: "Gender Agenda",
              detail: "Peer-support and community connection for trans people in Victoria.",
            },
            {
              name: "QLife",
              detail: "LGBTIQ+ peer support and referrals. 3 pm – midnight. Phone: 1800 184 527.",
              link: "https://qlife.org.au",
            },
          ],
        },
      ]}
    />
  );
}
