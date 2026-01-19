"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const skills = [
  { name: "Yoga Asanas", level: 95 },
  { name: "Flexibility Training", level: 90 },
  { name: "Meditation", level: 85 },
  { name: "Competitive Yoga", level: 92 },
];

const timeline = [
  {
    year: "2018",
    title: "Started Yoga Journey",
    description: "Began training at age 12 under renowned yoga guru",
  },
  {
    year: "2020",
    title: "State Championship",
    description: "Won gold medal in state-level yoga competition",
  },
  {
    year: "2022",
    title: "National Recognition",
    description: "Qualified for National Yoga Championship",
  },
  {
    year: "2024",
    title: "National Champion",
    description: "Secured first position at National Yoga Championship",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-secondary/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] text-primary font-medium mb-2">
            GET TO KNOW ME
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary via-background to-accent/10 p-4 sm:p-8 flex items-center justify-center group">
              <div className="relative w-full h-full animate-float">
                <Image
                  src="/Images/aanya.png"
                  alt="AB Yoga Club Logo"
                  fill
                  className="object-cover drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full animate-pulse-soft" />
              <div className="absolute bottom-8 left-6 w-2 h-2 bg-accent/50 rounded-full animate-pulse-soft delay-300" />
              <div className="absolute top-1/4 left-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse-soft delay-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 sm:w-24 h-20 sm:h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>

          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
              A Journey of Discipline & Dedication
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Hello! I am Aanya Bhadouria, a national-level yoga player from
                India. My journey with yoga began at the age of 12, when I
                discovered the transformative power of this ancient practice.
              </p>
              <p>
                Over the years, I have dedicated myself to mastering various
                yoga asanas, from basic postures to advanced competitive forms.
                My passion for yoga extends beyond competition - it is a way of
                life that brings balance, peace, and strength to everything I
                do.
              </p>
              <p>
                Having represented my state at national championships and won
                multiple gold medals, I continue to push my boundaries while
                sharing the gift of yoga with others through workshops and
                demonstrations.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`mb-16 sm:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground text-center mb-8 sm:mb-12">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            <div className="space-y-6 md:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative md:flex md:items-center md:gap-8 pl-10 md:pl-0 transition-all duration-700 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <div className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 group">
                      <span className="text-primary font-semibold text-base sm:text-lg group-hover:scale-105 inline-block transition-transform duration-300">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-foreground mt-1 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-4 border-background shadow-sm transition-all duration-300 hover:scale-125" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
