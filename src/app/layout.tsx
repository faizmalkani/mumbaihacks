import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'MumbaiHacks',
    default: 'MumbaiHacks 2025 - Where Innovation Meets Impact',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
