import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Award, BookOpen, Briefcase, CheckCircle, GraduationCap, Heart, Lightbulb, Scale, Shield, Target, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  const qualifications = [
    {
      icon: GraduationCap,
      title: 'Ph.D. in Intellectual Property',
      description: 'Advanced research in patent law and innovation management'
    },
    {
      icon: Scale,
      title: 'Registered Patent Attorney',
      description: 'Licensed to practice before patent offices in India and internationally'
    },
    {
      icon: Award,
      title: 'Multiple Certifications',
      description: 'Specialized training in IP litigation, technology transfer, and IP valuation'
    },
    {
      icon: Briefcase,
      title: '15+ Years Experience',
      description: 'Extensive practice in all aspects of intellectual property law'
    }
  ]

  const expertise = [
    'Patent Prosecution & Litigation',
    'Trademark Registration & Enforcement',
    'Copyright Protection',
    'Trade Secret Management',
    'IP Portfolio Development',
    'Technology Transfer & Licensing',
    'IP Due Diligence',
    'International IP Strategy',
    'Innovation Management',
    'IP Commercialization',
    'Freedom to Operate Analysis',
    'IP Valuation & Audits'
  ]

  const achievements = [
    {
      number: '500+',
      title: 'Patents Filed',
      description: 'Successfully filed and prosecuted patents across diverse technologies'
    },
    {
      number: '300+',
      title: 'Clients Served',
      description: 'From startups to Fortune 500 companies'
    },
    {
      number: '50+',
      title: 'Publications',
      description: 'Research papers and articles on IP law and innovation'
    },
    {
      number: '100+',
      title: 'IP Litigations',
      description: 'Successful representation in IP disputes and enforcement actions'
    }
  ]

  const teamMembers = [
    {
      name: 'Mr. Manish Kulshrestha',
      role: 'General Manager',
      image: '/images/team/manish_kulshresth.jpeg'
    },
    {
      name: 'Mr. Subhash Chand',
      role: 'Advisor Operations',
      image: '/images/team/Subhash_chand.jpeg'
    },
    {
      name: 'Dr. Mayur Desai',
      role: 'General Manager, IT Support',
      image: '/images/team/Mayur_Desai.jpeg'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality IP services with meticulous attention to detail'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Upholding ethical standards and maintaining client confidentiality at all times'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing creative solutions and staying ahead of evolving IP landscapes'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our priority - we work tirelessly to protect and maximize your IP value'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 md:py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                You Are Here Because Someone May Be{' '}
                <span className="text-primary">Dealing in Your Duplicates</span>
                {' '}— And You Want to Stop Them.
              </h1>
              
              <p className="text-xl md:text-2xl font-bold text-primary mb-6">
                You&apos;ve come to the right place.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl mx-auto">
                We specialize in stopping such miscreants across India. We take up matters only when we are{' '}
                <span className="font-semibold text-foreground">100% confident of delivering results</span>, which is why our success rate is{' '}
                <span className="font-semibold text-foreground">exceptionally high</span>. Our services are also{' '}
                <span className="font-semibold text-foreground">cost-effective</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-8 md:py-12 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src="/rishi_kulshresth.jpg"
                  alt="Dr. Rishi Kulshresth"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About Dr. Rishi Kulshresth
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Dr. Rishi Kulshresth brings over 25+ years of experience in IPR and Brand Protection. He specializes in filing anti-infringement criminal FIRs and civil suits.
                  </p>
                  <p>
                    Before founding his law firm, he held senior legal and IPR leadership roles, including Legal IPR Head at Finolex Group, overseeing IPR matters for Finolex Cables Ltd and Finolex Industries Ltd. He has also served in senior legal positions at Pinkerton Consulting & Investigations, Hawkins Cookers Ltd, and Suzlon Energy Ltd.
                  </p>
                  <p>
                    He holds a Doctorate in IPR Law along with an LL.M., and is a practising IPR lawyer at the High Court of Delhi. He has drafted brand protection SOPs, compliance manuals, and enforcement strategies for companies across industries, and has extensive experience working with courts and police authorities in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 md:py-28 section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qualifications & Credentials
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Academic excellence combined with professional expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualifications.map((qual, index) => (
                <Card key={index} className="text-center border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-muted border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                      <qual.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{qual.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{qual.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IP services across multiple domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Achievements
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Proven track record of excellence in intellectual property law
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-3">{achievement.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-primary-foreground/90">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Team Section */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Management Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to protecting your intellectual property
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative h-80 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                  </div>
                  <CardHeader className="transition-colors duration-300 group-hover:bg-secondary/10">
                    <CardTitle className="transition-colors duration-300 group-hover:text-secondary">{member.name}</CardTitle>
                    <CardDescription className="text-secondary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 md:py-28 section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="h-16 w-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary transition-all shadow-sm">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation to discuss how we can help protect and maximize the value of your intellectual property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-md hover:shadow-lg">
                <Link href="/contact">
                  Contact Us Today
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2">
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
