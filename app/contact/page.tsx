'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: data.message || 'We will get back to you within 24 hours.',
          variant: 'default',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to send message. Please try again.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please check your connection and try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Dr. Rishi Kulshresth & Associates',
        'B-123, Intellectual Property Tower',
        'Connaught Place, New Delhi - 110001',
        'India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 11 4567 8900',
        '+91 98765 43210 (Mobile)',
        'Toll Free: 1800 123 4567'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@drrishikulshresth.com',
        'patents@drrishikulshresth.com',
        'trademarks@drrishikulshresth.com'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  const locations = [
    {
      city: 'New Delhi',
      type: 'Head Office',
      address: 'B-123, IP Tower, Connaught Place',
      phone: '+91 11 4567 8900'
    },
    {
      city: 'Mumbai',
      type: 'Branch Office',
      address: 'A-456, Business Hub, Nariman Point',
      phone: '+91 22 2345 6789'
    },
    {
      city: 'Bangalore',
      type: 'Branch Office',
      address: 'C-789, Tech Park, Electronic City',
      phone: '+91 80 3456 7890'
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
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Have questions about intellectual property protection? We're here to help. 
                Contact us today for a free initial consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border border-border bg-card shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          required
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your IP needs or questions..."
                          rows={6}
                          required
                          className="border-border"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full shadow-md hover:shadow-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="mr-2">Sending...</span>
                            <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Contact Information
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Reach out to us through any of the following channels. We're here to assist you with all your intellectual property needs.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                              <info.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2 text-foreground">{info.title}</h3>
                              <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-muted-foreground">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 md:py-28 section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Locations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit us at any of our office locations across India
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="text-center border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-muted border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{location.city}</CardTitle>
                    <CardDescription className="text-secondary font-semibold">
                      {location.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{location.address}</p>
                      <div className="flex items-center justify-center gap-2 text-sm font-medium text-secondary pt-2">
                        <Phone className="h-4 w-4" />
                        <span>{location.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Us on Map
              </h2>
              <p className="text-lg text-muted-foreground">
                Visit our head office in New Delhi
              </p>
            </div>

            <Card className="overflow-hidden border border-border shadow-md">
              <div className="relative h-96 w-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map will be embedded here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    B-123, IP Tower, Connaught Place, New Delhi - 110001
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Check out our frequently asked questions or schedule a free consultation to discuss your IP needs in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base shadow-md hover:shadow-lg">
                <a href="/services#faqs">
                  View FAQs
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="/about">
                  About Our Team
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
