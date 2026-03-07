import type { FC } from "react";
import { rule, lbl, just } from "../styles/classNames";
import { experiences } from "../data";

const ExperienceSection: FC = () => (
  <>
    <div className={`${rule} pt-1`}>
      <div className={`${lbl} mb-1`}>CAREER · APPOINTMENTS</div>
      <div className="border-t-2 border-[#2a2a2a]" />
    </div>

    <div className={`${rule} grid grid-cols-3`}>
      {experiences.map((t, i) => (
        <div
          key={t.name}
          className={`${
            i < 2 ? "border-r border-[#b5b0a8]" : ""
          } py-[18px] ${
            i === 0 ? "pr-4" : i === 2 ? "pl-4" : "px-4"
          }`}
        >
          <div className="font-extrabold text-[13px] uppercase text-[#2a2a2a] mb-0.5">
            {t.name}
          </div>
          <div className="text-[11px] italic text-[#888] mb-2">
            {t.role} · {t.date}
          </div>
          <div className="w-6 h-px bg-[#b5b0a8] mb-2" />
          <p className={`${just} text-xs text-[#444] leading-[1.6]`}>
            {t.quote}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default ExperienceSection;
