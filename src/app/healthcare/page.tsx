import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

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
    />
  );
}
