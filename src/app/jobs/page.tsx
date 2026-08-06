import ProblemEnquiryPage from "@/components/ProblemEnquiryPage";

export default function Page() {
  return (
    <ProblemEnquiryPage
      category="Jobs"
      headline="Are you looking for work, or is work treating you badly?"
      description="Tell us the actual employment problem."
      questions={[
        {
          id: "problem",
          label: "What are you dealing with?",
          multiple: true,
          options: [
            "I need a job",
            "I need help with my resume",
            "I need help applying for jobs",
            "I'm worried about being trans at work",
            "I'm being misgendered or deadnamed",
            "I'm being bullied or harassed",
            "I think I'm being discriminated against",
            "I've lost my job",
            "I'm having problems changing my details at work",
            "Something else",
          ],
        },
        {
          id: "help",
          label: "What would help most?",
          multiple: true,
          options: [
            "Finding trans-friendly employers",
            "Job search help",
            "Resume or application help",
            "Understanding my workplace rights",
            "Dealing with discrimination",
            "Making a complaint",
            "Someone to explain my options",
            "Something else",
          ],
        },
      ]}
    />
  );
}
