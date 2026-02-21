import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Dr. Rishi Kulshresth | IPR & Brand Protection',
  description: 'Comprehensive intellectual property services including trademark registration, patent filing, copyright protection, and brand consulting.',
  openGraph: {
    title: 'Services - Dr. Rishi Kulshresth',
    description: 'Expert IP and brand protection services',
    type: 'website',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
