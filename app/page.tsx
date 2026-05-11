"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  ClipboardList,
  Shield,
  Scale,
  Eye,
  GraduationCap,
  FileSearch,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "market-research",
    icon: Search,
    number: 1,
    title: "Market Survey & Research",
    description:
      "We conduct thorough pre-raid online and offline surveys and research to ascertain the ground realities regarding the availability of counterfeits.",
    benefits: [
      "Comprehensive online market surveillance",
      "Ground-level offline surveys and investigations",
      "Counterfeit availability assessment",
      "Evidence collection and documentation",
      "Distribution network mapping",
      "Competitor infringement analysis",
      "Detailed survey reports for legal proceedings",
      "Pan-India market coverage",
    ],
  },
  {
    id: "action-planning",
    icon: ClipboardList,
    number: 2,
    title: "Designing the Best Plan of Action",
    description:
      "We use our experience and prepare an action plan with possible timelines to carry out the operation successfully. We do not conduct a raid unless we are sure. We advise the client on the best course of action for each case.",
    benefits: [
      "Customized action plans with timelines",
      "Best course of action recommendations",
      "Cease & Desist notice preparation and dispatch",
      "Civil injunction case preparation",
      "Criminal case strategy development",
      "Risk assessment and mitigation planning",
      "Multi-stakeholder coordination",
      "Confidential client briefings",
    ],
  },
  {
    id: "enforcement",
    icon: Shield,
    number: 3,
    title: "IPR Enforcement & Anti-Counterfeiting",
    description:
      "We are competent in filing anti-infringement FIRs, sending Cease & Desist Notices and filing relevant civil and criminal court cases anywhere in India.",
    benefits: [
      "Filing anti-infringement FIRs across India",
      "Coordinated raid operations nationwide",
      "Evidence-based solid legal approach",
      "Experienced enforcement officer team",
      "Cease & Desist notices",
      "Civil and criminal court case filing",
      "Complainant presence in almost all raids",
      "Complete confidentiality maintained",
    ],
  },
  {
    id: "post-raid",
    icon: Scale,
    number: 4,
    title: "Post Raid Support",
    description:
      "We specialize in dealing with enforcement authorities at all levels strictly within the confines of the law. We do a complete post-raid follow-up in Police Stations and Courts until the case's conclusion.",
    benefits: [
      "Regular follow-up in Police Stations",
      "Court appearance and representation",
      "Case tracking until conclusion",
      "Documentation and evidence management",
      "Liaison with enforcement authorities",
      "Legal compliance at all stages",
      "Regular client status updates",
      "Seizure and forfeiture proceedings",
    ],
  },
  {
    id: "monitoring",
    icon: Eye,
    number: 5,
    title: "Regular Monitoring",
    description:
      "We have a red list which includes details of all infringers of our clients which we handle. Many such infringers may have been sent a Cease & Desist notice only. We then regularly monitor these miscreants online and offline. We also specialize in stopping lookalike brands.",
    benefits: [
      "Comprehensive red list of all infringers",
      "Regular online and offline monitoring",
      "Cease & Desist notice tracking",
      "Lookalike brand detection and action",
      "E-commerce platform monitoring",
      "Social media infringement surveillance",
      "Periodic monitoring reports",
      "Rapid response to new infringements",
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    number: 6,
    title: "Training & Workshops",
    description:
      "We provide training and hold workshops to benefit in-house sales teams, legal counsels, law and operational personnel in corporate sectors.",
    benefits: [
      "In-house sales team training",
      "Legal counsel education programs",
      "Law enforcement personnel workshops",
      "Operational staff training sessions",
      "IPR awareness programs",
      "Anti-counterfeiting best practices",
      "Custom curriculum development",
      "Certification and documentation",
    ],
  },
  {
    id: "patent-investigations",
    icon: FileSearch,
    number: 7,
    title: "On-Site Patent Investigations with Evidence Procurement & Court Testimony",
    description:
      "We conduct on-site patent investigations to detect infringement, procure legally admissible evidence, and provide expert testimony in court proceedings. Our team ensures that every piece of evidence is gathered methodically and presented with precision to support your patent enforcement case.",
    benefits: [
      "On-site patent infringement investigation",
      "Legally admissible evidence procurement",
      "Detailed investigation reports for legal proceedings",
      "Expert witness testimony in court",
      "Coordination with legal counsel during hearings",
      "End-to-end case support from investigation to verdict",
      "Pan-India coverage for on-site investigations",
      "Strict chain-of-custody evidence handling",
    ],
  },
]

const faqs = [
  {
    question: "What makes your enforcement approach unique?",
    answer:
      "We super specialize in IPR enforcement with master plans and strategies for each case. We only conduct operations when we are 100% confident of success, moving on solid, evidence-based footing. Our team comprises experienced enforcement officers with a brilliant network of pan-India associates.",
  },
  {
    question: "How do you maintain confidentiality during operations?",
    answer:
      "We maintain strict confidentiality throughout all operations. We ensure no local involvement in sensitive operations and have strict confidentiality protocols. Our team is trained to handle sensitive information with the utmost discretion.",
  },
  {
    question: "What is your success rate in anti-counterfeiting operations?",
    answer:
      "Our success rate is attributed to our SOPs and solid evidence-based legal approach. We do not take a job unless we are 100% confident that we can deliver, which contributes to our almost perfect success rate.",
  },
  {
    question: "Do you provide support after raid operations?",
    answer:
      "Yes, we provide complete post-raid follow-up in Police Stations and Courts until the case's conclusion. We specialize in dealing with enforcement authorities at all levels strictly within the confines of the law.",
  },
  {
    question: "What is the red list and how does it help?",
    answer:
      "The red list includes details of all infringers of our clients. We regularly monitor these infringers online and offline, tracking those who have received Cease & Desist notices to ensure compliance and take swift action on any new violations.",
  },
  {
    question: "Can you handle lookalike brands?",
    answer:
      "Yes, we specialize in stopping lookalike brands. Our team is experienced in identifying and taking action against brands that attempt to copy or imitate our clients' intellectual property through deceptively similar names, logos, or packaging.",
  },
]

const workflowSteps = [
  {
    number: 1,
    title: "Market Survey & Intelligence",
    description:
      "Conduct thorough online and offline surveys to ascertain ground realities regarding counterfeit availability and distribution networks.",
  },
  {
    number: 2,
    title: "Strategic Planning",
    description:
      "Design the best plan of action with timelines. We advise on the most effective approach — Cease & Desist, civil injunction, or criminal proceedings.",
  },
  {
    number: 3,
    title: "Enforcement Action",
    description:
      "Execute coordinated raid operations with experienced officers. We ensure complete confidentiality and are present as complainants in almost all raids.",
  },
  {
    number: 4,
    title: "Post-Raid Follow-up",
    description:
      "Complete follow-up in Police Stations and Courts until case conclusion, strictly within legal confines with regular status updates.",
  },
  {
    number: 5,
    title: "Continuous Monitoring",
    description:
      "Maintain red list of infringers and conduct regular online/offline monitoring to ensure long-term brand protection and quick response to violations.",
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showAllBenefits, setShowAllBenefits] = useState<{ [key: number]: boolean }>({})

  const currentService = services[activeService]
  const IconComponent = currentService.icon

  const toggleBenefits = (index: number) => {
    setShowAllBenefits((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            India&apos;s Leading IPR Enforcement Team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Protect Your Brand with
            <br />
            <span className="text-primary">Expert IPR Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Super-specialized in enforcement, market intelligence, anti-counterfeiting solutions, and investigations
            across India.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
            {[
              { value: "100%", label: "Pan-India Coverage" },
              { value: "Expert", label: "Enforcement Team" },
              { value: "High", label: "Success Rate" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Our Core Competencies</p>
          <p className="max-w-3xl mx-auto opacity-90">
            We are an IPR/brand protection firm with expertise in enforcement, market intelligence, anti-counterfeiting
            solutions, and specific investigations across India. Our team comprises experienced enforcement officers and
            a brilliant network of pan-India associates.
          </p>
          <p className="mt-4 font-bold text-xl">WE SUPER SPECIALIZE IN IPR</p>
          <p className="opacity-75 text-sm mt-1">Integrity • Pride • Passion • Belief in what we do</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IPR protection and enforcement solutions tailored to your needs
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Service Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-2 sticky top-24">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeService === index
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs opacity-60 mb-0.5">
                          {index + 1} of {services.length}
                        </div>
                        <div className="text-sm font-medium truncate">{service.title}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Service Detail */}
            <div className="lg:w-2/3">
              <div className="bg-card border rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {activeService + 1} of {services.length}
                    </div>
                    <h3 className="text-2xl font-bold">{currentService.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">{currentService.description}</p>

                <div>
                  <h4 className="font-semibold mb-4">Key Benefits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(showAllBenefits[activeService]
                      ? currentService.benefits
                      : currentService.benefits.slice(0, 4)
                    ).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  {currentService.benefits.length > 4 && (
                    <button
                      onClick={() => toggleBenefits(activeService)}
                      className="mt-4 text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      {showAllBenefits[activeService] ? (
                        <>Show less <ChevronUp className="h-4 w-4" /></>
                      ) : (
                        <>View all {currentService.benefits.length} benefits <ChevronDown className="h-4 w-4" /></>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-muted/50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Complete Confidentiality", desc: "No local involvement in sensitive operations - strict confidentiality protocols" },
              { title: "Pan-India Operations", desc: "Brilliant network of associates covering all states and territories" },
              { title: "Complete Follow-up", desc: "From raid to case conclusion - comprehensive post-action support" },
            ].map((f) => (
              <div key={f.title}>
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Diverse Industry Coverage</p>
            <h2 className="text-3xl font-bold mb-4">Industries We Protect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized brand protection and anti-counterfeiting solutions across all major sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "Consumer Products",
              "Pharmaceuticals & Healthcare",
              "Electronics & Technology",
              "Automotive & Parts",
              "Fashion & Apparel",
              "FMCG & Retail",
              "Luxury Goods",
              "Manufacturing",
            ].map((industry) => (
              <div
                key={industry}
                className="p-4 bg-card border rounded-xl text-center text-sm font-medium hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
            {[
              { value: "8+", label: "Major Industries" },
              { value: "1000+", label: "Successful Operations" },
              { value: "All States", label: "Pan-India Coverage" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Our Methodology</p>
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven, systematic approach to protecting your intellectual property with precision and expertise
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {workflowSteps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h4 className="font-semibold mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Knowledge Base</p>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our IPR enforcement and brand protection services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-medium hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10 p-8 bg-muted/30 rounded-2xl max-w-xl mx-auto">
            <h4 className="font-semibold mb-2">Still Have Questions?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Our team of IPR experts is ready to help you protect your brand
            </p>
            <Button asChild>
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold opacity-75 uppercase tracking-wider mb-2">
            Start Your Brand Protection Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Brand?</h2>
          <p className="opacity-90 max-w-2xl mx-auto mb-8">
            Partner with India&apos;s leading IPR enforcement team for comprehensive brand protection
          </p>
          <p className="opacity-75 text-sm max-w-xl mx-auto mb-10">
            We are competent in filing anti-infringement FIRs, sending Cease &amp; Desist Notices, and filing relevant
            civil and criminal court cases anywhere in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg mx-auto">
            {[
              { value: "Pan-India", label: "Complete Coverage" },
              { value: "Expert", label: "Enforcement Team" },
              { value: "24/7", label: "Support & Monitoring" },
              { value: "100%", label: "Confidential" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold">{s.value}</div>
                <div className="text-xs opacity-75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
