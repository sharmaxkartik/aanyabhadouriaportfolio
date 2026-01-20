"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy, Medal, Star, Users } from "lucide-react";

interface Achievement {
  id: number;
  icon: "gold" | "silver" | "bronze" | "special";
  title: string;
  competition: string;
  year: string;
  position: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    icon: "gold",
    title: "National Champion",
    competition: "National Yoga Championship",
    year: "2016 , 2025 , 2026",
    position: "1st Position",
  },
  {
    id: 2,
    icon: "gold",
    title: "State Champion",
    competition: "MP State Yoga Championship",
    year: "2016",
    position: "1st Position",
  },
  {
    id: 3,
    icon: "silver",
    title: "National Runner-up",
    competition: "National Yoga Championship",
    year: "2016",
    position: "2nd Position",
  },
  {
    id: 4,
    icon: "gold",
    title: "Zonal Champion",
    competition: "Central Zone Yoga Championship",
    year: "2022",
    position: "1st Position",
  },
  {
    id: 5,
    icon: "bronze",
    title: "National Bronze",
    competition: "Junior National Yoga Championship",
    year: "2021",
    position: "3rd Position",
  },
  {
    id: 6,
    icon: "special",
    title: "Youth Yoga Ambassador",
    competition: "Ministry of AYUSH Recognition",
    year: "2023",
    position: "Special Award",
  },
];

const stats = [
  { label: "Gold Medals", value: "12+", icon: Trophy },
  { label: "Competitions", value: "50+", icon: Medal },
  { label: "Years of Training", value: "8+", icon: Star },
  { label: "Students Taught", value: "500+", icon: Users },
];

const iconColors = {
  gold: "text-yellow-500 bg-yellow-500/10",
  silver: "text-slate-400 bg-slate-400/10",
  bronze: "text-orange-600 bg-orange-600/10",
  special: "text-primary bg-primary/10",
};

export function AchievementsSection() {
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
      id="achievements"
      className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] text-primary font-medium mb-2">
            RECOGNITION
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Achievements
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-card border border-border rounded-xl p-4 sm:p-6 text-center hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 group ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`p-2.5 sm:p-3 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${iconColors[achievement.icon]}`}
                >
                  {achievement.icon === "special" ? (
                    <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <Medal className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {achievement.position}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mt-2 sm:mt-3 text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 line-clamp-2">
                    {achievement.competition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
