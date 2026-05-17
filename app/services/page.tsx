import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Award, BookOpen, Briefcase, CheckCircle, FileText, Globe, Lightbulb, Scale, Search, Shield, Target, Users, Zap, Eye, TrendingUp, AlertCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

export default function Services() {
  const services = [
    {
      id: 'brand-protection',
      icon: Shield,
      title: 'Brand Protection',
      description: 'Comprehensive brand protection strategies to safeguard your intellectual property, trademarks, and brand identity against counterfeiting and infringement across India.',
      benefits: [
        'Holistic brand protection strategy development',
        'Trademark monitoring and enforcement',
        'Anti-counterfeiting operations across India',
        'Market surveillance for brand violations',
        'Cease & Desist notices to infringers',
        'Civil and criminal case filing',
        'Complete post-action follow-up',
        'Pan-India associate network for rapid response'
      ]
    },
    {
      id: 'corporate-consultancy',
      icon: Briefcase,
      title: 'Corporate Consultancy',
      description: 'Expert IPR and brand protection consultancy for corporates, helping businesses build robust IP strategies, manage risks, and protect their competitive advantages.',
      benefits: [
        'IPR portfolio assessment and strategy',
        'Risk identification and mitigation planning',
        'Regulatory compliance advisory',
        'Customized IP protection frameworks',
        'Due diligence for IP transactions',
        'Brand audit and gap analysis',
        'Guidance on anti-infringement best practices',
        'Ongoing advisory and support retainers'
      ]
    },
    {
      id: 'pan-india-raids',
      icon: Target,
      title: 'Pan India Anti-Infringement Raids',
      description: 'Coordinated anti-infringement raid operations conducted across all states and territories of India, with experienced enforcement officers and a strong associate network.',
      benefits: [
        'Coordinated raids across all Indian states',
        'Experienced enforcement officers leading operations',
        'Pre-raid market surveys and intelligence gathering',
        'Complete confidentiality – no local involvement',
        'FIR filing and complainant representation',
        'Evidence procurement and documentation',
        'Liaison with police and enforcement authorities',
        'Operations conducted only when certain of success'
      ]
    },
    {
      id: 'pan-india-civil-suits',
      icon: Scale,
      title: 'Pan India Anti-Infringement Civil Suits',
      description: 'Filing and management of civil infringement suits including injunctions, damages, and account of profits against counterfeiters and infringers anywhere in India.',
      benefits: [
        'Civil injunction case preparation and filing',
        'Applications for ex-parte ad interim injunctions',
        'Damages and account of profits claims',
        'Court representation through pan-India associates',
        'Evidence affidavit and pleadings drafting',
        'Case strategy and advisory from filing to conclusion',
        'Regular status updates and case management',
        'Enforcement of court orders against infringers'
      ]
    },
    {
      id: 'legal-metrology',
      icon: FileText,
      title: 'Legal Metrology Consultancy',
      description: 'Specialist consultancy on Legal Metrology laws and compliance, ensuring your products and packaging meet all statutory requirements and protecting against violations.',
      benefits: [
        'Legal Metrology Act compliance advisory',
        'Packaging and labelling requirement review',
        'Weights and measures regulatory guidance',
        'Inspection and raid support for metrology violations',
        'Response to legal metrology notices',
        'Training on Legal Metrology compliance',
        'Liaison with Legal Metrology authorities',
        'Documentation and record-keeping guidance'
      ]
    },
    {
      id: 'patent-infringement-investigations',
      icon: Search,
      title: 'Patent Infringement Ground Investigations',
      description: 'In-depth ground-level investigations to detect and document patent infringement, procure admissible evidence, and support legal proceedings in courts.',
      benefits: [
        'On-site investigation at infringer premises',
        'Systematic evidence procurement and documentation',
        'Chain of custody maintained for all evidence',
        'Expert witness testimony in civil and criminal courts',
        'Affidavit and deposition preparation',
        'Coordination with legal counsels during trial',
        'Attendance and representation in court hearings',
        'Detailed investigation reports for judicial use'
      ]
    },
    {
      id: 'corporate-team-training',
      icon: Users,
      title: 'Training & Sensitising Corporate Teams on Brand Protection / IPR',
      description: 'Specialized training programs to educate and sensitise corporate teams – sales, legal, operations – on brand protection strategies and IPR laws.',
      benefits: [
        'Customized training modules for corporate teams',
        'Brand protection awareness sessions',
        'IPR law fundamentals and best practices',
        'Identifying and reporting infringement',
        'In-house sales and legal team workshops',
        'Operational staff sensitisation programs',
        'Case study-based practical learning',
        'Post-training assessment and certification'
      ]
    },
    {
      id: 'ipr-lectures',
      icon: BookOpen,
      title: 'Lectures on IPR Law at All Levels',
      description: 'Expert lectures and seminars on Intellectual Property Rights law delivered to students, academia, government bodies, and industry at all levels.',
      benefits: [
        'Lectures at universities and law schools',
        'Seminars for industry associations',
        'Government and enforcement agency training',
        'Student workshops on IPR fundamentals',
        'Guest lectures and keynote addresses',
        'Webinars and online sessions',
        'Customized content for each audience level',
        'Practical insights from real case experience'
      ]
    },
    {
      id: 'legal-advisers-advocates',
      icon: Lightbulb,
      title: 'Legal Advisers and Advocates',
      description: 'A dedicated team of experienced legal advisers and advocates providing comprehensive legal counsel and representation on all matters of IPR and brand protection.',
      benefits: [
        'Expert legal advice on IPR matters',
        'Representation in civil and criminal courts',
        'Drafting of legal notices and pleadings',
        'Cease & Desist notice preparation',
        'Strategic legal counsel for brand protection',
        'Liaison with enforcement authorities',
        'Pan-India network of associate advocates',
        'Complete case management from filing to conclusion'
      ]
    }
  ]

  const industries = [
    { name: 'Consumer Products', icon: Users },
    { name: 'Pharmaceuticals & Healthcare', icon: Briefcase },
    { name: 'Electronics & Technology', icon: Zap },
    { name: 'Automotive & Parts', icon: Scale },
    { name: 'Fashion & Apparel', icon: Award },
    { name: 'FMCG & Retail', icon: Target },
    { name: 'Luxury Goods', icon: BookOpen },
    { name: 'Manufacturing', icon: Globe }
  ]

  const process = [
    {
      step: '1',
      title: 'Market Survey & Intelligence',
      description: 'Conduct thorough online and offline surveys to ascertain ground realities regarding counterfeit availability and distribution networks.'
    },
    {
      step: '2',
      title: 'Strategic Planning',
      description: 'Design the best plan of action with timelines. We advise on the most effective approach - Cease & Desist, civil injunction, or criminal proceedings.'
    },
    {
      step: '3',
      title: 'Enforcement Action',
      description: 'Execute coordinated raid operations with experienced officers. We ensure complete confidentiality and are present as complainants in almost all raids.'
    },
    {
      step: '4',
      title: 'Post-Raid Follow-up',
      description: 'Complete follow-up in Police Stations and Courts until case conclusion, strictly within legal confines with regular status updates.'
    },
    {
      step: '5',
      title: 'Continuous Monitoring',
      description: 'Maintain red list of infringers and conduct regular online/offline monitoring to ensure long-term brand protection and quick response to violations.'
    }
  ]

  const faqs = [
    {
      question: 'What makes your enforcement approach unique?',
      answer: 'We super-specialize in IPR enforcement with a master plan and strategy for each case. Our USP includes complete confidentiality, no local involvement in sensitive operations, and complainant presence in almost all raids. We never conduct raids unless we are certain of success.'
    },
    {
      question: 'How do you maintain confidentiality during operations?',
      answer: 'In criminal cases, we never inform or involve local state staff, dealers, or distributors regarding raids in their area. We maintain strict confidentiality protocols and only share information on a need-to-know basis to ensure operation success.'
    },
    {
      question: 'What is your success rate in anti-counterfeiting operations?',
      answer: 'Our success rate has been almost perfect, attributed to our Standard Operating Procedures (SOPs). We always move on solid, evidence-based footing combined with deep and updated legal knowledge of IPR laws.'
    },
    {
      question: 'Do you provide support after raid operations?',
      answer: 'Yes, we specialize in complete post-raid follow-up. We deal with enforcement authorities at all levels, strictly within legal confines, and follow up in Police Stations and Courts until the case\'s conclusion with regular updates to clients.'
    },
    {
      question: 'What is the red list and how does it help?',
      answer: 'Our red list includes details of all infringers we handle for our clients. We regularly monitor these individuals/entities both online and offline, even those who have only received Cease & Desist notices, ensuring continuous brand protection.'
    },
    {
      question: 'Can you handle lookalike brands?',
      answer: 'Yes, we specialize in stopping lookalike brands. Our monitoring systems identify potential infringers early, and we take appropriate legal action including sending Cease & Desist notices or filing civil/criminal cases as needed.'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Redesigned */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-4 text-sm px-4 py-1" variant="secondary">
                <Shield className="h-3 w-3 mr-2" />
                India's Leading IPR Enforcement Team
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Protect Your Brand with
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                  Expert IPR Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Super-specialized in enforcement, market intelligence, anti-counterfeiting solutions, 
                and investigations across India.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Pan-India Coverage</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-3">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">Expert</div>
                <div className="text-sm text-muted-foreground">Enforcement Team</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">High</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-3">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card to-secondary/5 shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Our Core Competencies</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        We are an IPR/brand protection firm with expertise in <span className="font-semibold text-primary">enforcement, market intelligence, anti-counterfeiting solutions, and specific investigations</span> across India. Our team comprises experienced enforcement officers and a brilliant network of pan-India associates.
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
                    <p className="text-2xl md:text-3xl font-bold">
                      WE SUPER SPECIALIZE IN IPR
                    </p>
                    <p className="text-sm mt-2 opacity-90">Integrity • Pride • Passion • Belief in what we do</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview - Redesigned */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IPR protection and enforcement solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  id={service.id} 
                  className="group scroll-mt-20 border-2 border-border bg-card shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {index + 1} of {services.length}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Key Benefits:
                      </h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                        {service.benefits.slice(0, 4).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      {service.benefits.length > 4 && (
                        <button className="text-sm text-primary hover:underline font-medium mt-2 flex items-center gap-1">
                          View all {service.benefits.length} benefits
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Capabilities */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Complete Confidentiality</h3>
                  <p className="text-sm text-muted-foreground">
                    No local involvement in sensitive operations - strict confidentiality protocols
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Pan-India Operations</h3>
                  <p className="text-sm text-muted-foreground">
                    Brilliant network of associates covering all states and territories
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Complete Follow-up</h3>
                  <p className="text-sm text-muted-foreground">
                    From raid to case conclusion - comprehensive post-action support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Served - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">
                <Globe className="h-3 w-3 mr-2" />
                Diverse Industry Coverage
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Industries We Protect
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized brand protection and anti-counterfeiting solutions across all major sectors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {industries.map((industry, index) => (
                <Card 
                  key={index} 
                  className="group relative text-center border-2 border-border bg-card hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
                  <CardHeader className="relative py-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <industry.icon className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Industry Stats */}
            <div className="mt-16 text-center">
              <Card className="inline-block border-2 border-primary/20 bg-card shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">8+</div>
                      <div className="text-sm text-muted-foreground">Major Industries</div>
                    </div>
                    <div className="hidden md:block h-12 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                      <div className="text-sm text-muted-foreground">Successful Operations</div>
                    </div>
                    <div className="hidden md:block h-12 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">All States</div>
                      <div className="text-sm text-muted-foreground">Pan-India Coverage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process - Redesigned */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">
                <Target className="h-3 w-3 mr-2" />
                Our Methodology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How We Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven, systematic approach to protecting your intellectual property with precision and expertise
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Desktop Timeline */}
              <div className="hidden md:block">
                <div className="grid grid-cols-5 gap-4 mb-12">
                  {process.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center font-bold text-3xl shadow-xl border-4 border-background z-10 relative">
                          {item.step}
                        </div>
                        {index < process.length - 1 && (
                          <div className="absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" style={{ width: 'calc(100% + 1rem)' }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {process.map((item, index) => (
                    <Card 
                      key={index} 
                      className="border-2 border-border hover:border-primary/50 bg-card shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                    >
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {index < process.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
                    )}
                    <div className="absolute left-0 top-0">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-xl border-4 border-background z-10">
                        {item.step}
                      </div>
                    </div>
                    <Card className="border-2 border-border bg-card shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3 text-primary">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Highlights */}
            <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Evidence-Based Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        We only conduct operations when certain of success, moving on solid, evidence-based footing
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Complete Transparency</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular updates and complete follow-up until case conclusion with detailed reporting
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">
                <BookOpen className="h-3 w-3 mr-2" />
                Knowledge Base
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our IPR enforcement and brand protection services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl px-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <AccordionTrigger className="text-left hover:no-underline py-6 group relative">
                    <div className="flex items-start gap-4 pr-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mt-0.5">
                        {index + 1}
                      </div>
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-12 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Additional Support */}
            <div className="mt-12 text-center">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-card shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our team of IPR experts is ready to help you protect your brand
                  </p>
                  <Button asChild size="lg" className="shadow-lg">
                    <Link href="/contact">
                      Contact Our Experts <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Redesigned */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
                <Shield className="h-3 w-3 mr-2" />
                Start Your Brand Protection Journey
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Ready to Protect Your Brand?
              </h2>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-4xl mx-auto leading-relaxed">
                Partner with India's leading IPR enforcement team for comprehensive brand protection
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We are competent in filing anti-infringement FIRs, sending Cease & Desist Notices, and filing relevant civil and criminal court cases anywhere in India.
              </p>
            </div>

            {/* CTA Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Free Consultation</h3>
                  <p className="text-sm text-white/80">
                    Discuss your brand protection needs with our experts
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Customized Solutions</h3>
                  <p className="text-sm text-white/80">
                    Tailored IPR enforcement strategies for your business
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Proven Track Record</h3>
                  <p className="text-sm text-white/80">
                    High success rate with evidence-based operations
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-semibold">
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
                <Link href="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">Pan-India</div>
                  <div className="text-sm text-white/80">Complete Coverage</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">Expert</div>
                  <div className="text-sm text-white/80">Enforcement Team</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-white/80">Support & Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-white/80">Confidential</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
