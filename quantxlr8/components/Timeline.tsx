/**
 * Timeline component illustrates the venture‑client process in clear
 * stages. Each step is enumerated and accompanied by a concise
 * description. A vertical line visually connects the steps. The
 * component is responsive and accessible.
 */
import React from 'react';

const steps = [
  {
    title: 'Identify Challenges',
    description:
      'We work with corporates to surface pressing challenges that cannot be solved through existing resources.',
  },
  {
    title: 'Source Startups',
    description:
      'We scout and evaluate startups with breakthrough technologies that address the identified needs.',
  },
  {
    title: 'Pilot & Validate',
    description:
      'Selected startups engage in paid pilots to validate their solutions in real‑world conditions.',
  },
  {
    title: 'Scale',
    description:
      'Successful pilots lead to scaled deployments across the corporate organisation.',
  },
  {
    title: 'Transform',
    description:
      'Long‑term partnerships drive sustainable transformation and growth for all parties.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-navy">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-heading mb-10 text-center">Our Process</h2>
        <div className="relative border-l-2 border-grayLight/20 ml-4">
          {steps.map((step, idx) => (
            <div key={idx} className="mb-10 pl-8 relative">
              <span
                className="absolute -left-4 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-electric text-navy font-heading"
              >
                {idx + 1}
              </span>
              <h3 className="text-xl font-heading mb-1 text-electric">{step.title}</h3>
              <p className="text-grayLight/90 text-sm max-w-md">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}