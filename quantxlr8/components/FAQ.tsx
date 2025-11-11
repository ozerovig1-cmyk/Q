/**
 * FAQ component provides answers to common questions about the
 * venture‑client accelerator. Each item uses native HTML details
 * elements for accessible disclosure widgets.
 */
import React from 'react';

const faqs = [
  {
    question: 'What is a venture‑client accelerator?',
    answer:
      'A venture‑client accelerator enables corporates to become early customers of startups. Rather than investing equity, corporates engage startups as clients, providing early revenue and real‑world validation while solving strategic challenges.',
  },
  {
    question: 'Who can apply to QuantXlr8?',
    answer:
      'We welcome applications from growth‑stage startups with differentiated technology, corporates seeking to address innovation challenges, and investors interested in early exposure to emerging solutions.',
  },
  {
    question: 'Do you take equity or board seats?',
    answer:
      'No. As a venture‑client accelerator we purchase solutions from startups for pilot projects. There is no equity investment, allowing startups to maintain full ownership.',
  },
  {
    question: 'How long is the program?',
    answer:
      'Pilot durations vary based on the challenge but typically last between 3–6 months. Following a successful pilot, scaling engagements are negotiated between the corporate and startup.',
  },
  {
    question: 'Is there a fee to participate?',
    answer:
      'There is no fee for startups. Corporates fund the pilot projects, creating real revenue opportunities for participating startups.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-3xl font-heading mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="border border-grayLight/20 rounded-lg p-4"
            >
              <summary className="font-semibold cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2">
                {item.question}
              </summary>
              <p className="mt-2 text-sm text-grayLight/90 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}