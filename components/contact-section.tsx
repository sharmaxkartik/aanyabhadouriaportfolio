"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { Send, Instagram, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/aanya.yoga",
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/aanya-bhadouria",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:aanyabhadouria23@gmail.com",
    color: "hover:text-primary",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formDataToSend = new FormData(e.currentTarget)
    formDataToSend.append("access_key", "34efdb6a-ceee-43c7-883f-27d895c2abc7")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setIsSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-20 lg:py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-primary font-medium mb-2">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                  {"Let's Connect"}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you want to discuss yoga workshops, collaborations, or
                just want to say hello, I would love to hear from you. Feel free to
                reach out through the form or connect with me on social media.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground text-sm">Gwalior, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">aanyabhadouria23@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium text-foreground mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card border border-border rounded-xl text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`bg-card border border-border rounded-2xl p-6 sm:p-8 transition-all duration-700 delay-300 hover:shadow-xl hover:border-primary/20 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-background resize-none transition-all duration-300 focus:scale-[1.01] focus:shadow-md"
                />
              </div>
              <Button
                type="submit"
                className="w-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center animate-pulse">
                    Message Sent!
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
