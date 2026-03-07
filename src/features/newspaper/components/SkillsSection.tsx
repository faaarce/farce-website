import type { FC } from "react";
import { ruleThick, lbl } from "../styles/classNames";
import { skills } from "../data";

const SkillsSection: FC = () => (
  <>
    <div className="pt-1">
      <div className={`${lbl} mb-1`}>TECHNICAL INDEX</div>
      <div className="border-t-2 border-[#2a2a2a]" />
    </div>

    <div className={`${ruleThick} grid grid-cols-4`}>
      {skills.map((cat, i) => (
        <div
          key={cat.title}
          className={`${
            i < 3 ? "border-r border-[#b5b0a8]" : ""
          } py-3.5 px-3.5 ${i === 0 ? "!pl-0" : ""}`}
        >
          <h4 className="font-extrabold text-[11px] uppercase text-[#2a2a2a] mb-1.5 tracking-[1px]">
            {cat.title}
          </h4>
          <div className="w-5 h-px bg-[#b5b0a8] mb-1.5" />
          <p className="text-[10.5px] text-[#666] leading-[1.65]">
            {cat.items}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default SkillsSection;
