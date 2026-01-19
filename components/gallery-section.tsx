"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type FilterType = "all" | "competitions" | "workshops" | "performances"

interface GalleryItem {
  id: number
  src: string
  title: string
  description: string
  year: string
  event: string
  category: FilterType
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    title: "National Championship 2024",
    description: "Performing Sirsasana (headstand) during the final round of National Yoga Championship, where I secured first position.",
    year: "2024",
    event: "National Yoga Championship, Delhi",
    category: "competitions",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    title: "Yoga Workshop",
    description: "Demonstrating Virabhadrasana (warrior pose) during a yoga workshop for beginners.",
    year: "2023",
    event: "Youth Yoga Workshop, Mumbai",
    category: "workshops",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    title: "Sunrise Yoga Performance",
    description: "Performing Vrischikasana (scorpion pose) during International Yoga Day celebrations.",
    year: "2023",
    event: "International Yoga Day, Rishikesh",
    category: "performances",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    title: "Gold Medal Ceremony",
    description: "Receiving the gold medal at the National Yoga Championship after a stellar performance.",
    year: "2024",
    event: "National Yoga Championship, Delhi",
    category: "competitions",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    title: "Meditation Session",
    description: "Leading a meditation and pranayama session for stress relief and mental wellness.",
    year: "2023",
    event: "Corporate Wellness Program, Bangalore",
    category: "workshops",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    title: "Teaching Session",
    description: "Conducting a yoga class for aspiring young yogis as part of community outreach.",
    year: "2024",
    event: "Community Yoga Initiative, Jaipur",
    category: "performances",
  },
]

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Competitions", value: "competitions" },
  { label: "Workshops", value: "workshops" },
  { label: "Performances", value: "performances" },
]

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section ref={sectionRef} id="gallery" className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-primary font-medium mb-2">
            CAPTURED MOMENTS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Gallery
          </h2>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 ${activeFilter === filter.value ? "shadow-md" : "hover:shadow-sm"}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary cursor-pointer text-left shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-primary-foreground font-semibold text-sm sm:text-base lg:text-lg line-clamp-1">
                  {item.title}
                </p>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">{item.year}</p>
              </div>
              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-500" />
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-md p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative bg-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col animate-zoom-in shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background hover:rotate-90 transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 overflow-y-auto">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span>{selectedImage.year}</span>
                  <span>&bull;</span>
                  <span>{selectedImage.event}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
