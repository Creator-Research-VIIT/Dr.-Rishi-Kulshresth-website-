import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Eye, Play, ThumbsUp, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Videos() {
  // YouTube video links from the file
  const youtubeVideos = [
    {
      title: 'Finolex Allahabad Raid',
      description: 'Comprehensive coverage of Finolex anti-counterfeiting raid operation in Allahabad demonstrating successful IPR enforcement strategies and legal action against trademark infringement.',
      youtubeId: 'x6Tn0jAt7UY',
      startTime: 7,
      category: 'IPR Enforcement',
      thumbnail: `https://img.youtube.com/vi/x6Tn0jAt7UY/maxresdefault.jpg`
    },
    {
      title: 'Duplicate Scotch Accused',
      description: 'Behind the scenes investigation and enforcement action against duplicate scotch counterfeiting operation, showcasing evidence collection and legal proceedings against counterfeit liquor manufacturers.',
      youtubeId: '0fYnNa6whxk',
      startTime: 2,
      category: 'Anti-Counterfeiting',
      thumbnail: `https://img.youtube.com/vi/0fYnNa6whxk/maxresdefault.jpg`
    },
    {
      title: 'Mastering Law with Dr. Rishi Kulshresth',
      description: 'IPR, Consumer Rights & Moot Court Wisdom Revealed - Expert insights and guidance on intellectual property law, consumer protection rights, and legal education from renowned IPR specialist Dr. Rishi Kulshresth.',
      youtubeId: 'ctsdGJ98U7c',
      startTime: 60,
      category: 'Legal Education',
      thumbnail: `https://img.youtube.com/vi/ctsdGJ98U7c/maxresdefault.jpg`
    }
  ]

  const categories = [
    'All Videos',
    'IPR Enforcement',
    'Anti-Counterfeiting',
    'Legal Education',
    'Legal Proceedings'
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 md:py-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                IPR Enforcement
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                  Video Library
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Watch expert videos on brand protection, anti-counterfeiting operations, and IPR enforcement strategies across India
              </p>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {youtubeVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden border-2 border-border hover:border-primary/50 transition-all shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Video Player */}
                    <div className="relative bg-black aspect-video lg:aspect-auto lg:min-h-[400px]">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?start=${video.startTime}&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Video Info */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-card to-muted/20">
                      <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                        {video.category}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {video.title}
                      </h3>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                        {video.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="default" size="lg">
                          <a 
                            href={`https://www.youtube.com/watch?v=${video.youtubeId}&t=${video.startTime}s`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Watch on YouTube <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="lg">
                          <ThumbsUp className="mr-2 h-4 w-4" />
                          Like Video
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 section-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Personalized IP Guidance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While our videos provide valuable information, every IP situation is unique. Schedule a consultation for personalized advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">
                  Our Services
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
