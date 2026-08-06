import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

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
    />
  );
}
