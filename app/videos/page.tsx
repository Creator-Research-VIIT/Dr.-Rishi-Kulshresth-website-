import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Eye, Play, ThumbsUp, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Videos() {
  // Instagram reels
  const instagramReels = [
    {
      title: 'IPR Enforcement Reel',
      description: 'A quick look at IPR enforcement and brand protection operations by Dr. Rishi Kulshresth — showcasing real-world anti-counterfeiting action across India.',
      reelId: 'DUKl7TCgZ6U',
      category: 'IPR Enforcement',
    }
  ]

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
              {/* Instagram Reels */}
              {instagramReels.map((reel, index) => (
                <Card key={`ig-${index}`} className="overflow-hidden border-2 border-border hover:border-pink-400/60 transition-all shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Instagram Reel Preview - Clickable Banner */}
                    <a
                      href={`https://www.instagram.com/reel/${reel.reelId}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center lg:min-h-[420px] group cursor-pointer"
                      style={{ minHeight: '420px', background: 'linear-gradient(135deg, #405DE6 0%, #5851DB 15%, #833AB4 35%, #C13584 55%, #E1306C 75%, #FD1D1D 90%, #F56040 100%)' }}
                    >
                      {/* Animated Gradient Overlay */}
                      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0%, transparent 70%)' }}
                      />

                      {/* Instagram Logo Watermark */}
                      <div className="absolute top-5 left-5 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7 drop-shadow-lg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="text-white font-semibold text-sm drop-shadow-lg tracking-wide">Instagram Reel</span>
                      </div>

                      {/* Reel Icon Badge */}
                      <div className="absolute top-5 right-5">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 border border-white/30">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"/>
                          </svg>
                          <span className="text-white text-xs font-medium">@rishikulshresth</span>
                        </div>
                      </div>

                      {/* Central Play Button */}
                      <div className="relative z-10 flex flex-col items-center gap-5">
                        <div className="w-24 h-24 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white/50 group-hover:scale-110 group-hover:bg-white/35 transition-all duration-300">
                          <Play className="h-10 w-10 text-white fill-white ml-1" />
                        </div>
                        <span className="text-white font-bold text-lg drop-shadow-lg tracking-wide group-hover:underline">
                          Watch Reel on Instagram
                        </span>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <ArrowRight className="h-4 w-4" />
                          <span>Opens in Instagram</span>
                        </div>
                      </div>

                      {/* Bottom film strip decoration */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center px-3 gap-1 bg-black/20 backdrop-blur-sm">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div key={i} className="flex-1 h-6 rounded-sm bg-white/10 border border-white/20" />
                        ))}
                      </div>
                    </a>

                    {/* Reel Info */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-card to-muted/20">
                      <Badge className="w-fit mb-4 bg-pink-500/10 text-pink-600 border-pink-300/30">
                        {reel.category}
                      </Badge>
                      <div className="flex items-center gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-pink-500">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="text-sm text-muted-foreground font-medium">Instagram Reel</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {reel.title}
                      </h3>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                        {reel.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
                          <a 
                            href={`https://www.instagram.com/reel/${reel.reelId}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Watch on Instagram <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* YouTube Videos */}
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
