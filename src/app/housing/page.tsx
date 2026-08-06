import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Housing"
      headline="Do you need somewhere to live, or somewhere safe tonight?"
      description="Those are different problems. Tell us which one you're dealing with."
      questions={[
        {
          id: "situation",
          label: "What's happening?",
          multiple: true,
          options: [
            "I have nowhere to sleep tonight",
            "I might lose my housing soon",
            "I've been kicked out",
            "Where I'm staying isn't safe",
            "I'm couch surfing",
            "I'm in temporary accommodation",
            "I'm looking for a rental",
            "I'm having problems with my landlord",
            "I'm being discriminated against",
            "Something else",
          ],
        },
        {
          id: "timeframe",
          label: "How urgent is it?",
          options: [
            "I need somewhere tonight",
            "Within the next few days",
            "Within the next few weeks",
            "I'm planning ahead",
            "I'm not sure",
          ],
        },
        {
          id: "help",
          label: "What would actually help?",
          multiple: true,
          options: [
            "Emergency accommodation",
            "Longer-term housing",
            "Rental help",
            "Bond or financial help",
            "Housing application help",
            "Help finding a trans-friendly service",
            "Tenant rights information",
            "I don't know — tell me my options",
            "Something else",
          ],
        },
      ]}
    />
  );
}
