import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

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
    />
  );
}
