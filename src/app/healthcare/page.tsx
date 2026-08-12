import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Healthcare | trans.melbourne",
  description:
    "Find a trans-friendly GP, start hormones, get a referral, or work out the next step in your healthcare in Melbourne.",
};

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Healthcare"
      headline="What healthcare are you actually trying to get?"
      description="Start with the thing you need — not the medical system."
      questions={[
        {
          id: "need",
          label: "What do you need help with?",
          multiple: true,
          options: [
            "I want to start hormones",
            "I need a hormone prescription or refill",
            "I need a trans-friendly GP",
            "I need blood tests",
            "I want information about surgery",
            "I need a referral",
            "I need mental health support",
            "I need sexual health care",
            "I can't afford the care I need",
            "I'm not sure where to start",
            "Something else",
          ],
        },
        {
          id: "stage",
          label: "Where are you at right now?",
          options: [
            "I haven't started yet",
            "I'm trying to start",
            "I'm already receiving care",
            "My care has been interrupted",
            "I've been refused or turned away",
            "I'm not sure",
          ],
        },
        {
          id: "priority",
          label: "What matters most right now?",
          multiple: true,
          options: [
            "Getting an appointment quickly",
            "Finding someone trans-friendly",
            "Keeping costs low",
            "Understanding what I need to do",
            "Getting medication sorted",
            "Finding the right specialist",
            "Something else",
          ],
        },
      ]}
      resources={[
        {
          heading: "Trans-friendly healthcare in Melbourne",
          description:
            "These services have experience with trans and gender-diverse patients. You don't need a referral to contact most of them.",
          resources: [
            {
              name: "Equinox Gender Diverse Health Centre",
              detail: "GP and nurse-led trans healthcare, including hormones. Bulk-billing available. Fitzroy.",
              link: "https://equinox.org.au",
            },
            {
              name: "Thorne Harbour Health",
              detail: "LGBTIQ+ health services, GP, sexual health, mental health. Melbourne CBD.",
              link: "https://thorneharbour.org",
            },
            {
              name: "Monash Gender Clinic",
              detail: "Specialist gender clinic for adults. Public referral via GP required.",
              link: "https://monashhealth.org/services/gender-clinic/",
            },
            {
              name: "headspace",
              detail: "Mental health support for people aged 12–25. Multiple Melbourne locations.",
              link: "https://headspace.org.au",
            },
            {
              name: "Phoenix Australia",
              detail: "Trans and gender-diverse mental health resources and referral information.",
              link: "https://phoenixaustralia.org",
            },
          ],
        },
        {
          heading: "Telehealth options",
          description: "If you can't get to Melbourne or prefer online appointments:",
          resources: [
            {
              name: "Endo & Beyond",
              detail: "Telehealth hormone prescriptions across Victoria. No referral required for initial consult.",
              link: "https://endoandbeyond.com.au",
            },
            {
              name: "GP2U",
              detail: "Online GP telehealth — search for trans-affirming practitioners.",
              link: "https://gp2u.com.au",
            },
          ],
        },
      ]}
    />
  );
}
