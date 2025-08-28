'use client'

import { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1ODEyNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Mobile Experience",
    category: "App Design"
  },
  {
    image: "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NTc4OTgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Web Platform",
    category: "Website Design"
  },
  {
    image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTU3NzMwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Brand Identity",
    category: "Visual Design"
  }
]

const recentProjects = [
  {
    icon: "☕",
    title: "Buy Us A LightHouse",
    subtitle: "Edgar Alan Poe had a lighthouse",
    badge: "Product Hunt"
  },
  {
    icon: "🔄",
    title: "Switchboard",
    subtitle: "Remote Work Product of the Year", 
    badge: "Product Hunt"
  }
]

const services = [
  "Web design", "Logos", "Slide decks",
  "Branding", "Social media", "UI/UX design", 
  "Webflow development", "Mobile apps", "Print design",
  "Email", "Display ads", "Icons",
  "Brand guides", "+ more"
]

export function PortfolioShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  return (
    <section className="px-8 lg:px-16 py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Card - Portfolio & Recent Work */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-lg border border-border/50">
              
              {/* Portfolio Carousel */}
              <div className="relative mb-10">
                <div className="flex gap-4 overflow-hidden">
                  {portfolioItems.map((item, index) => (
                    <div
                      key={index}
                      className={`relative rounded-2xl overflow-hidden bg-muted transition-all duration-500 ${
                        index === currentIndex ? 'flex-[2]' : 'flex-1 opacity-60'
                      }`}
                      style={{ minHeight: '200px' }}
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {index === currentIndex && (
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-xs opacity-80 mb-1">{item.category}</p>
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Carousel Controls */}
                <div className="flex justify-between items-center mt-6">
                  <div className="flex gap-2">
                    {portfolioItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={goToPrevious}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={goToNext}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xl">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{project.subtitle}</p>
                      <div className="inline-flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                        <span className="text-xs text-muted-foreground">{project.badge}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Work Section */}
              <div className="pt-6 border-t border-border/50">
                <h3 className="text-xl font-medium text-foreground mb-2">Recent work</h3>
                <p className="text-muted-foreground mb-6">
                  We're talking "You Should Get a Real Job" good.
                </p>
                <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90">
                  See recent work
                </Button>
              </div>
            </div>
          </div>

          {/* Right Card - Services Grid */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-lg border border-border/50 h-full">
              
              {/* Decorative Elements */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {services.slice(0, 12).map((service, index) => (
                  <div
                    key={index}
                    className="bg-muted/50 rounded-lg p-3 text-center hover:bg-muted transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-xs text-muted-foreground leading-tight block">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* More Services */}
              <div className="text-center mb-8">
                <div className="bg-muted/50 rounded-lg p-3 inline-block">
                  <span className="text-xs text-muted-foreground">+ more</span>
                </div>
              </div>

              {/* Section Title */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Apps, websites, logos & more
                </h3>
                <p className="text-sm text-muted-foreground">
                  All the things you need under one roof.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}