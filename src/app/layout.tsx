import { type Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'MumbaiHacks',
    default: 'MumbaiHacks 2025 - 3,000 Innovators. ₹50 Lakh in rewards. Infinite Possibility.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950 h-full text-base antialiased">
      <body className="flex flex-col min-h-full">{children}</body>
      <GoogleAnalytics gaId="G-8Z2Y763LYX" />
    </html>
  )
}
