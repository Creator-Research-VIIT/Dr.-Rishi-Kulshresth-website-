'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Calendar, Clock, User, FileText, Award, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles')

  const articles = [
    {
      id: 1,
      title: 'Understanding Patent Protection in the Digital Age',
      excerpt: 'A comprehensive guide to navigating patent law for software, AI, and digital innovations in today\'s rapidly evolving technological landscape.',
      image: '/images/article/article-1_page-0001-1185x1536.jpg',
      author: 'Dr. Rishi Kulshresth',
      date: 'January 15, 2024',
      readTime: '8 min read',
      category: 'Patents',
      featured: true
    },
    {
      id: 2,
      title: 'Trademark Registration Process in India: A Complete Guide',
      excerpt: 'Learn about the step-by-step process of registering a trademark in India, including documentation, timelines, and best practices.',
      image: '/images/article/article-2_page-0001-1185x1536.jpg',
      author: 'Dr. Rishi Kulshresth',
      date: 'January 10, 2024',
      readTime: '6 min read',
      category: 'Trademarks',
      featured: false
    },
    {
      id: 3,
      title: 'IP Strategy for Startups: Building a Strong Foundation',
      excerpt: 'Essential intellectual property strategies every startup should implement from day one to protect their innovations and build value.',
      image: '/images/article/article-3_page-0001-1536x1008.jpg',
      author: 'Dr. Rishi Kulshresth',
      date: 'January 5, 2024',
      readTime: '7 min read',
      category: 'IP Strategy',
      featured: false
    },
    {
      id: 4,
      title: 'Copyright Protection for Software and Digital Content',
      excerpt: 'Understanding copyright law as it applies to software, websites, and digital content in the modern era.',
      image: '/images/article/article-4_page-0001-e1722076761742-1536x1016.jpg',
      author: 'Dr. Rishi Kulshresth',
      date: 'December 28, 2023',
      readTime: '5 min read',
      category: 'Copyright',
      featured: false
    },
    {
      id: 5,
      title: 'International Patent Filing: PCT vs Direct Filing',
      excerpt: 'Comparing the Patent Cooperation Treaty (PCT) route with direct national filings for international patent protection.',
      image: '/images/article/article-5_page-0001-1536x1008.jpg',
      author: 'Dr. Rishi Kulshresth',
      date: 'December 20, 2023',
      readTime: '9 min read',
      category: 'International IP',
      featured: false
    },
    {
      id: 6,
      title: 'Trade Secrets vs Patents: Which is Right for Your Innovation?',
      excerpt: 'A detailed comparison to help you decide whether to protect your innovation through patents or maintain it as a trade secret.',
      image: '/images/article/WhatsApp-Image-2025-12-16-at-10.09.51-PM-1.jpeg',
      author: 'Dr. Rishi Kulshresth',
      date: 'December 15, 2023',
      readTime: '6 min read',
      category: 'IP Strategy',
      featured: false
    }
  ]

  const categories = [
    { name: 'All Articles', icon: BookOpen },
    { name: 'Patents', icon: Award },
    { name: 'Trademarks', icon: FileText },
    { name: 'Copyright', icon: FileText },
    { name: 'IP Strategy', icon: Award },
    { name: 'International IP', icon: Award }
  ]

  const filteredArticles = selectedCategory === 'All Articles' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const featuredArticle = articles.find(article => article.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 text-base px-6 py-2">Knowledge Hub</Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                Articles & <span className="text-primary">Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Expert perspectives on intellectual property law, innovation strategy, and the latest developments in IP protection
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-y py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      selectedCategory === category.name
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'All Articles' && (
          <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <Badge variant="default" className="text-base px-4 py-2">
                  ⭐ Featured Article
                </Badge>
              </div>
              <Card className="overflow-hidden border-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="relative lg:col-span-2 h-80 lg:h-auto min-h-[500px] bg-muted overflow-hidden">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden"></div>
                  </div>
                  <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <Badge className="w-fit mb-6 text-base px-4 py-1.5">
                      {featuredArticle.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        <span className="font-medium">{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {selectedCategory === 'All Articles' ? 'All Articles' : selectedCategory}
              </h2>
              <p className="text-lg text-muted-foreground">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} available
              </p>
            </div>

            <div className="space-y-8">
              {filteredArticles.map((article, index) => (
                <Card key={article.id} className="overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className="relative lg:col-span-2 h-80 lg:h-auto min-h-[400px] bg-muted overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden"></div>
                      {article.featured && (
                        <Badge variant="default" className="absolute top-4 left-4 text-sm px-3 py-1.5">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-6 text-base px-4 py-1.5">
                        {article.category}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-5 w-5 text-primary" />
                          <span className="font-medium">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No articles found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">100+</div>
                <div className="text-lg opacity-90">Published Articles</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">50K+</div>
                <div className="text-lg opacity-90">Readers Monthly</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">15+</div>
                <div className="text-lg opacity-90">IP Topics Covered</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">20+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay Informed on IP Law
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for expert articles, case studies, and the latest IP law updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
              />
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-base">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
