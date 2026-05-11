import Link from "next/link"
import Image from "next/image"
import {
  Search,
  ClipboardList,
  Shield,
  Scale,
  Eye,
  GraduationCap,
  FileSearch,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Users,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const homeServices = [
  {
    icon: Search,
    title: "Market Survey & Research",
    description:
      "Thorough pre-raid online and offline surveys to ascertain ground realities regarding counterfeit availability.",
    href: "/services#market-research",
  },
  {
    icon: ClipboardList,
    title: "Strategic Action Planning",
    description:
      "Experience-driven master plans with timelines. We advise on the best course of action for each case.",
    href: "/services#action-planning",
  },
  {
    icon: Shield,
    title: "IPR Enforcement & Anti-Counterfeiting",
    description:
      "Filing anti-infringement FIRs, Cease & Desist Notices and civil/criminal cases anywhere in India.",
    href: "/services#enforcement",
  },
  {
    icon: Scale,
    title: "Post Raid Support",
    description:
      "Complete post-raid follow-up in Police Stations and Courts until case conclusion.",
    href: "/services#post-raid",
  },
  {
    icon: Eye,
    title: "Regular Monitoring",
    description:
      "Red list management with regular online and offline monitoring of infringers and lookalike brands.",
    href: "/services#monitoring",
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    description:
      "Professional training for in-house sales teams, legal counsels, and operational personnel.",
    href: "/services#training",
  },
  {
    icon: FileSearch,
    title: "On-Site Patent Investigations",
    description:
      "On-site patent infringement investigations with evidence procurement and expert court testimony across India.",
    href: "/services#patent-investigations",
  },
]

const whyChooseUs = [
  {
    title: "Super Specialization in IPR",
    description: "We super specialize in IPR enforcement with master plans and strategies for each case",
  },
  {
    title: "Almost Perfect Success Rate",
    description: "Our success rate is attributed to SOPs and solid evidence-based legal approach",
  },
  {
    title: "Pan-India Network",
    description: "Experienced enforcement officers with brilliant network of associates across India",
  },
  {
    title: "Complete Confidentiality",
    description: "We maintain strict confidentiality and provide complainant presence in almost all raids",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Protecting Your Innovation &amp; Creativity
              </h1>
              <h2 className="text-xl text-primary font-semibold mb-4">
                Let&apos;s Talk Business! That Is Anti-Infringement Operations.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                &ldquo;You are here; that means someone out there is dealing in your duplicates, and you want to stop
                them. You have reached the right address.&rdquo; We super specialise in stopping such miscreants at all
                levels across India. We are the best at what we do, and our services are also very affordable. Our
                success rate is almost perfect because we do not take a job unless we are 100% confident that we can
                deliver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
              <div className="mt-6">
                <Link
                  href="https://www.linkedin.com/in/rishikulshresth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Connect with Dr. Rishi Kulshresth →
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/other/article-1.jpeg"
                alt="Intellectual Property Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t">
            {[
              { icon: Globe, value: "Pan-India", label: "Complete coverage across all states" },
              { icon: CheckCircle, value: "~100%", label: "Success rate in enforcement" },
              { icon: Users, value: "Expert", label: "Specialized enforcement team" },
              { icon: Headphones, value: "24/7", label: "Round-the-clock support" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <stat.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IPR/brand protection and anti-counterfeiting solutions across India with experienced
              enforcement officers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <CardHeader>
                  <div className="p-2 w-fit bg-primary/10 rounded-lg mb-2 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Integrity, pride, passion, and belief in what we do drive us relentlessly to protect your brand
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-card border rounded-xl">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Brand from Counterfeits?</h2>
          <p className="opacity-90 max-w-2xl mx-auto mb-8">
            Contact us for a free consultation to discuss your brand protection needs. We are competent in filing
            anti-infringement FIRs, sending Cease &amp; Desist Notices, and filing civil/criminal cases anywhere in
            India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
          <div className="mt-8">
            <Link
              href="https://www.linkedin.com/in/rishikulshresth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-75 hover:opacity-100 transition-opacity"
            >
              Connect with Dr. Rishi Kulshresth on LinkedIn →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
