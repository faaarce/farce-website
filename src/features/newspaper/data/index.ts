import type { Stat, Experience, Skill } from "../types";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const stats: Stat[] = [
  { sub: "IOS PROJECTS", label: "BUILT", value: "4+" },
  { sub: "TECH STACKS", label: "MASTERED", value: "8" },
  { sub: "YEARS OF", label: "EXPERIENCE", value: "3+" },
  { sub: "FRAMEWORKS", label: "USED", value: "12+" },
];

export const experiences: Experience[] = [
  {
    quote:
      "Developed iOS features using Firebase Auth, AVFoundation video player, and Alamofire for API consumption. Applied MVC design pattern and customized collection/table views.",
    name: "MOJADIAPP",
    role: "iOS Engineer Intern",
    date: "Feb – Jul 2022",
  },
  {
    quote:
      "Intensive iOS development training covering Swift fundamentals, Core Data, MVVM architecture, RxSwift reactive programming, and Alamofire. Built Cyclouse as final project.",
    name: "PHINCON ACADEMY",
    role: "iOS Bootcamp",
    date: "Jul – Sep 2024",
  },
  {
    quote:
      "Completed comprehensive iOS Developer Pathway covering Swift programming, app layout design, and data management fundamentals via structured online program.",
    name: "MYEDUSOLVE",
    role: "Apprenticeship",
    date: "Aug – Dec 2022",
  },
];

export const skills: Skill[] = [
  {
    title: "MOBILE DEV.",
    items:
      "Swift · UIKit · SwiftUI · RxSwift · Core Data · Realm · AVPlayer · MVVM · Storyboard · Programmatic UI",
  },
  {
    title: "BACKEND",
    items:
      "Golang · Gin/Echo · GORM · Java · Spring Boot · JWT Auth · REST APIs · Clean Architecture · PostgreSQL",
  },
  {
    title: "FRONTEND",
    items:
      "React.js · Next.js · Angular · TypeScript · TanStack Query · TanStack Router · JavaScript · Tailwind CSS",
  },
  {
    title: "DATA & OPS",
    items:
      "Apache Airflow · Kafka CDC · Debezium · ETL Pipelines · Docker · Git · Firebase Auth · PostgreSQL Optimization",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Faris delivered a polished iOS app ahead of schedule. His attention to UI detail and clean architecture made the codebase a joy to maintain.",
    name: "PHINCON TEAM",
    role: "Bootcamp Mentor",
  },
  {
    quote:
      "Strong technical foundation paired with genuine curiosity. Faris consistently improved our codebase quality during his internship with thoughtful MVC implementations.",
    name: "MOJADI LEAD",
    role: "Engineering Manager",
  },
  {
    quote:
      "An adaptable developer who bridges iOS and web seamlessly. His full-stack perspective brings valuable insight to every project discussion.",
    name: "MYEDUSOLVE",
    role: "Program Coordinator",
  },
];

export const aboutParagraphs = [
  "I am a Computer Science graduate from Padjadjaran University with a deep passion for building software that solves real problems. My journey started with iOS development — crafting native apps with Swift, UIKit, and reactive patterns using RxSwift.",
  "Over time, I expanded into full-stack territory: building RESTful backends with Golang and Spring Boot, designing modern frontends with React and Next.js, and orchestrating data pipelines with Apache Airflow and Kafka. I thrive at the intersection of clean code and great user experience.",
  "When I'm not coding, I'm exploring new frameworks, contributing to open-source, or sharpening my algorithm skills through structured problem-solving challenges.",
];

export const MARQUEE_REPEAT_COUNT = 6;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/farisarie/",
  github: "https://github.com/farisarie",
  email: "mailto:farisariep@gmail.com",
} as const;

export const IMAGES = {
  portrait: "/faris.png",
  illustration: "/faris1.png",
  timepad:
    "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=375&fit=crop",
  timepadWide:
    "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=338&fit=crop",
  cyclouse:
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  siniar:
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=450&fit=crop",
} as const;
