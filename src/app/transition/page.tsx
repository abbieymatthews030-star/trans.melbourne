import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

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
    />
  );
}
