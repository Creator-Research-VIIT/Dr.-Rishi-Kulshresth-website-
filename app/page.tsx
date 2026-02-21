import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, BookOpen, Building2, CheckCircle, FileText, Globe, Lightbulb, Linkedin, Scale, Shield, Target, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const services = [
    {
      icon: Target,
      title: 'Market Survey & Research',
      description: 'Thorough pre-raid online and offline surveys to ascertain ground realities regarding counterfeit availability.',
      link: '/services#market-research'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Action Planning',
      description: 'Experience-driven master plans with timelines. We advise on the best course of action for each case.',
      link: '/services#action-planning'
    },
    {
      icon: Shield,
      title: 'IPR Enforcement & Anti-Counterfeiting',
      description: 'Filing anti-infringement FIRs, Cease & Desist Notices and civil/criminal cases anywhere in India.',
      link: '/services#enforcement'
    },
    {
      icon: Scale,
      title: 'Post Raid Support',
      description: 'Complete post-raid follow-up in Police Stations and Courts until case conclusion.',
      link: '/services#post-raid'
    },
    {
      icon: FileText,
      title: 'Regular Monitoring',
      description: 'Red list management with regular online and offline monitoring of infringers and lookalike brands.',
      link: '/services#monitoring'
    },
    {
      icon: Users,
      title: 'Training & Workshops',
      description: 'Professional training for in-house sales teams, legal counsels, and operational personnel.',
      link: '/services#training'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Super Specialization in IPR',
      description: 'We super specialize in IPR enforcement with master plans and strategies for each case'
    },
    {
      icon: Shield,
      title: 'Almost Perfect Success Rate',
      description: 'Our success rate is attributed to SOPs and solid evidence-based legal approach'
    },
    {
      icon: Users,
      title: 'Pan-India Network',
      description: 'Experienced enforcement officers with brilliant network of associates across India'
    },
    {
      icon: CheckCircle,
      title: 'Complete Confidentiality',
      description: 'We maintain strict confidentiality and provide complainant presence in almost all raids'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-muted/50 via-background to-muted/30 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-foreground">Protecting Your </span>
                  <span className="bg-gradient-to-r from-primary/70 via-emerald-600 to-primary/70 bg-clip-text text-transparent">Innovation </span>
                  <span className="text-foreground">& Creativity</span>
                </h1>
                
                {/* Business Message */}
                <div className="mb-8 space-y-4">
                  <h2 className="text-lg md:text-xl font-bold text-primary">
                    Let&apos;s Talk Business! That Is Anti-Infringement Operations.
                  </h2>
                  
                  <div className="text-base md:text-lg leading-relaxed">
                    <p className="text-foreground text-justify">
                      &quot;You are here; that means someone out there is dealing in your duplicates, and you want to stop them. You have reached the right address.&quot; We super specialise in stopping such miscreants at all levels across India. We are the best at what we do, and our services are also very affordable. Our success rate is almost perfect because we do not take a job unless we are 100% confident that we can deliver.
                    </p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="text-base shadow-md hover:shadow-lg">
                    <Link href="/contact">
                      Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base border-2">
                    <Link href="/services">
                      Our Services
                    </Link>
                  </Button>
                </div>
                
                {/* LinkedIn Connection */}
                <div className="pt-6 border-t border-border">
                  <a 
                    href="https://www.linkedin.com/in/rishikulshresth/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#0077B5] hover:bg-[#006399] text-white rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="font-semibold text-base">Connect with Dr. Rishi Kulshresth</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border">
                  <Image
                    src="/images/other/article-1.jpeg"
                    alt="Intellectual Property Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">Pan-India</h3>
                <p className="text-primary-foreground/80">Complete coverage across all states</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">~100%</h3>
                <p className="text-primary-foreground/80">Success rate in enforcement</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">Expert</h3>
                <p className="text-primary-foreground/80">Specialized enforcement team</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">24/7</h3>
                <p className="text-primary-foreground/80">Round-the-clock support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IPR/brand protection and anti-counterfeiting solutions across India with experienced enforcement officers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border border-border bg-card hover:shadow-lg transition-all hover:border-secondary/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Link 
                      href={service.link} 
                      className="text-secondary hover:text-primary inline-flex items-center text-sm font-semibold transition-colors"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-2">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Integrity, pride, passion, and belief in what we do drive us relentlessly to protect your brand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="h-16 w-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary transition-all shadow-sm">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Brand from Counterfeits?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Contact us for a free consultation to discuss your brand protection needs. We are competent in filing anti-infringement FIRs, 
              sending Cease & Desist Notices, and filing civil/criminal cases anywhere in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base shadow-md hover:shadow-lg">
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
            
            {/* LinkedIn Connection */}
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <a 
                href="https://www.linkedin.com/in/rishikulshresth/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-[#0077B5] rounded-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 font-semibold text-lg"
              >
                <Linkedin className="h-7 w-7" />
                <span>Connect with Dr. Rishi Kulshresth on LinkedIn</span>
                <ArrowRight className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-primary text-primary-foreground py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Disclaimer</h2>
              <p className="text-lg md:text-xl text-primary-foreground/95 leading-relaxed">
                The Bar Council of India restricts any form of advertisements. This website contains general information for the convenience of our clients and does not purport to dispense legal advice and is not intended to solicit or advertise.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
