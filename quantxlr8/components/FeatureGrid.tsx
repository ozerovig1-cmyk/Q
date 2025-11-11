/**
 * FeatureGrid presents tailored value propositions for startups, corporates
 * and investors. Each panel includes an illustrative icon along with
 * headline and supporting points. The grid uses responsive design to
 * stack vertically on small screens and align horizontally on larger
 * displays. Each section is given an id for anchor navigation.
 */
import React from 'react';

interface Feature {
  id: string;
  title: string;
  bullets: string[];
  Icon: () => JSX.Element;
}

const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-electric"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37l-4.95-4.95M5.007 18.993l2.828-.707 1.414 1.414-.707 2.828M14.122 10.05L16.95 7.222M19.071 4.1c.39-.39.39-1.024 0-1.414L17.314.929c-.39-.39-1.024-.39-1.414 0l-2.343 2.343 3.182 3.182L19.07 4.1z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.464 15.536a9.003 9.003 0 002.122 2.122c1.95 1.311 4.341 1.7 6.536 1.036l-3.182-3.182 3.182-3.182c.664 2.195.275 4.586-1.036 6.536a9.003 9.003 0 01-2.122 2.122"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-electric"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21h18M4 21V8a1 1 0 011-1h4a1 1 0 011 1v13m6 0V3a1 1 0 011-1h4a1 1 0 011 1v18"
    />
    <path d="M7 10h2v2H7v-2zM7 14h2v2H7v-2zM15 10h2v2h-2v-2zM15 14h2v2h-2v-2z" />
  </svg>
);

const InvestmentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-electric"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18.75h19.5M12 3v15m0 0l3.75-3.75M12 18l-3.75-3.75"
    />
  </svg>
);

const features: Feature[] = [
  {
    id: 'startups',
    title: 'For Startups',
    bullets: [
      'Earn early revenue through paid pilots with industry leaders.',
      'Validate and iterate your product with real‑world feedback.',
      'Tap into corporate networks and domain expertise.',
    ],
    Icon: RocketIcon,
  },
  {
    id: 'corporates',
    title: 'For Corporates',
    bullets: [
      'Access cutting‑edge technologies without equity commitments.',
      'Rapidly pilot and de‑risk new solutions to strategic challenges.',
      'Foster an innovation culture by working hands‑on with startups.',
    ],
    Icon: BuildingIcon,
  },
  {
    id: 'investors',
    title: 'For Investors',
    bullets: [
      'Gain early insight into high‑potential startups through our pipeline.',
      'Observe validated technologies before making investment decisions.',
      'Connect with corporates and startups to create follow‑on opportunities.',
    ],
    Icon: InvestmentIcon,
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16" aria-labelledby="features-heading">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 id="features-heading" className="text-3xl font-heading mb-10 text-center">
          Who We Serve
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ id, title, bullets, Icon }) => (
            <div key={id} id={id} className="bg-navy border border-grayLight/20 rounded-lg p-6 hover:border-electric focus-within:border-electric">
              <div className="flex items-center mb-4">
                <Icon />
                <h3 className="ml-3 text-xl font-heading">{title}</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {bullets.map((text, idx) => (
                  <li key={idx} className="text-grayLight/90">
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href={`#apply`}
                  className="inline-block text-electric hover:text-teal focus:text-teal focus:outline-none"
                >
                  Apply now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}