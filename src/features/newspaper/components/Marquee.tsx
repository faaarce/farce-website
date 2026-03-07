import type { FC } from "react";
import { MARQUEE_REPEAT_COUNT } from "../data";

const Marquee: FC = () => (
  <div className="bg-[#2a2a2a] overflow-hidden py-[18px] -mx-7">
    <div
      className="flex gap-12 whitespace-nowrap"
      style={{ animation: "marqueeScroll 16s linear infinite" }}
    >
      {[...Array(MARQUEE_REPEAT_COUNT)].map((_, i) => (
        <span
          key={i}
          className="font-extrabold text-[clamp(24px,4.5vw,48px)] text-[#d5d0c9] flex items-center gap-5 shrink-0"
        >
          Let&apos;s create something together
          <span className="bg-[#d5d0c9] text-[#2a2a2a] text-[clamp(10px,1.5vw,16px)] px-5 py-2 font-extrabold tracking-[2px] uppercase">
            EMAIL ME
          </span>
          <span className="text-[#666] text-sm">★</span>
        </span>
      ))}
    </div>
    <style>{`@keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
  </div>
);

export default Marquee;
