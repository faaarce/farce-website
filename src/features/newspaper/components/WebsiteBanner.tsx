import type { FC } from "react";
import { rule, imgB } from "../styles/classNames";
import { IMAGES } from "../data";

const WebsiteBanner: FC = () => (
  <div className={`${rule} grid grid-cols-[2.2fr_1fr]`}>
    <div className="bg-[#2a2a2a] py-[clamp(20px,3.5vw,44px)] px-6 flex items-center">
      <h2 className="text-[clamp(52px,11vw,160px)] font-extrabold text-[#d5d0c9] uppercase -tracking-[0.03em] leading-[0.85]">
        WEBSITE
      </h2>
    </div>
    <div className="border-l border-[#b5b0a8] px-5 py-4 flex flex-col items-center justify-center">
      <div
        className={`${imgB} w-[60px] h-[60px] rounded-sm mb-2 overflow-hidden`}
      >
        <img
          src={IMAGES.portrait}
          alt="Faris"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-base italic text-[#555] mb-1.5">~ Faris ~</div>
      <div className="text-[9px] text-[#888] tracking-[1px]">
        NAME: <span className="font-extrabold">Mohammad Faris</span>
      </div>
      <div className="text-[9px] text-[#888] tracking-[1px] mt-0.5">
        UNIV: <span className="font-extrabold">Padjadjaran</span>
      </div>
    </div>
  </div>
);

export default WebsiteBanner;
