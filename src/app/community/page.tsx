import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

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
    />
  );
}
