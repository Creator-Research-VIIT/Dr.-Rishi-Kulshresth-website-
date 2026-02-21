import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Rishi Kulshresth - IPR & Brand Protection Expert',
  description: 'Learn about Dr. Rishi Kulshresth with 15+ years of expertise in intellectual property rights, brand protection, and legal services.',
  openGraph: {
    title: 'About Dr. Rishi Kulshresth',
    description: 'Expert IPR and brand protection attorney',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
