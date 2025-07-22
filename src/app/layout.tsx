import { type Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'MumbaiHacks',
    default: 'MumbaiHacks 2025 - The World&apos;s Largest GenAI Hackathon is back!',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
      <GoogleAnalytics gaId="G-8Z2Y763LYX" />
    </html>
  )
}
