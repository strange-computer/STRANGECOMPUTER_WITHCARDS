'use client'

import { useState, useEffect, useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1ODEyNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    video: "/images/jebusx5_Website_layout_aesthetically_shaped_beautiful_card_la_b9540920-dd7a-4827-a86a-8c1702405158_1.mp4",
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
    video: "/images/jebusx5_gorgeous_modern_graphic_design_--ar_21_--motion_low_-_c19a4c16-fbf2-4e36-993b-d424143f8b2a_3.mp4",
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
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.2 })
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  return (
    <section ref={sectionRef} className="px-8 lg:px-16 py-16 lg:py-24 bg-muted/30">
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
                      {('video' in item && item.video) ? (
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source src={item.video as string} type="video/mp4" />
                        </video>
                      ) : (
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
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
              <div className="grid grid-cols-3 gap-3 mb-8 perspective-1000">
                {services.slice(0, 12).map((service, index) => {
                  // Cohesive color palette matching the site's orange/amber and violet/purple theme
                  const gradients = [
                    // Orange/Amber family (matching pricing cards)
                    'bg-gradient-to-br from-orange-500/90 via-amber-400/80 to-yellow-400/70',
                    'bg-gradient-to-br from-amber-500/90 via-orange-400/80 to-red-400/70',
                    'bg-gradient-to-br from-yellow-500/90 via-amber-400/80 to-orange-400/70',
                    
                    // Violet/Purple family (matching premium cards)
                    'bg-gradient-to-br from-violet-500/90 via-purple-400/80 to-fuchsia-400/70',
                    'bg-gradient-to-br from-purple-500/90 via-violet-400/80 to-indigo-400/70',
                    'bg-gradient-to-br from-fuchsia-500/90 via-purple-400/80 to-violet-400/70',
                    
                    // Sophisticated complementary colors
                    'bg-gradient-to-br from-slate-500/90 via-gray-400/80 to-zinc-400/70',
                    'bg-gradient-to-br from-indigo-500/90 via-blue-400/80 to-cyan-400/70',
                    'bg-gradient-to-br from-teal-500/90 via-emerald-400/80 to-green-400/70',
                    
                    // Additional harmonious variations
                    'bg-gradient-to-br from-rose-500/90 via-pink-400/80 to-orange-400/70',
                    'bg-gradient-to-br from-cyan-500/90 via-blue-400/80 to-indigo-400/70',
                    'bg-gradient-to-br from-emerald-500/90 via-teal-400/80 to-cyan-400/70',
                  ];
                  
                  const shadowColors = [
                    'shadow-orange-400/40 hover:shadow-orange-500/60',
                    'shadow-amber-400/40 hover:shadow-amber-500/60',
                    'shadow-yellow-400/40 hover:shadow-yellow-500/60',
                    'shadow-violet-400/40 hover:shadow-violet-500/60',
                    'shadow-purple-400/40 hover:shadow-purple-500/60',
                    'shadow-fuchsia-400/40 hover:shadow-fuchsia-500/60',
                    'shadow-slate-400/40 hover:shadow-slate-500/60',
                    'shadow-indigo-400/40 hover:shadow-indigo-500/60',
                    'shadow-teal-400/40 hover:shadow-teal-500/60',
                    'shadow-rose-400/40 hover:shadow-rose-500/60',
                    'shadow-cyan-400/40 hover:shadow-cyan-500/60',
                    'shadow-emerald-400/40 hover:shadow-emerald-500/60',
                  ];
                  
                  // Calculate staggered animation delay
                  const animationDelay = index * 80; // 80ms delay between each bubble
                  
                  return (
                    <div
                      key={index}
                      className={`${gradients[index % gradients.length]} ${shadowColors[index % shadowColors.length]} rounded-2xl p-3 text-center cursor-pointer group relative overflow-hidden border border-white/30 hover:border-white/50 transform-gpu transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1 
                        ${isVisible 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-8 scale-95'
                        }`}
                      style={{
                        boxShadow: `
                          0 4px 8px rgba(0,0,0,0.12),
                          0 8px 16px rgba(0,0,0,0.08),
                          0 16px 32px rgba(0,0,0,0.04),
                          inset 0 1px 0 rgba(255,255,255,0.2)
                        `,
                        transitionDelay: isVisible ? `${animationDelay}ms` : '0ms',
                        transitionDuration: '600ms',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {/* Base 3D shadow layer */}
                      <div className="absolute inset-0 bg-black/5 rounded-2xl translate-y-1 -z-10 group-hover:translate-y-2 group-hover:scale-95 transition-all duration-500"></div>
                      
                      {/* Enhanced gradient overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 rounded-2xl"></div>
                      
                      {/* Top highlight for 3D effect */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 via-white/15 to-transparent rounded-t-2xl"></div>
                      
                      {/* Bottom shadow for depth */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/15 via-black/5 to-transparent rounded-b-2xl"></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform-gpu"></div>
                      
                      {/* Enhanced inner glow */}
                      <div className="absolute inset-1 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                      
                      {/* Side lighting effect */}
                      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
                      
                      <span className="text-xs text-white font-medium leading-tight block relative z-20 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                        {service}
                      </span>
                      
                      {/* Enhanced hover glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"></div>
                    </div>
                  );
                })}
              </div>

              {/* More Services */}
              <div className="text-center mb-8">
                <div 
                  className={`bg-gradient-to-br from-slate-600/90 via-gray-500/80 to-zinc-500/70 shadow-slate-400/40 hover:shadow-slate-500/60 rounded-2xl p-3 inline-block cursor-pointer group relative overflow-hidden border border-white/30 hover:border-white/50 transform-gpu transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1
                    ${isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                    }`}
                  style={{
                    boxShadow: `
                      0 4px 8px rgba(0,0,0,0.12),
                      0 8px 16px rgba(0,0,0,0.08),
                      0 16px 32px rgba(0,0,0,0.04),
                      inset 0 1px 0 rgba(255,255,255,0.2)
                    `,
                    transitionDelay: isVisible ? '960ms' : '0ms', // Delay after all other bubbles (12 * 80ms)
                    transitionDuration: '600ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Base 3D shadow layer */}
                  <div className="absolute inset-0 bg-black/5 rounded-2xl translate-y-1 -z-10 group-hover:translate-y-2 group-hover:scale-95 transition-all duration-500"></div>
                  
                  {/* Enhanced gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 rounded-2xl"></div>
                  
                  {/* Top highlight for 3D effect */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 via-white/15 to-transparent rounded-t-2xl"></div>
                  
                  {/* Bottom shadow for depth */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/15 via-black/5 to-transparent rounded-b-2xl"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform-gpu"></div>
                  
                  {/* Enhanced inner glow */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Side lighting effect */}
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                  <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
                  
                  <span className="text-xs text-white font-medium relative z-20 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">+ more</span>
                  
                  {/* Enhanced hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"></div>
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