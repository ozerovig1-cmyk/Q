import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import React from 'react';

// Importing fonts as CSS variables so they can be referenced in tailwind
// configuration and components via var(--font-inter) and var(--font-source)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const source = Source_Sans_3({ subsets: ['latin'], variable: '--font-source' });

export const metadata: Metadata = {
  title: 'QuantXlr8 | Venture‑Client Accelerator',
  description:
    'QuantXlr8 (QX8) is a venture‑client accelerator connecting startups, corporates and investors to accelerate innovation through real‑world problem solving.',
  themeColor: '#0B1020',
  openGraph: {
    title: 'QuantXlr8 | Venture‑Client Accelerator',
    description:
      'QuantXlr8 (QX8) is a venture‑client accelerator connecting startups, corporates and investors to accelerate innovation through real‑world problem solving.',
    url: 'https://quantxlr8.example',
    siteName: 'QuantXlr8',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Abstract quantum acceleration graphic',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantXlr8 | Venture‑Client Accelerator',
    description:
      'QuantXlr8 (QX8) bridges startups and corporates through the venture‑client model, delivering innovation at scale.',
    images: ['/images/hero.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${source.variable}`}>
      <body className="min-h-screen flex flex-col font-body">
        {/* Skip link for accessibility */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}