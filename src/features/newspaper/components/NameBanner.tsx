import type { FC } from "react";
import { rule } from "../styles/classNames";

const NameBanner: FC = () => (
  <>
    <div className="bg-[#2a2a2a] py-[clamp(20px,3.5vw,40px)] px-[clamp(16px,3vw,36px)] text-center mt-3">
      <h1 className="text-[clamp(72px,16vw,220px)] font-extrabold text-[#d5d0c9] uppercase -tracking-[0.02em] leading-[0.82]">
        FARIS
      </h1>
    </div>

    {/* Dateline */}
    <div className={`${rule} flex justify-between items-center py-2`}>
      <span className="text-[11px] italic text-[#888]">
        Software Engineer · Jakarta, Indonesia
      </span>
      <span className="text-[11px] italic text-[#888]">Page 1 of 1</span>
    </div>
  </>
);

export default NameBanner;
