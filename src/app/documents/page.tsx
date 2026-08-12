import type { Metadata } from "next";
import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export const metadata: Metadata = {
  title: "Name & ID | trans.melbourne",
  description:
    "Changing your name, gender marker, birth certificate, passport, Medicare and other documents in Victoria.",
};

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Name & ID"
      headline="Which name, gender or identity document needs fixing?"
      description="Tell us what you have now and what you're trying to change."
      questions={[
        {
          id: "documents",
          label: "What needs changing?",
          multiple: true,
          options: [
            "Legal name",
            "Birth certificate",
            "Driver licence",
            "Passport",
            "Medicare",
            "Centrelink",
            "Bank details",
            "Work or education records",
            "Multiple documents",
            "I don't know where to start",
            "Something else",
          ],
        },
        {
          id: "change",
          label: "What are you trying to change?",
          multiple: true,
          options: [
            "My name",
            "My gender or sex marker",
            "My photo",
            "Several of these",
            "I'm not sure what I'm allowed to change",
          ],
        },
      ]}
      resources={[
        {
          heading: "Changing your name and gender in Victoria",
          description:
            "Start with your birth certificate or deed poll — most other documents follow from there.",
          resources: [
            {
              name: "Births, Deaths and Marriages Victoria",
              detail: "Change your name or registered sex on your Victorian birth certificate.",
              link: "https://bdm.vic.gov.au",
            },
            {
              name: "VicRoads",
              detail: "Update name or gender on your Victorian driver licence.",
              link: "https://vicroads.vic.gov.au",
            },
            {
              name: "Services Australia — Medicare",
              detail: "Update your Medicare card name and gender marker via myGov.",
              link: "https://servicesaustralia.gov.au/updating-your-gender-details",
            },
            {
              name: "Australian Passport Office",
              detail: "Update name or gender on your Australian passport.",
              link: "https://passports.gov.au",
            },
            {
              name: "Transgender Victoria — name change guide",
              detail: "Step-by-step guide to changing your name in Victoria.",
              link: "https://transgendervictoria.com",
            },
          ],
        },
      ]}
    />
  );
}
