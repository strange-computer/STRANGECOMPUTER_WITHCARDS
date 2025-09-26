'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'

type ImageSlide = {
  kind: 'image'
  image: string
  title: string
  description: string
}

type VideoSlide = {
  kind: 'video'
  src: string
  title?: string
  description?: string
}

type IframeSlide = {
  kind: 'iframe'
  src: string
  title?: string
  description?: string
}

type SlideItem = ImageSlide | IframeSlide | VideoSlide

const carouselItems: SlideItem[] = [
  {
    kind: 'video',
    src: "/images/FLOWERcedarzhan__--ar_12_--video_1_c1e847da-9705-4e30-991f-e1d8e7d84df5_0.mp4",
    title: "Flower Video",
    description: ""
  },
  {
    kind: 'video',
    src: "/images/jebusx5_tortoise_walking_national-geographic_style_shot_macro_2ed990bd-c872-47d1-afa0-a46c6e72b4cf_0.mp4",
    title: "Digital Interfaces",
    description: "Crafting intuitive user experiences"
  },
  {
    kind: 'video',
    src: "/images/xueyan__Exploding_oranges_and_lemons_vibrant_juice_splashes_l_614ddc47-e54b-4c0a-bfaf-2b3ce3e31c37_0.mp4",
    title: "Creative Concepts",
    description: "Bringing ideas to life through design"
  },
  {
    kind: 'iframe',
    src: "/demos/moonsol_port_scroll/index.html?autoplay=1",
    title: "MOONSOL Autoscroll",
    description: "Embedded live demo"
  },
  {
    kind: 'iframe',
    src: "/demos/cameronhinkel_realtor_scroll/index.html?autoplay=1",
    title: "Realtor Scroll Demo",
    description: "Embedded live demo"
  },
  {
    kind: 'image',
    image: "https://images.unsplash.com/photo-1709314189694-c709d3e3ac7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMHBhdHRlcm5zfGVufDF8fHx8MTc1NTYxNjIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Visual Identity",
    description: "Abstract patterns that tell stories"
  },
  {
    kind: 'image',
    image: "https://images.unsplash.com/photo-1650843897691-03500f1f2b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1NjI5MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Architectural Beauty",
    description: "Structure meets aesthetic harmony"
  }
]

export function VisualCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentItem = carouselItems[currentIndex]
  const [iframeNonce, setIframeNonce] = useState(0)
  const [videoNonce, setVideoNonce] = useState(0)
  

  // Auto-advance only for image slides so iframe demos can run undisturbed
  useEffect(() => {
    if (currentItem.kind !== 'image') return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [currentItem])

  // When entering an iframe slide, refresh it so its script starts when visible
  useEffect(() => {
    if (currentItem.kind === 'iframe') {
      setIframeNonce((n) => n + 1)
    }
    if (currentItem.kind === 'video') {
      setVideoNonce((n) => n + 1)
    }
    
  }, [currentIndex])

  

  // Listen for completion events from iframe to advance
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const data: any = e.data
      if (!data || typeof data !== 'object') return
      if (data.type === 'moonsol:complete' || data.type === 'realtor:complete') {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }
  
  

  return (
    <div className="relative w-full h-full overflow-hidden bg-black rounded-lg">
      {/* Slides */}
      <div className="relative w-full h-full">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {index === currentIndex && (
              item.kind === 'image' ? (
                <>
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </>
              ) : item.kind === 'video' ? (
                <video
                  key={`video-${videoNonce}`}
                  className="w-full h-full object-cover bg-black"
                  autoPlay
                  muted
                  playsInline
                  controls={false}
                  preload="auto"
                  onEnded={goToNext}
                >
                  <source src={`${item.src}${item.src.includes('?') ? '&' : '?'}ts=${videoNonce}`} type="video/mp4" />
                </video>
              ) : (
                <iframe
                  key={`iframe-${iframeNonce}`}
                  src={`${item.src}${item.src.includes('?') ? '&' : '?'}ts=${iframeNonce}`}
                  title={item.title || 'Embedded demo'}
                  className="w-full h-full border-0 pointer-events-auto bg-black"
                  allow="autoplay; fullscreen"
                  scrolling="yes"
                />
              )
            )}
          </div>
        ))}
      </div>

      {/* Content Overlay (only for image slides) */}
      {currentItem.kind === 'image' && (
        <div className="absolute bottom-8 left-8 right-8 text-white z-20">
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">{currentItem.title}</h3>
            <p className="text-sm opacity-80">{currentItem.description}</p>
          </div>
          <div className="flex gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-10 w-10 p-0 z-30"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-10 w-10 p-0 z-30"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}