import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Dr. Rishi Kulshresth Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-semibold text-primary-foreground">Dr. Rishi Kulshresth</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Expert in Intellectual Property Rights and Brand Protection
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-semibold mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#brand-protection" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Brand Protection
                </Link>
              </li>
              <li>
                <Link href="/services#corporate-consultancy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Corporate Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services#pan-india-raids" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pan India Anti-Infringement Raids
                </Link>
              </li>
              <li>
                <Link href="/services#pan-india-civil-suits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pan India Anti-Infringement Civil Suits
                </Link>
              </li>
              <li>
                <Link href="/services#legal-metrology" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Legal Metrology Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services#patent-infringement-investigations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Patent Infringement Ground Investigations
                </Link>
              </li>
              <li>
                <Link href="/services#corporate-team-training" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Training &amp; Sensitising Corporate Teams on IPR
                </Link>
              </li>
              <li>
                <Link href="/services#ipr-lectures" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Lectures on IPR Law at All Levels
                </Link>
              </li>
              <li>
                <Link href="/services#legal-advisers-advocates" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Legal Advisers and Advocates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919999853567" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 99998 53567
                </a>
              </li>
              <li>
                <a href="mailto:drrishikulshresth@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  drrishikulshresth@gmail.com
                </a>
              </li>
              <li className="text-primary-foreground/80">
                Delhi NCR, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} Dr. Rishi Kulshresth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
