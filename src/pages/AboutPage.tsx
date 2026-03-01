import { useState, useEffect } from "react";
import { Reveal, ThinRule } from "../components/shared";
import { EmailMarquee, Footer } from "../components/Footer";


/* ─── ABOUT ME Hero Banner ─── */
const AboutHero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);
  return (
    <section className="bg-[#1d1d1b] py-10 md:py-20 lg:py-28 px-6 md:px-12 overflow-hidden">
      <div
        className="font-['Playfair_Display'] text-6xl md:text-[10vw] lg:text-[180px] font-black text-[#e8e0d0] leading-[0.88] tracking-tighter uppercase text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "none" : "translateY(60px)",
          transitionDelay: "0.2s",
        }}
      >
        ABOUT ME
      </div>
    </section>
  );
};

/* ─── Tagline (✕✕✕ Jakarta-based...) ─── */
const Tagline = () => (
  <Reveal>
    <section className="px-6 md:px-10 lg:px-12 py-10 md:py-16 lg:py-20">
      <p className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-[4.5vw] font-light italic text-[#1d1d1b] leading-[1.15] tracking-tight">
        <span className="not-italic font-black tracking-normal">✕✕✕</span> Jakarta-based
        Software Engineer & iOS Developer with focus on Mobile Development,
        Frontend Engineering and Backend Systems.
      </p>
    </section>
  </Reveal>
);

/* ─── Awards / Skills Section (image left + accordion right) ─── */
const SkillsAccordion = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const skills = [
    {
      title: "iOS DEVELOPMENT",
      details: "Swift, UIKit (Storyboard & Programmatic), SwiftUI, MVVM, MVC, Core Data, Realm, RxSwift, AVFoundation, Alamofire, Firebase Auth",
    },
    {
      title: "FRONTEND",
      details: "React.js, Next.js, TypeScript, Angular, TanStack Query, TanStack Router, Tailwind CSS, HTML/CSS/JavaScript",
    },
    {
      title: "BACKEND",
      details: "Golang (Gin/Echo framework), Java (Spring Boot), REST API design, JWT authentication, middleware, Clean Architecture, GORM",
    },
    {
      title: "DATA ENGINEERING",
      details: "Apache Airflow, Kafka CDC with Debezium, ETL pipelines, PostgreSQL optimization (indexing, batch queries, performance tuning)",
    },
    {
      title: "TOOLS & INFRA",
      details: "Docker, Git, Firebase, PostgreSQL, Microsoft Office, macOS & Windows environments",
    },
  ];

  return (
    <Reveal>
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-0">
        {/* Left: Trophy / Photo */}
        <div className="overflow-hidden aspect-square md:aspect-auto">
          <img
            src="/faris.png"
            alt="Faris"
            className="w-full h-full object-cover object-top block"
          />
        </div>

        {/* Right: Accordion */}
        <div className="px-6 md:px-10 lg:px-12 py-8 md:py-10">
          {skills.map((skill, i) => (
            <div key={skill.title} className="border-b border-[#1d1d1b]/20">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-4 md:py-5 bg-transparent border-none cursor-pointer text-left group"
              >
                <span className="font-['Playfair_Display'] text-xl md:text-2xl lg:text-3xl font-black text-[#1d1d1b] uppercase tracking-tight">
                  {skill.title}
                </span>
                <span
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1d1d1b]/30 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#1d1d1b]">
                    <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  maxHeight: openIdx === i ? "200px" : "0",
                  opacity: openIdx === i ? 1 : 0,
                }}
              >
                <p className="font-['Playfair_Display'] text-sm md:text-base font-light text-[#3a3a38] leading-relaxed pb-5 pr-16">
                  {skill.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

/* ─── SELECTED AWARDS! + Drop cap bio (like Miranda screenshot 3) ─── */
const SelectedAwards = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left: Big text */}
      <div className="p-6 md:p-10 lg:p-12">
        <div className="font-['Playfair_Display'] text-6xl md:text-[8vw] lg:text-[120px] font-black text-[#1d1d1b] leading-[0.85] tracking-tighter uppercase">
          <div>Selected</div>
          <div>Skills!</div>
        </div>
      </div>

      {/* Right: Drop cap bio */}
      <div className="p-6 md:p-10 lg:p-12 flex items-end">
        <div className="font-['Playfair_Display'] text-base md:text-lg lg:text-xl font-light text-[#1d1d1b] leading-relaxed">
          <span className="float-left font-['UnifrakturMaguntia'] text-6xl md:text-7xl lg:text-8xl leading-[0.72] pr-2 pt-1.5 text-[#1d1d1b]">
            A
          </span>
          s a versatile software engineer, I'm passionate about building
          polished digital experiences across the full stack — from crafting
          intuitive iOS interfaces with Swift and UIKit, to building reactive
          frontends with React and TypeScript, to designing robust backend
          services with Golang and Java. I thrive on learning and applying new
          technologies to solve real-world problems.
        </div>
      </div>
    </section>
  </Reveal>
);

/* ─── Work Experience Cards (dashed borders, horizontal scroll like Miranda) ─── */
const WorkExperienceCards = () => {
  const cards = [
    {
      title: "Looking for\nnew opportunities!",
      period: "Available Now",
      tags: [],
      desc: "Whether you're looking for a skilled developer for a project — or have a full-time opportunity, you can easily reach me by clicking",
      cta: true,
    },
    {
      title: "MojadiApp",
      period: "Feb 2022 – Jul 2022",
      tags: ["iOS", "SWIFT", "FIREBASE", "AVFOUNDATION", "ALAMOFIRE", "MVC"],
      desc: "",
      cta: false,
    },
    {
      title: "Phincon\nAcademy",
      period: "Jul 2024 – Sep 2024",
      tags: ["iOS", "SWIFT", "MVVM", "RXSWIFT", "CORE DATA", "ALAMOFIRE"],
      desc: "",
      cta: false,
    },
    {
      title: "MyEduSolve\nPathway",
      period: "Aug 2022 – Dec 2022",
      tags: ["iOS", "SWIFT", "UIKIT"],
      desc: "",
      cta: false,
    },
  ];

  return (
    <Reveal>
      <section className="py-8 md:py-12 px-6 md:px-10 lg:px-12">
        <div className="font-['Playfair_Display'] text-sm md:text-base italic text-[#1d1d1b] mb-6">
          Work Experience
        </div>
        <div className="flex gap-0 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[380px] lg:min-w-[420px] border-[1.5px] border-dashed border-[#1d1d1b]/30 p-6 md:p-8 flex flex-col justify-between snap-start flex-shrink-0"
              style={{ minHeight: "340px" }}
            >
              <div>
                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#1d1d1b] leading-tight tracking-tight whitespace-pre-line mb-3">
                  {card.title}
                </h3>
                <div className="font-['Playfair_Display'] text-sm italic text-[#3a3a38] mb-4">
                  {card.period}
                </div>
              </div>

              {card.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['Playfair_Display'] text-xs md:text-sm font-black text-[#1d1d1b] uppercase bg-[#1d1d1b]/10 px-2.5 py-1 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {card.desc && (
                <p className="font-['Playfair_Display'] text-base md:text-lg font-light text-[#1d1d1b] leading-relaxed mt-4">
                  {card.desc}
                  {card.cta && (
                    <>
                      {" "}
                      <a
                        href="mailto:farisariep@gmail.com"
                        className="text-[#1d1d1b] underline underline-offset-2"
                      >
                        here
                      </a>
                      .
                    </>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

/* ─── PUBLICATIONS / Projects section (like Miranda's numbered 3-col grid) ─── */
const Publications = () => {
  const items = [
    { source: "GitHub", year: "2024", icon: "🔗", num: 1, title: "Cyclouse\nE-Commerce" },
    { source: "GitHub", year: "2022", icon: "🔗", num: 2, title: "Timepad\nTime Manager" },
    { source: "GitHub", year: "2022", icon: "🔗", num: 3, title: "Siniar\nPodcast App" },
    { source: "Phincon Academy", year: "2024", icon: "📄", num: 4, title: "iOS Bootcamp\nCapstone" },
    { source: "Dicoding", year: "2022", icon: "📄", num: 5, title: "iOS for\nBeginners Cert" },
    { source: "Padjadjaran Univ.", year: "2024", icon: "🎓", num: 6, title: "Bachelor\nComputer Science" },
  ];

  return (
    <Reveal>
      <section className="px-6 md:px-10 lg:px-12 py-8 md:py-12">
        {/* Header row */}
        <div className="flex items-start justify-between mb-2">
          <div className="font-['Playfair_Display'] text-6xl md:text-[8vw] lg:text-[120px] font-black text-[#1d1d1b] leading-[0.85] tracking-tighter uppercase">
            Projects &<br />Certs
          </div>
          <div className="hidden md:block w-24 lg:w-32 aspect-square overflow-hidden flex-shrink-0 mt-2">
            <img src="/faris.png" alt="Faris" className="w-full h-full object-cover" />
          </div>
        </div>

        <ThinRule className="my-6 md:my-8" />

        {/* 3-col numbered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12">
          {items.map((item) => (
            <div key={item.num}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-['IM_Fell_English_SC'] text-xs text-[#3a3a38] tracking-wide">
                  {item.source} — {item.year}
                </span>
                <span className="text-sm">{item.icon}</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1d1d1b]/20 leading-none font-light italic">
                  ({item.num}
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-black text-[#1d1d1b] leading-tight tracking-tight whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

/* ─── HURRAH! Banner ─── */
const HurrahBanner = () => (
  <Reveal>
    <section className="bg-[#1d1d1b] py-10 md:py-20 lg:py-28 px-6 md:px-12 overflow-hidden">
      <div className="font-['Playfair_Display'] text-6xl md:text-[10vw] lg:text-[180px] font-black text-[#e8e0d0] leading-[0.88] tracking-tighter uppercase text-center">
        HURRAH!
      </div>
    </section>
  </Reveal>
);

/* ─── Technologies & Partners (large text with inline highlighted brands) ─── */
const TechPartners = () => (
  <Reveal>
    <section className="px-6 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="font-['Playfair_Display'] text-sm italic text-[#1d1d1b] mb-4">
        Technologies & Frameworks
      </div>
      <p className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-[4.5vw] font-light italic text-[#1d1d1b] leading-[1.15] tracking-tight">
        Throughout my journey, I have worked extensively with{" "}
        <span className="font-black not-italic uppercase bg-[#1d1d1b] text-[#e8e0d0] px-2 md:px-3 inline-block">
          SWIFT
        </span>
        ,{" "}
        <span className="font-black not-italic uppercase bg-[#1d1d1b] text-[#e8e0d0] px-2 md:px-3 inline-block">
          REACT
        </span>
        ,{" "}
        <span className="font-black not-italic uppercase bg-[#1d1d1b] text-[#e8e0d0] px-2 md:px-3 inline-block">
          GOLANG
        </span>{" "}
        and much more.
      </p>
    </section>
  </Reveal>
);

/* ─── Two Images Side by Side (like Miranda's illustration pair) ─── */
const ImagePair = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center">
        <img src="/cyclouse.png" alt="Cyclouse Project" className="w-full h-full object-cover block" />
      </div>
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#2d3436] via-[#636e72] to-[#b2bec3] flex items-center justify-center">
        <div className="text-center p-8">
          <div className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-black text-[#e8e0d0]/20 uppercase mb-4">
            Timepad
          </div>
          <div className="font-['Playfair_Display'] text-sm text-[#e8e0d0]/40 italic">
            Time Management App
          </div>
        </div>
      </div>
    </section>
  </Reveal>
);

/* ─── Featured Work Bottom (3-col like Miranda's bottom section) ─── */
const FeaturedWorkBottom = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 md:py-14 px-6 md:px-10 lg:px-12">
      {/* Left project */}
      <div>
        <div className="w-full aspect-[4/3] mb-3 overflow-hidden">
          <img src="/cyclouse.png" alt="Cyclouse" className="w-full h-full object-cover block" />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-['Playfair_Display'] text-sm md:text-base font-black text-[#1d1d1b] uppercase">
            Cyclouse
          </span>
          <span className="bg-[#c85a3a] text-white text-[8px] font-bold py-0.5 px-1.5 rounded-sm uppercase tracking-widest">
            New
          </span>
        </div>
        <p className="font-['Playfair_Display'] text-sm font-light text-[#3a3a38] leading-relaxed">
          iOS cycling e-commerce app with MVVM, RxSwift, and Alamofire.
        </p>
      </div>

      {/* Center: ALL WORK! */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#1d1d1b] uppercase mb-4">
          All Work!
        </h2>
        <p className="font-['Playfair_Display'] text-base md:text-lg text-[#1d1d1b] leading-snug font-light italic mb-6">
          A featured work selection — spanning the last few years.
        </p>
        <p className="font-['IM_Fell_English_SC'] text-xs text-[#3a3a38]">
          <strong>Tip!</strong> Drag sideways to navigate
        </p>
      </div>

      {/* Right project */}
      <div>
        <div className="w-full aspect-[4/3] mb-3 bg-gradient-to-br from-[#2d3436] via-[#636e72] to-[#b2bec3] flex items-center justify-center">
          <div className="font-['Playfair_Display'] text-3xl font-black text-[#e8e0d0]/10 uppercase">
            Siniar
          </div>
        </div>
        <span className="font-['Playfair_Display'] text-sm md:text-base font-black text-[#1d1d1b] uppercase">
          Siniar
        </span>
        <p className="font-['Playfair_Display'] text-sm font-light text-[#3a3a38] leading-relaxed mt-1">
          Simple podcast app using iTunes API and AVKit media player.
        </p>
      </div>
    </section>
  </Reveal>
);

/* ─── Page ─── */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Tagline />
      <SkillsAccordion />
      <SelectedAwards />
      <WorkExperienceCards />
      <Publications />
      <HurrahBanner />
      <TechPartners />
      <ImagePair />
      <FeaturedWorkBottom />
      <EmailMarquee />
      <Footer />
    </>
  );
}