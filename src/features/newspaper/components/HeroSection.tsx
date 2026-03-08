import type { FC } from "react";
import { rule, colR, lbl, just, imgB } from "../styles/classNames";
import { IMAGES } from "../data";

const HeroSection: FC = () => (
  <section aria-labelledby="hero-heading" className={`${rule} grid grid-cols-[1fr_1.2fr]`}>
    {/* Left column */}
    <div className={`${colR} pr-6 py-6`}>
      <div className={`${lbl} mb-2`}>SPECIAL REPORT</div>
      <h2
        id="hero-heading"
        className="text-[clamp(32px,5.5vw,64px)] font-extrabold uppercase leading-[0.9] text-[#2a2a2a] mb-1.5 -tracking-[0.02em]"
      >
        SOFTWARE
        <br />
        ENGINEER!
      </h2>
      <div className="w-10 h-[3px] bg-[#2a2a2a] mb-[18px]" aria-hidden="true" />

      <img
        src={IMAGES.illustration}
        alt="Faris working on code illustration"
        loading="lazy"
        width={280}
        height={350}
        className={`${imgB} w-[70%] aspect-[4/5] object-cover mb-3.5 block`}
      />

      <p className={`${just} text-sm leading-[1.65] text-[#333]`}>
        <span className="float-left text-[58px] font-extrabold leading-[0.75] mr-1.5 mt-1.5 text-[#2a2a2a]" aria-hidden="true">
          A
        </span>
        &nbsp;Computer Science graduate from Padjadjaran University with a
        strong foundation in software development. While my recent focus has
        been on iOS development, I have solid academic experience with Java,
        JavaScript, and database technologies. On the frontend side, I have
        hands-on experience building modern web interfaces using React.js,
        Next.js, and TypeScript.
      </p>
      <p className="text-[10px] italic text-[#999] mt-2">
        — By the editors of The Paper Portfolio
      </p>
    </div>

    {/* Right column */}
    <div className="pl-6 py-6">
      <img
        src={IMAGES.portrait}
        alt="Portrait of Mohammad Faris Arie Prasetyo"
        width={500}
        height={500}
        className={`${imgB} w-full aspect-square object-cover block bg-[#a89e90]`}
      />
      <p className="text-[9px] italic text-[#999] mt-1.5 mb-4 text-center">
        Mohammad Faris Arie Prasetyo — Jakarta, 2026
      </p>

      <div className="font-extrabold text-[clamp(17px,3vw,30px)] uppercase leading-[1.25] text-[#2a2a2a] -tracking-[0.01em]">
        IOS DEVELOPER
        <br />
        FRONTEND ENGINEER
        <br />
        BACKEND DEVELOPER
        <br />
        <span className="font-normal italic text-[clamp(13px,2vw,20px)] text-[#666]">
          Based in Jakarta, Indonesia
        </span>
      </div>

      {/* Pull quote */}
      <blockquote className="mt-6 py-4 border-t-2 border-t-[#2a2a2a] border-b border-b-[#b5b0a8]">
        <p className="text-lg italic text-[#2a2a2a] leading-[1.4] text-center">
          &ldquo;Like an artisan, I start from raw code and give life to iconic
          products.&rdquo;
        </p>
      </blockquote>
    </div>
  </section>
);

export default HeroSection;
