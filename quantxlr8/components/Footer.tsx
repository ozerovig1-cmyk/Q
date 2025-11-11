import Image from 'next/image';
import Link from 'next/link';

/**
 * The Footer component provides basic information, quick navigation links,
 * and contact details. It also includes a copyright notice that
 * automatically updates based on the current year. Social media links
 * are represented as simple SVG icons; replace the hrefs with real
 * profiles as needed.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-onyx text-grayLight mt-16">
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src="/brand/qx8-logo.svg" alt="QuantXlr8 logo" width={180} height={40} />
          <p className="mt-4 text-sm text-grayLight/80 max-w-sm">
            QuantXlr8 (QX8) is a venture‑client accelerator connecting startups and corporates to rapidly
            validate and scale breakthrough solutions. We bridge real‑world problems with pioneering
            technology.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-lg mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#startups" className="hover:text-electric focus:text-electric focus:outline-none">
                For Startups
              </a>
            </li>
            <li>
              <a href="#corporates" className="hover:text-electric focus:text-electric focus:outline-none">
                For Corporates
              </a>
            </li>
            <li>
              <a href="#investors" className="hover:text-electric focus:text-electric focus:outline-none">
                For Investors
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-electric focus:text-electric focus:outline-none">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg mb-3">Contact</h3>
          <p className="text-sm">Email: <a href="mailto:hello@quantxlr8.com" className="text-electric hover:underline">hello@quantxlr8.com</a></p>
          <p className="text-sm">Address: 123 Innovation Way, Global City</p>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-electric focus:text-electric focus:outline-none"
            >
              {/* Simple LinkedIn icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-5 h-5"
              >
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.72.72 0 010 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.22c.837 0 1.36-.556 1.36-1.25-.015-.71-.523-1.25-1.345-1.25-.822 0-1.36.54-1.36 1.25 0 .694.523 1.25 1.33 1.25h.015zm4.908 8.22h2.4V9.359c0-.215.016-.43.079-.586.173-.43.568-.875 1.23-.875.867 0 1.213.66 1.213 1.629v4.867h2.401V9.26c0-2.22-1.183-3.253-2.762-3.253-1.276 0-1.845.705-2.165 1.201h.016v-1.03H8.65c.031.66 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-electric focus:text-electric focus:outline-none"
            >
              {/* Simple Twitter icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-5 h-5"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.01-.423A6.676 6.676 0 0016 3.542a6.56 6.56 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.084.797A3.286 3.286 0 007.88 6.03a9.325 9.325 0 01-6.767-3.428 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.616-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 010 13.557a9.29 9.29 0 005.031 1.475" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-grayLight/20 py-4 text-center text-xs text-grayLight/60">
        &copy; {currentYear} QuantXlr8. All rights reserved.
      </div>
    </footer>
  );
}