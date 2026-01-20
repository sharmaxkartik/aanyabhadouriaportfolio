"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Aanya performing yoga"
          fill
          className={`object-cover transition-all duration-1000 ${isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-[10%] w-2 h-2 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-[15%] w-3 h-3 bg-accent/40 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[60%] right-[25%] w-2 h-2 bg-accent/30 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-[20%] right-[10%] w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse-soft"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute bottom-[40%] right-[30%] w-1 h-1 bg-accent/50 rounded-full animate-pulse-soft"
          style={{ animationDelay: "0.7s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16 sm:pt-20">
        <div
          className={`inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <Sparkles className="h-4 w-4 text-primary animate-pulse-soft" />
          <span className="text-xs sm:text-sm tracking-[0.15em] text-primary font-medium">
            NATIONAL LEVEL YOGA PLAYER
          </span>
        </div>
        <h1
          className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          Aanya Bhadouria
        </h1>
        <p
          className={`text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 tracking-wide transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "600ms" }}
        >
          Discipline &bull; Flexibility &bull; Mindfulness
        </p>
        <p
          className={`text-sm sm:text-base md:text-lg text-muted-foreground/80 italic max-w-2xl mx-auto mb-8 sm:mb-10 px-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "800ms" }}
        >
          {'"'}Yoga is the journey of the self, through the self, to the self.
          {'"'}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "1000ms" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#achievements")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            View Achievements
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: "1200ms" }}
      >
        <button
          onClick={() => scrollToSection("#about")}
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 group"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  );
}
