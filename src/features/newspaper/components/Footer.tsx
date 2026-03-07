import type { FC } from "react";
import { IMAGES, SOCIAL_LINKS } from "../data";

const Footer: FC = () => (
  <div className="flex justify-between items-center py-3 pb-4">
    <div className="font-extrabold text-[11px] uppercase text-[#2a2a2a] flex items-center gap-2 tracking-[0.5px]">
      FARIS &copy; 2026
      <img
        src={IMAGES.portrait}
        alt=""
        className="w-3.5 h-3.5 rounded-full object-cover"
      />
      <span className="font-normal italic text-[#888] text-[10px] underline cursor-pointer normal-case">
        Legal
      </span>
    </div>
    <div className="flex gap-3.5 text-[10px] text-[#555] tracking-[1.5px] uppercase">
      <a
        href={SOCIAL_LINKS.linkedin}
        className="text-[#555] no-underline hover:underline"
      >
        LINKEDIN
      </a>
      <span className="text-[#b5b0a8]">·</span>
      <a
        href={SOCIAL_LINKS.github}
        className="text-[#555] no-underline hover:underline"
      >
        GITHUB
      </a>
      <span className="text-[#b5b0a8]">·</span>
      <a
        href={SOCIAL_LINKS.email}
        className="text-[#555] no-underline hover:underline"
      >
        EMAIL
      </a>
    </div>
  </div>
);

export default Footer;
