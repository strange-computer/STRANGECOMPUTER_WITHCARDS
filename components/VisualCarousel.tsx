'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1NjM3ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Digital Interfaces",
    description: "Crafting intuitive user experiences"
  },
  {
    image: "https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBhcnR3b3JrfGVufDF8fHx8MTc1NTYzOTE3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Creative Concepts",
    description: "Bringing ideas to life through design"
  },
  {
    image: "https://images.unsplash.com/photo-1709314189694-c709d3e3ac7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMHBhdHRlcm5zfGVufDF8fHx8MTc1NTYxNjIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Visual Identity",
    description: "Abstract patterns that tell stories"
  },
  {
    image: "https://images.unsplash.com/photo-1650843897691-03500f1f2b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1NjI5MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Architectural Beauty",
    description: "Structure meets aesthetic harmony"
  }
]

export function VisualCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }
  
  return (
    <div className="relative w-full h-full overflow-hidden bg-black rounded-lg">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-8 left-8 right-8 text-white">
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">{carouselItems[currentIndex].title}</h3>
          <p className="text-sm opacity-80">{carouselItems[currentIndex].description}</p>
        </div>
        
        {/* Dots Indicator */}
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
      
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-10 w-10 p-0"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-10 w-10 p-0"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}