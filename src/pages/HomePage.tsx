import { useState, useEffect } from "react";
import { Reveal, ThickRule, ThinRule } from "../components/shared";
import { EmailMarquee, Footer } from "../components/Footer";
// import { Reveal, ThinRule, ThickRule } from "../components/shared";
// import { Footer, EmailMarquee } from "../components/Footer";

/* ─── FARIS Hero ─── */
const HeroName = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);
  return (
    <section className="bg-[#1d1d1b] py-8 md:py-16 px-6 md:px-12 overflow-hidden">
      <div
        className="font-['Playfair_Display'] text-6xl md:text-[12vw] lg:text-[190px] font-black text-[#e8e0d0] leading-[0.88] tracking-tighter uppercase text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "none" : "translateY(60px)",
          transitionDelay: "0.2s",
        }}
      >
        FARIS
      </div>
    </section>
  );
};

/* ─── Software Engineer + Photo ─── */
const EngineerSection = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
      <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-start">
        <div className="font-['Playfair_Display'] text-3xl md:text-[3.5vw] lg:text-5xl font-black italic text-[#1d1d1b] uppercase leading-none tracking-tight">
          Software
        </div>
        <div className="font-['Playfair_Display'] text-5xl md:text-[7vw] lg:text-[100px] font-black text-[#1d1d1b] uppercase leading-[0.9] tracking-tighter">
          Engineer!
        </div>
        <ThinRule className="my-5" />
        <div className="w-full max-w-[350px] aspect-[1/1.1] overflow-hidden">
          <img src="/faris1.png" alt="Faris" className="w-full h-full object-cover block" />
        </div>
        <div className="mt-4 flex gap-2.5 flex-wrap">
          {["farisariep@gmail.com", "+6281808476200"].map((c) => (
            <span key={c} className="font-['IM_Fell_English_SC'] text-[10px] md:text-xs text-[#1d1d1b] py-1 px-2 border border-[#1d1d1b]/15 tracking-wide">
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden min-h-[300px] md:min-h-0">
        <img src="/faris.png" alt="Faris" className="w-full h-full object-cover object-top block" />
      </div>
    </section>
  </Reveal>
);

/* ─── Roles + Bio ─── */
const RolesSection = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
      <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
        <div className="font-['Playfair_Display'] text-base md:text-lg lg:text-xl font-light text-[#1d1d1b] leading-relaxed">
          <span className="float-left font-['UnifrakturMaguntia'] text-6xl md:text-7xl lg:text-8xl leading-[0.72] pr-1.5 pt-1.5 text-[#1d1d1b]">I</span>
          &nbsp;am a Computer Science graduate from Padjadjaran University with a strong foundation in software development. While my recent focus has been on iOS development, I have solid experience with Java, JavaScript, and database technologies. On the frontend side, I build modern web interfaces using React.js, Next.js, and TypeScript.
        </div>
      </div>
      <div className="p-6 md:p-10 lg:p-12">
        {["iOS Developer", "Frontend Engineer", "Backend Developer", "Data Engineer", "Based in Jakarta, ID."].map((role) => (
          <div key={role}>
            <ThickRule />
            <div className="font-['Playfair_Display'] text-2xl md:text-[3.5vw] lg:text-5xl font-black italic text-[#1d1d1b] uppercase leading-tight tracking-tight py-2 md:py-3">
              {role}
            </div>
          </div>
        ))}
        <ThickRule />
      </div>
    </section>
  </Reveal>
);

/* ─── Experience + Stamp ─── */
const ExperienceSection = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr]">
      <div className="bg-[#1d1d1b] py-10 md:py-16 lg:py-20 px-6 md:px-10 lg:px-12 flex items-center">
        <div className="font-['Playfair_Display'] text-5xl md:text-[9vw] lg:text-[150px] font-black text-[#e8e0d0] leading-[0.88] tracking-tighter uppercase">
          Experience
        </div>
      </div>
      <div className="p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center">
        <svg viewBox="0 0 120 80" className="w-24 md:w-32 lg:w-40 mb-4">
          <circle cx="60" cy="55" r="18" fill="none" stroke="#c85a3a" strokeWidth="2" />
          <rect x="10" y="52" width="100" height="3" fill="#c85a3a" />
          {Array.from({ length: 15 }).map((_, i) => {
            const angle = Math.PI + (Math.PI * i) / 14;
            return <line key={i} x1={60 + 22 * Math.cos(angle)} y1={55 + 22 * Math.sin(angle)} x2={60 + 40 * Math.cos(angle)} y2={55 + 40 * Math.sin(angle)} stroke="#c85a3a" strokeWidth="1.5" />;
          })}
        </svg>
        {[
          { label: "Name", value: "M. Faris Arie Prasetyo" },
          { label: "University", value: "Padjadjaran" },
          { label: "GPA", value: "3.26 / 4.00" },
        ].map((item) => (
          <div key={item.label} className="font-['IM_Fell_English_SC'] text-[10px] md:text-xs text-[#1d1d1b] uppercase tracking-[0.15em] mb-1">
            {item.label}: <span className="font-['Playfair_Display'] italic normal-case tracking-normal">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  </Reveal>
);

/* ─── Work Experience ─── */
const WorkExperience = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10 lg:p-12">
      {[
        { title: "MojadiApp", period: "iOS Engineer Intern · Feb–Jul 2022", desc: "Built features using Firebase Auth, AVFoundation video player, Alamofire API integration, and MVC pattern with custom collection & table views." },
        { title: "Phincon Academy", period: "iOS Bootcamp · Jul–Sep 2024", desc: 'Intensive training in Swift, MVVM architecture, RxSwift, Core Data, and Alamofire. Built "Cyclouse" — a full cycling e-commerce app.' },
        { title: "MyEduSolve", period: "Apprentice · Aug–Dec 2022", desc: "iOS Developer Pathway apprenticeship. Deepened understanding of iOS development practices and Swift programming." },
      ].map((job) => (
        <div key={job.title}>
          <h3 className="font-['Playfair_Display'] text-lg md:text-xl lg:text-2xl font-black text-[#1d1d1b] uppercase leading-none mb-1">{job.title}</h3>
          <div className="font-['IM_Fell_English_SC'] text-[11px] md:text-xs text-[#3a3a38] mb-3 tracking-wide">{job.period}</div>
          <p className="font-['Playfair_Display'] text-sm md:text-base font-light text-[#1d1d1b] leading-relaxed">{job.desc}</p>
        </div>
      ))}
    </section>
  </Reveal>
);

/* ─── Featured Projects ─── */
const FeaturedProjects = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 px-6 md:px-10 lg:px-12">
      <div>
        <div className="w-full aspect-[4/3] mb-3 overflow-hidden">
          <img src="/cyclouse.png" alt="Cyclouse" className="w-full h-full object-cover block" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-['Playfair_Display'] text-sm md:text-base lg:text-lg font-black text-[#1d1d1b] uppercase">Cyclouse</span>
          <span className="bg-[#c85a3a] text-white text-[9px] font-bold py-0.5 px-1.5 rounded-sm uppercase tracking-widest">iOS</span>
        </div>
        <p className="font-['Playfair_Display'] text-sm font-light text-[#3a3a38] leading-relaxed">
          iOS cycling e-commerce app with MVVM, RxSwift, Core Data, and Alamofire.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#1d1d1b] uppercase mb-4">All Projects!</h2>
        <p className="font-['Playfair_Display'] text-base md:text-lg lg:text-xl text-[#1d1d1b] leading-snug font-light italic mb-6">
          A curated selection of projects — from mobile to full-stack.
        </p>
        <p className="font-['IM_Fell_English_SC'] text-xs text-[#3a3a38]"><strong>Tip!</strong> Scroll to explore</p>
      </div>
      <div>
        <div className="w-full aspect-[4/3] mb-3 bg-gradient-to-br from-[#2d3436] via-[#636e72] to-[#b2bec3] flex items-center justify-center">
          <div className="font-['Playfair_Display'] text-3xl font-black text-[#e8e0d0]/10 uppercase">Timepad</div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-['Playfair_Display'] text-sm md:text-base lg:text-lg font-black text-[#1d1d1b] uppercase">Timepad</span>
          <span className="bg-[#c85a3a] text-white text-[9px] font-bold py-0.5 px-1.5 rounded-sm uppercase tracking-widest">iOS</span>
        </div>
        <p className="font-['Playfair_Display'] text-sm font-light text-[#3a3a38] leading-relaxed">
          Time management app with Realm persistence and ChartView analytics.
        </p>
      </div>
    </section>
  </Reveal>
);

/* ─── Skills Counters ─── */
const SkillsCounters = () => (
  <Reveal>
    <section className="py-6 md:py-10 px-6 md:px-10 lg:px-12">
      <ThinRule className="mb-5 md:mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Mobile", type: "iOS/Swift", count: "3+" },
          { label: "Frontend", type: "React/TS", count: "2+" },
          { label: "Backend", type: "Go/Java", count: "2+" },
          { label: "Data Eng", type: "Pipeline", count: "1+" },
        ].map((a, i) => (
          <Reveal key={a.label} delay={i * 0.1}>
            <div className="flex items-baseline gap-1 md:gap-2">
              <div>
                <div className="font-['IM_Fell_English_SC'] text-[10px] md:text-xs text-[#1d1d1b] uppercase tracking-widest">{a.label}</div>
                <div className="font-['Playfair_Display'] text-lg md:text-2xl lg:text-3xl font-black text-[#1d1d1b] uppercase leading-none">{a.type}</div>
              </div>
              <div className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-black italic text-[#1d1d1b] leading-[0.85]">{a.count}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="font-['IM_Fell_English_SC'] text-[10px] md:text-xs text-[#3a3a38] text-center mt-3 tracking-widest">Years of Experience</div>
      <ThinRule className="mt-4 md:mt-6" />
    </section>
  </Reveal>
);

/* ─── Tech Stack ─── */
const TechStack = () => (
  <Reveal>
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-10 lg:p-12">
          <div className="font-['Playfair_Display'] text-5xl md:text-[8vw] lg:text-[130px] font-black text-[#1d1d1b] leading-[0.88] tracking-tighter uppercase">
            <div>The</div><div>Stack</div>
          </div>
        </div>
        <div className="bg-[#1d1d1b]/[0.03] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
          {[
            { cat: "Mobile", techs: "Swift, UIKit, Core Data, Realm, RxSwift, AVFoundation, MVVM" },
            { cat: "Frontend", techs: "React, Next.js, TypeScript, Angular, TanStack Query" },
            { cat: "Backend", techs: "Golang (Gin/Echo), Java (Spring Boot), REST APIs, JWT" },
            { cat: "Data", techs: "Apache Airflow, Kafka CDC, Debezium, ETL Pipelines" },
            { cat: "Database", techs: "PostgreSQL, Query Optimization, Indexing, Batch Processing" },
            { cat: "Tools", techs: "Docker, Git, Firebase, Alamofire, GORM" },
          ].map((s, i) => (
            <div key={s.cat} className={i < 5 ? "mb-3.5" : ""}>
              <div className="font-['Playfair_Display'] text-sm md:text-base font-black text-[#1d1d1b] uppercase tracking-wide mb-0.5">{s.cat}</div>
              <div className="font-['Playfair_Display'] text-xs md:text-sm font-light text-[#3a3a38] leading-snug">{s.techs}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#1d1d1b] p-6 md:p-10 lg:p-14">
          <div className="font-['Playfair_Display'] text-5xl md:text-[6vw] lg:text-[100px] font-black text-[#e8e0d0] leading-[0.88] tracking-tighter uppercase">Build</div>
        </div>
        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
          <div className="font-['Playfair_Display'] text-5xl md:text-[6vw] lg:text-[100px] font-black text-[#1d1d1b] leading-[0.88] tracking-tighter uppercase mb-4">Learn</div>
          <div className="font-['Playfair_Display'] text-sm md:text-base lg:text-lg font-light text-[#1d1d1b] leading-relaxed">
            Continuously expanding expertise — from pixel-perfect mobile interfaces to data pipelines and scalable backend systems.
          </div>
        </div>
      </div>
    </section>
  </Reveal>
);

/* ─── Education ─── */
const Education = () => (
  <Reveal>
    <section className="py-8 md:py-12 px-6 md:px-10 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Padjadjaran University", sub: "Bachelor CS · GPA 3.26/4.00", desc: "Algorithms, data structures, software engineering, and database systems." },
          { title: "Phincon Academy", sub: "iOS Bootcamp · 2024", desc: "MVVM, RxSwift, Core Data, Alamofire. Capstone: Cyclouse e-commerce app." },
          { title: "Dicoding Certificate", sub: "iOS for Beginners · 2022", desc: "Fundamental iOS development with Swift, UIKit, and app architecture." },
          { title: "MyEduSolve Pathway", sub: "iOS Apprenticeship · 2022", desc: "Structured curriculum deepening iOS skills through hands-on projects." },
        ].map((q, i) => (
          <div key={i} className="border border-dashed border-[#1d1d1b]/25 p-4 md:p-5 lg:p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="font-['Playfair_Display'] text-sm md:text-base lg:text-lg font-black text-[#1d1d1b] uppercase mb-1 leading-tight">{q.title}</div>
              <div className="font-['IM_Fell_English_SC'] text-[10px] md:text-xs text-[#3a3a38] mb-3 tracking-wide">{q.sub}</div>
            </div>
            <div className="font-['Playfair_Display'] text-sm font-light text-[#1d1d1b] leading-relaxed italic">{q.desc}</div>
          </div>
        ))}
      </div>
    </section>
  </Reveal>
);

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <HeroName />
      <EngineerSection />
      <RolesSection />
      <ExperienceSection />
      <WorkExperience />
      <FeaturedProjects />
      <SkillsCounters />
      <TechStack />
      <Education />
      <EmailMarquee />
      <Footer />
    </>
  );
}