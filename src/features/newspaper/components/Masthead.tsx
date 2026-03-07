import type { FC } from "react";
import { lbl, rule } from "../styles/classNames";

const BYLINE_ITEMS = [
  "MOHAMMAD FARIS ARIE PRASETYO",
  "SOFTWARE ENGINEER",
  "PADJADJARAN UNIVERSITY",
];

const Masthead: FC = () => (
  <>
    {/* Top bar */}
    <div className={`${rule} pt-2.5 pb-1.5 flex justify-between items-baseline`}>
      <span className={lbl}>VOL. I · NO. 1</span>
      <span className={lbl}>JAKARTA, INDONESIA</span>
      <span className={lbl}>EST. 2022</span>
    </div>

    {/* Title frame */}
    <div className="text-center pt-5 pb-1.5">
      <div className="border-t-[4px] border-t-[#2a2a2a] border-b border-b-[#2a2a2a] py-1 mb-1.5">
        <div className="border-t border-t-[#2a2a2a] border-b-[4px] border-b-[#2a2a2a] py-3.5">
          <h1 className="text-[clamp(36px,6vw,72px)] font-extrabold text-[#2a2a2a] uppercase tracking-[0.08em] leading-none">
            THE PAPER PORTFOLIO
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 pt-1">
        {BYLINE_ITEMS.map((text, i) => (
          <span key={text} className="flex items-center gap-4">
            {i > 0 && <span className="text-[#b5b0a8]">★</span>}
            <span className={`${lbl} !text-[8px]`}>{text}</span>
          </span>
        ))}
      </div>
    </div>

    <div className="border-t border-[#b5b0a8] mt-2" />
  </>
);

export default Masthead;
