import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
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
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#trademarks" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link href="/services#patents" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Patent Filing
                </Link>
              </li>
              <li>
                <Link href="/services#copyrights" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Copyright Protection
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Brand Consulting
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
                New Delhi, India
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
