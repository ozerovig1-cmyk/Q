import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeatureGrid from '../../components/FeatureGrid';
import Timeline from '../../components/Timeline';
import FAQ from '../../components/FAQ';
import CTAForms from '../../components/CTAForms';

/**
 * Marketing home page for QuantXlr8. This one‑page layout highlights
 * the value proposition of the venture‑client accelerator, describes
 * who it serves, outlines the process and provides application forms.
 */
export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {/* Hero section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Quantum acceleration graphic"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-heading text-grayLight max-w-2xl">
              Accelerate Innovation
              <br />
              with QuantXlr8
            </h1>
            <p className="mt-4 text-lg md:text-xl text-grayLight/80 max-w-2xl">
              We bridge startups and corporates through the venture‑client model, unlocking real solutions to real challenges.
            </p>
            <a
              href="#apply"
              className="mt-8 inline-block bg-electric text-navy font-semibold px-6 py-3 rounded-md hover:bg-teal focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              Get started
            </a>
          </div>
        </section>
        {/* Feature grid */}
        <FeatureGrid />
        {/* Venture client explanation */}
        <section className="py-16 bg-onyx">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading mb-6 text-electric">Why the Venture‑Client Model?</h2>
            <p className="max-w-3xl mx-auto text-grayLight/90">
              The venture‑client approach enables corporates to access cutting‑edge solutions without taking equity, while startups gain early revenue and validation. It is a capital‑efficient path to mutual growth and innovation, allowing both sides to test and scale breakthrough technologies rapidly.
            </p>
          </div>
        </section>
        {/* Timeline */}
        <Timeline />
        {/* FAQ */}
        <FAQ />
        {/* Application forms */}
        <CTAForms />
      </main>
      <Footer />
    </>
  );
}