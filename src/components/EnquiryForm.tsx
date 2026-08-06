"use client";

import { FormEvent, useState } from "react";

type ChoiceQuestion = {
  id: string;
  label: string;
  options: string[];
  multiple?: boolean;
};

type Props = {
  category: string;
  heading?: string;
  intro?: string;
  questions: ChoiceQuestion[];
};

export default function EnquiryForm({
  category,
  heading = "Tell us what's happening.",
  intro = "Answer what you can. You don't need to explain everything perfectly.",
  questions,
}: Props) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const answers: Record<string, string[]> = {};

    for (const question of questions) {
      answers[question.id] = data
        .getAll(question.id)
        .map((value) => String(value));
    }

    const payload = {
      category,
      answers,
      other: String(data.get("other") || ""),
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      contactMethod: String(data.get("contactMethod") || ""),
      safeTime: String(data.get("safeTime") || ""),
      consent: data.get("consent") === "yes",
      website: String(data.get("website") || ""),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSent(true);
      form.reset();
    } catch {
      setError(
        "That didn't send. Your answers are still on this page — try again."
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <section className="enquirySuccess">
        <span className="eyebrow">SENT</span>

        <h2>We've got it.</h2>

        <p>
          Your enquiry was submitted. If you gave us contact details, they can
          be used to respond using the contact method you selected.
        </p>

        <button type="button" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </section>
    );
  }

  return (
    <form className="enquiryForm" onSubmit={submit}>
      <header className="enquiryHeader">
        <span className="eyebrow">{category.toUpperCase()} ENQUIRY</span>

        <h2>{heading}</h2>

        <p>{intro}</p>
      </header>

      {questions.map((question) => (
        <fieldset className="formSection" key={question.id}>
          <legend>{question.label}</legend>

          <div className="choiceGrid">
            {question.options.map((option) => (
              <label className="choiceOption" key={option}>
                <input
                  type={question.multiple ? "checkbox" : "radio"}
                  name={question.id}
                  value={option}
                />

                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <section className="formSection">
        <label className="fieldLabel" htmlFor="other">
          Anything else we should know?
        </label>

        <p className="fieldHelp">
          Optional. Write it normally. It doesn't need to sound formal.
        </p>

        <textarea
          id="other"
          name="other"
          rows={6}
          placeholder="Tell us anything the choices above didn't cover..."
        />
      </section>

      <section className="contactSection">
        <span className="eyebrow">CONTACT</span>

        <h3>How can we get back to you?</h3>

        <div className="safeContactNotice">
          <strong>Only give us contact details that are safe for us to use.</strong>

          <span>
            If somebody monitors your phone, email or accounts, use a contact
            method they cannot access.
          </span>
        </div>

        <label className="fieldLabel" htmlFor="name">
          Name you want us to use
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
        />

        <fieldset className="formSection contactMethod">
          <legend>Safest way to contact you</legend>

          <div className="choiceGrid">
            {["Email", "Phone call", "SMS / text"].map((option) => (
              <label className="choiceOption" key={option}>
                <input
                  type="radio"
                  name="contactMethod"
                  value={option}
                />

                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="twoFields">
          <div>
            <label className="fieldLabel" htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="fieldLabel" htmlFor="phone">
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="04..."
            />
          </div>
        </div>

        <label className="fieldLabel" htmlFor="safeTime">
          When is it safe to contact you?
        </label>

        <input
          id="safeTime"
          name="safeTime"
          type="text"
          placeholder="For example: weekdays after 5pm, anytime, don't call before 10am"
        />

        <label className="consentOption">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
          />

          <span>
            I understand this information will be used to respond to my enquiry.
          </span>
        </label>
      </section>

      {/* Bot trap — real users never see this */}
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {error && <p className="formError">{error}</p>}

      <button
        className="submitEnquiry"
        type="submit"
        disabled={sending}
      >
        {sending ? "Sending..." : "Send my enquiry →"}
      </button>

      <p className="submissionNote">
        Don't include passwords, PINs, banking passwords or login codes.
      </p>
    </form>
  );
}
