"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

/**
 * CTAForms renders three distinct application forms—for startups, corporates and
 * investors—inside a tabbed interface. Each form uses react‑hook‑form for
 * state management and Zod schemas for validation. On submission the data
 * is POSTed to its respective API route and a success message is displayed.
 */

// Validation schemas
const startupSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Please enter your company name'),
  website: z.string().optional().url('Please enter a valid URL').or(z.literal('')),
  description: z.string().min(10, 'Tell us a bit more about your product or solution'),
});

const corporateSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Please enter your company name'),
  challenge: z.string().min(10, 'Describe the challenge you want to address'),
  budget: z.string().optional(),
});

const investorSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  firm: z.string().min(1, 'Please enter your fund or firm name'),
  message: z.string().min(5, 'Tell us a bit more about your interests'),
});

type StartupForm = z.infer<typeof startupSchema>;
type CorporateForm = z.infer<typeof corporateSchema>;
type InvestorForm = z.infer<typeof investorSchema>;

export default function CTAForms() {
  const [active, setActive] = useState<'startup' | 'corporate' | 'investor'>('startup');
  const [submitted, setSubmitted] = useState<{ [key: string]: boolean }>({});

  // Startups form
  const {
    register: registerStartup,
    handleSubmit: handleStartupSubmit,
    formState: { errors: startupErrors },
    reset: resetStartup,
  } = useForm<StartupForm>({ resolver: zodResolver(startupSchema) });

  // Corporates form
  const {
    register: registerCorp,
    handleSubmit: handleCorpSubmit,
    formState: { errors: corpErrors },
    reset: resetCorp,
  } = useForm<CorporateForm>({ resolver: zodResolver(corporateSchema) });

  // Investors form
  const {
    register: registerInv,
    handleSubmit: handleInvSubmit,
    formState: { errors: invErrors },
    reset: resetInv,
  } = useForm<InvestorForm>({ resolver: zodResolver(investorSchema) });

  const onSubmitStartup = async (data: StartupForm) => {
    const res = await fetch('/api/startup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted((prev) => ({ ...prev, startup: true }));
      resetStartup();
    }
  };
  const onSubmitCorp = async (data: CorporateForm) => {
    const res = await fetch('/api/corporate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted((prev) => ({ ...prev, corporate: true }));
      resetCorp();
    }
  };
  const onSubmitInv = async (data: InvestorForm) => {
    const res = await fetch('/api/investor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted((prev) => ({ ...prev, investor: true }));
      resetInv();
    }
  };

  return (
    <section id="apply" className="py-16 bg-navy">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-3xl font-heading mb-6 text-center text-electric">Apply Now</h2>
        <p className="text-center text-grayLight/80 mb-8">
          Choose the pathway that best describes you and submit your application.
        </p>
        {/* Tabs */}
        <div className="flex justify-center space-x-2 mb-6">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
              active === 'startup'
                ? 'bg-electric text-navy border-electric'
                : 'bg-transparent text-grayLight border-grayLight/30 hover:bg-grayLight/10'
            }`}
            onClick={() => setActive('startup')}
          >
            Startup
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
              active === 'corporate'
                ? 'bg-electric text-navy border-electric'
                : 'bg-transparent text-grayLight border-grayLight/30 hover:bg-grayLight/10'
            }`}
            onClick={() => setActive('corporate')}
          >
            Corporate
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
              active === 'investor'
                ? 'bg-electric text-navy border-electric'
                : 'bg-transparent text-grayLight border-grayLight/30 hover:bg-grayLight/10'
            }`}
            onClick={() => setActive('investor')}
          >
            Investor
          </button>
        </div>
        {/* Forms */}
        <div className="bg-onyx p-6 rounded-lg border border-grayLight/20">
          {active === 'startup' && (
            <form onSubmit={handleStartupSubmit(onSubmitStartup)} noValidate>
              <FormField
                label="Full name"
                type="text"
                error={startupErrors.fullName?.message}
                register={registerStartup('fullName')}
              />
              <FormField
                label="Email"
                type="email"
                error={startupErrors.email?.message}
                register={registerStartup('email')}
              />
              <FormField
                label="Company"
                type="text"
                error={startupErrors.company?.message}
                register={registerStartup('company')}
              />
              <FormField
                label="Website (optional)"
                type="url"
                error={startupErrors.website?.message}
                register={registerStartup('website')}
              />
              <FormField
                label="Product description"
                type="textarea"
                error={startupErrors.description?.message}
                register={registerStartup('description')}
              />
              <SubmitArea submitted={submitted.startup} />
            </form>
          )}
          {active === 'corporate' && (
            <form onSubmit={handleCorpSubmit(onSubmitCorp)} noValidate>
              <FormField
                label="Full name"
                type="text"
                error={corpErrors.fullName?.message}
                register={registerCorp('fullName')}
              />
              <FormField
                label="Email"
                type="email"
                error={corpErrors.email?.message}
                register={registerCorp('email')}
              />
              <FormField
                label="Company"
                type="text"
                error={corpErrors.company?.message}
                register={registerCorp('company')}
              />
              <FormField
                label="Describe your challenge"
                type="textarea"
                error={corpErrors.challenge?.message}
                register={registerCorp('challenge')}
              />
              <FormField
                label="Budget (optional)"
                type="text"
                error={corpErrors.budget?.message}
                register={registerCorp('budget')}
              />
              <SubmitArea submitted={submitted.corporate} />
            </form>
          )}
          {active === 'investor' && (
            <form onSubmit={handleInvSubmit(onSubmitInv)} noValidate>
              <FormField
                label="Full name"
                type="text"
                error={invErrors.fullName?.message}
                register={registerInv('fullName')}
              />
              <FormField
                label="Email"
                type="email"
                error={invErrors.email?.message}
                register={registerInv('email')}
              />
              <FormField
                label="Fund / Firm"
                type="text"
                error={invErrors.firm?.message}
                register={registerInv('firm')}
              />
              <FormField
                label="Message"
                type="textarea"
                error={invErrors.message?.message}
                register={registerInv('message')}
              />
              <SubmitArea submitted={submitted.investor} />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Helper components
interface FieldProps {
  label: string;
  type: 'text' | 'email' | 'url' | 'textarea';
  error?: string;
  // The register function is provided by react-hook-form. We use any here to
  // avoid leaking generic types into the component signature.
  register: any;
}

function FormField({ label, type, error, register }: FieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          {...register}
          className="w-full rounded-md bg-navy border border-grayLight/30 p-2 text-grayLight placeholder-grayLight/50 focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric"
          rows={4}
        />
      ) : (
        <input
          type={type}
          {...register}
          className="w-full rounded-md bg-navy border border-grayLight/30 p-2 text-grayLight placeholder-grayLight/50 focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric"
        />
      )}
      {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
    </div>
  );
}

function SubmitArea({ submitted }: { submitted?: boolean }) {
  return (
    <div className="mt-6">
      <button
        type="submit"
        className="w-full bg-electric text-navy font-semibold py-2 rounded-md hover:bg-teal focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
      >
        Submit
      </button>
      {submitted && (
        <p className="mt-3 text-green-400 text-sm" role="status">
          Thank you! Your application has been received.
        </p>
      )}
    </div>
  );
}