"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certificate {
  id: number
  image: string
  title: string
  organization: string
  year: string
  description: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    image: "/images/certificate-1.jpg",
    title: "National Yoga Championship - Gold Medal",
    organization: "Yoga Federation of India",
    year: "2024",
    description: "Certificate of excellence for securing first position in the National Yoga Championship in the senior women category.",
  },
  {
    id: 2,
    image: "/images/certificate-2.jpg",
    title: "Certified Yoga Instructor",
    organization: "International Yoga Alliance",
    year: "2023",
    description: "500-hour certified yoga instructor qualification covering advanced asanas, pranayama, and meditation techniques.",
  },
  {
    id: 3,
    image: "/images/certificate-1.jpg",
    title: "State Yoga Championship - Gold Medal",
    organization: "Madhya Pradesh Yoga Association",
    year: "2022",
    description: "Certificate for winning the state-level yoga championship representing Bhopal district.",
  },
  {
    id: 4,
    image: "/images/certificate-2.jpg",
    title: "Youth Yoga Ambassador",
    organization: "Ministry of AYUSH, Government of India",
    year: "2023",
    description: "Recognition as Youth Yoga Ambassador for promoting yoga among the youth of India.",
  },
]

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
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

  return (
    <section ref={sectionRef} id="certificates" className="py-16 sm:py-20 lg:py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-primary font-medium mb-2">
            CREDENTIALS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Certificates & Awards
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className={`group bg-card rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 text-left hover:-translate-y-3 hover:border-primary/30 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-1 line-clamp-1">
                      {cert.organization}
                    </p>
                    <p className="text-primary text-xs font-medium mt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-md p-4 animate-fade-in"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col animate-zoom-in shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background hover:rotate-90 transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={selectedCertificate.title}
                  fill
                  className="object-contain bg-secondary hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {selectedCertificate.organization} &bull; {selectedCertificate.year}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCertificate.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
