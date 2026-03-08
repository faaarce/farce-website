import type { FC } from "react";
import { rule, lbl, just } from "../styles/classNames";
import { testimonials } from "../data";

const TestimonialsSection: FC = () => (
  <section aria-labelledby="testimonials-heading">
    <div className={`${rule} pt-1`}>
      <div className={`${lbl} mb-1`} id="testimonials-heading">
        TESTIMONIALS · WHAT THEY SAY
      </div>
      <div className="border-t-2 border-[#2a2a2a]" />
    </div>

    <div className={`${rule} grid grid-cols-3`}>
      {testimonials.map((t, i) => (
        <blockquote
          key={t.name}
          className={`${i < 2 ? "border-r border-[#b5b0a8]" : ""} py-5 ${i === 0 ? "pr-5" : i === 2 ? "pl-5" : "px-5"}`}
        >
          <p className={`${just} text-sm italic text-[#333] leading-[1.6] mb-4`}>
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="w-6 h-px bg-[#b5b0a8] mb-3" />
          <footer>
            <cite className="not-italic">
              <span className="font-extrabold text-[12px] uppercase text-[#2a2a2a] block mb-0.5">
                {t.name}
              </span>
              <span className="text-[11px] italic text-[#888]">{t.role}</span>
            </cite>
          </footer>
        </blockquote>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
