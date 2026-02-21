import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Dr. Rishi Kulshresth - Free IP Consultation',
  description: 'Get in touch with Dr. Rishi Kulshresth for a free consultation on your intellectual property and brand protection needs.',
  openGraph: {
    title: 'Contact Us - Dr. Rishi Kulshresth',
    description: 'Schedule a consultation for IPR and brand protection',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
