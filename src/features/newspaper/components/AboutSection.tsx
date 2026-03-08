import type { FC } from "react";
import { rule, colR, lbl, just } from "../styles/classNames";
import { aboutParagraphs } from "../data";

const AboutSection: FC = () => (
  <section aria-labelledby="about-heading">
    <div className={`${rule} pt-5`}>
      <div className={`${lbl} mb-3`}>ABOUT THE DEVELOPER</div>
    </div>

    <div className={`${rule} grid grid-cols-[1.3fr_1fr]`}>
      {/* Left — bio */}
      <div className={`${colR} pr-6 py-5`}>
        <h2
          id="about-heading"
          className="font-extrabold text-[clamp(28px,4vw,48px)] uppercase text-[#2a2a2a] leading-[0.92] mb-1 -tracking-[0.02em]"
        >
          ABOUT
        </h2>
        <h2 className="font-extrabold text-[clamp(32px,5vw,56px)] uppercase text-[#2a2a2a] leading-[0.88] mb-4 -tracking-[0.03em]">
          ME
        </h2>
        <div className="w-10 h-[3px] bg-[#2a2a2a] mb-5" />

        {aboutParagraphs.map((p, i) => (
          <p
            key={i}
            className={`${just} text-sm text-[#333] leading-[1.65] ${i < aboutParagraphs.length - 1 ? "mb-3" : ""}`}
          >
            {i === 0 && (
              <span className="float-left text-[48px] font-extrabold leading-[0.75] mr-1.5 mt-1.5 text-[#2a2a2a]">
                {p[0]}
              </span>
            )}
            {i === 0 ? p.slice(1) : p}
          </p>
        ))}
      </div>

      {/* Right — key values */}
      <div className="pl-6 py-5">
        <div className={`${lbl} mb-3`}>CORE VALUES</div>

        {[
          { title: "CLEAN ARCHITECTURE", desc: "Every project starts with solid foundations — MVVM, Clean Architecture, and separation of concerns are non-negotiable." },
          { title: "USER-FIRST DESIGN", desc: "I build interfaces that people actually enjoy using. Performance and aesthetics go hand-in-hand." },
          { title: "CONTINUOUS LEARNING", desc: "From iOS to full-stack web, I actively expand my toolkit. Currently deep-diving into TanStack ecosystem and SSR patterns." },
        ].map((val) => (
          <div key={val.title} className="mb-4">
            <h3 className="font-extrabold text-[13px] uppercase text-[#2a2a2a] mb-1">
              {val.title}
            </h3>
            <div className="w-5 h-px bg-[#b5b0a8] mb-1.5" />
            <p className={`${just} text-xs text-[#555] leading-[1.6]`}>
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
