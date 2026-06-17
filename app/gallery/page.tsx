import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Calendar, Film, Megaphone, Shield, Users2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Gallery() {
  // Events
  const events = [
    {
      image: '/images/event/con1.jpeg',
      title: 'IP Law Conference',
      description: 'Annual conference on intellectual property rights and enforcement'
    }
  ]

  // Special Event - Goa Police
  const goaPoliceEvent = [
    {
      image: '/images/Event with goa police/1.jpg',
      title: 'Dr. Rishi Kulshresth delivering Lecture to over 100 Senior Police officers of Goa Police',
      description: 'Dr. Rishi Kulshresth addressing senior police officers on intellectual property enforcement and anti-counterfeiting strategies'
    },
    {
      image: '/images/Event with goa police/2.jpg',
      title: 'Dr. Rishi Kulshresth sharing stage with the DGP - Goa Police Sh. Alok Kumar, IG Sh. Ajay Sharma, IG Goa Police, Sh. Deep Chand Ji, Sp. Commissioner of Delhi police, Sh. Ashish Paul, VP, ITC Ltd, Sh. Santosh Desai SP, Goa Police',
      description: 'Distinguished panel featuring top law enforcement officials and industry leaders discussing collaborative approaches to IP protection'
    },
    {
      image: '/images/Event with goa police/3.jpg',
      title: 'Group Photograph with DGP, Goa Police',
      description: 'Commemorative group photograph with the Director General of Police, Goa and senior officials'
    },
    {
      image: '/images/Event with goa police/4.jpg',
      title: 'Group photograph, Goa Police GRP, Panjim, Goa',
      description: 'Group photograph with Goa Police GRP team at Panjim, Goa'
    }
  ]

  // Punjab Police Event - Phillaur Police Academy
  const punjabPoliceEvent = [
    {
      image: '/images/Punjab Police Event/phillaur1.jpg',
      title: 'Dr. Rishi Kulshresth honoured with a memento at Phillaur Police Academy',
      description: 'Dr. Rishi Kulshresth receiving a memento from senior Punjab Police officers at Phillaur Police Academy, Punjab'
    }
  ]

  // Lectures
  const lectures = [
    {
      image: '/images/lecture/lect1.jpeg',
      title: 'IP Enforcement Strategies',
      description: 'Expert lecture on modern IP enforcement techniques'
    },
    {
      image: '/images/lecture/lect2.jpeg',
      title: 'Brand Protection Workshop',
      description: 'Workshop on protecting brands from counterfeiting'
    },
    {
      image: '/images/lecture/lect3.jpeg',
      title: 'Anti-Counterfeiting Seminar',
      description: 'Seminar on combating counterfeit products'
    },
    {
      image: '/images/lecture/lect4.jpeg',
      title: 'Legal Framework Discussion',
      description: 'Discussion on IP legal framework and best practices'
    }
  ]

  // Media Coverage
  const media = [
    {
      image: '/images/media/media.jpg',
      title: 'Media Coverage',
      description: 'Press coverage of successful IP enforcement actions'
    },
    {
      image: '/images/media/media_chandrapur.jpg',
      title: 'Chandrapur Media',
      description: 'Media highlights from Chandrapur operations'
    },
    {
      image: '/images/media/media_ranchi.jpg',
      title: 'Ranchi Media',
      description: 'Press coverage of Ranchi enforcement activities'
    }
  ]

  // Raids
  const raids = [
    {
      image: '/images/raid/raid_banglore.jpg',
      title: 'Bangalore Raid',
      description: 'Successful anti-counterfeiting raid in Bangalore'
    },
    {
      image: '/images/raid/raid_Cuttack.jpg',
      title: 'Cuttack Raid',
      description: 'IP enforcement action in Cuttack'
    },
    {
      image: '/images/raid/raid_Gorakhpur.jpeg',
      title: 'Gorakhpur Raid',
      description: 'Trademark protection raid in Gorakhpur'
    },
    {
      image: '/images/raid/raid_hubli.jpg',
      title: 'Hubli Raid',
      description: 'Anti-infringement operation in Hubli'
    },
    {
      image: '/images/raid/raid_indore.jpeg',
      title: 'Indore Raid',
      description: 'Brand protection raid in Indore'
    },
    {
      image: '/images/raid/raid_rajasthan.jpg',
      title: 'Rajasthan Raid',
      description: 'Counterfeit crackdown in Rajasthan'
    },
    {
      image: '/images/raid/raid_south.jpg',
      title: 'South India Raid',
      description: 'IP enforcement in South India region'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-muted/50 via-background to-muted/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Gallery
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Visual documentation of our IP enforcement activities, educational events, media coverage, and successful anti-counterfeiting operations across India
              </p>
            </div>
          </div>
        </section>

        {/* Highlighted Event - Punjab Police Phillaur Academy */}
        <section className="py-20 md:py-28" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Highlighted Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase" style={{background: 'linear-gradient(90deg, #f59e0b, #d97706)', color: '#fff', boxShadow: '0 0 24px rgba(245,158,11,0.5)'}}>
                <span>★</span> Highlighted Event <span>★</span>
              </span>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0" style={{background: 'linear-gradient(135deg, #f59e0b, #b45309)'}}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Guiding Senior Punjab Police Officers</h2>
                <p className="mt-1" style={{color: '#fbbf24'}}>Phillaur Police Academy, Punjab — June 12, 2026</p>
              </div>
            </div>

            {/* Description Card */}
            <div className="rounded-2xl p-6 md:p-8 mb-10" style={{background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(245,158,11,0.35)', backdropFilter: 'blur(8px)'}}>
              <p className="text-lg md:text-xl leading-relaxed" style={{color: '#e2e8f0'}}>
                <span className="font-bold" style={{color: '#fbbf24'}}>Dr. Rishi Kulshresth</span> was honoured with an invitation to guide Senior Punjab Police officers. He shared the dias with:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Spl. DGP, Punjab – Shri Amardeep Singh Rai (IPS)',
                  'Shri Ankurjeet Singh (IAS), Additional Home Secretary, Punjab State',
                  'Shri Mohammed Tyaab (IAS), Secretary, Jail, Punjab',
                  'Spl. Police Commissioner, Delhi Police – Shri Deep Chand Ji (IPS)',
                  'Shri Ashish Paul, VP, ITC'
                ].map((dignitary, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-2 w-2 rounded-full" style={{background: '#f59e0b', marginTop: '0.6rem'}}></span>
                    <span style={{color: '#cbd5e1'}}>{dignitary}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-semibold" style={{color: '#fbbf24'}}>📅 Event Date: June 12, 2026 &nbsp;|&nbsp; 📍 Phillaur Police Academy, Punjab</p>
            </div>

            {/* Photos */}
            <div className="grid md:grid-cols-1 gap-8">
              {punjabPoliceEvent.map((item, index) => (
                <div key={index} className="rounded-2xl overflow-hidden group" style={{border: '2px solid rgba(245,158,11,0.4)', boxShadow: '0 8px 40px rgba(245,158,11,0.18)'}}>
                  <div className="md:flex">
                    <div className="relative md:w-1/2 overflow-hidden" style={{height: '420px', background: '#0f172a'}}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center" style={{background: 'rgba(255,255,255,0.04)'}}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{color: '#f59e0b'}}>Punjab Police Academy Event</p>
                      <h3 className="text-xl md:text-2xl font-bold mb-4" style={{color: '#f1f5f9'}}>{item.title}</h3>
                      <p className="text-base leading-relaxed" style={{color: '#94a3b8'}}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Events</h2>
                <p className="text-muted-foreground mt-1">Conferences and professional gatherings</p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              {events.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="md:flex">
                    <div className="relative h-80 md:h-[500px] md:w-1/2 overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl md:text-3xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Event - Goa Police Section */}
        <section className="py-20 md:py-28 section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Special Event with Goa Police</h2>
                <p className="text-muted-foreground mt-1">Collaborative training session with senior police officers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {goaPoliceEvent.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lectures Section */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                <Users2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Lectures & Workshops</h2>
                <p className="text-muted-foreground mt-1">Educational sessions and training programs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {lectures.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Media Coverage</h2>
                <p className="text-muted-foreground mt-1">Press highlights and news coverage</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {media.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Raids Section */}
        <section className="py-20 md:py-28 section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Anti-Counterfeiting Raids</h2>
                <p className="text-muted-foreground mt-1">Successful IP enforcement operations across India</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {raids.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
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
