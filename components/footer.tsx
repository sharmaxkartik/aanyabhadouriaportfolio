"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, Linkedin, Mail, Youtube, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Certificates", href: "#certificates" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/aanya.yoga" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/aanya-bhadouria" },
  { name: "Email", icon: Mail, href: "mailto:aanya.bhadouria@email.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@aanyayoga" },
]

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer ref={footerRef} className="bg-card border-t border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div 
              className={`space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300 cursor-default">
                Aanya Bhadouria
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                National Level Yoga Player dedicated to spreading the gift of yoga
                and inspiring others through discipline, flexibility, and mindfulness.
              </p>
            </div>

            {/* Quick Links */}
            <div 
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div 
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.name}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                aanya.bhadouria@email.com
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div 
            className={`border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Aanya Bhadouria. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1 group">
              Made with <Heart className="h-4 w-4 text-primary fill-primary group-hover:scale-125 transition-transform duration-300" /> for Yoga
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  )
}
