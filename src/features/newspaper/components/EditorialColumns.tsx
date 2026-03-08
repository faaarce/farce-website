import type { FC } from "react";
import { rule, colR, lbl, just, imgB } from "../styles/classNames";
import { IMAGES } from "../data";

const EditorialColumns: FC = () => (
  <div className={`${rule} grid grid-cols-[1fr_1.1fr_1.3fr]`}>
    {/* Upcoming */}
    <div className={`${colR} pr-[18px] py-5`}>
      <div className={`${lbl} mb-1.5`}>LATEST</div>
      <h3 className="font-extrabold text-[17px] uppercase text-[#2a2a2a] mb-2.5 -tracking-[0.01em]">
        UPCOMING NEXT
      </h3>
      <div className="w-[30px] h-0.5 bg-[#2a2a2a] mb-2.5" aria-hidden="true" />
      <p className={`${just} text-[13px] text-[#444] leading-[1.6] mb-3`}>
        Fresh entry — A selected work from the latest digital releases.
      </p>
      <p className={`${lbl} !text-[8px]`}>TIP! CLICK ON THE IMAGE TO EXPLORE</p>
    </div>

    {/* Timepad */}
    <div className={`${colR} px-[18px] py-5`}>
      <img
        src={IMAGES.timepad}
        alt="Timepad — time management application"
        loading="lazy"
        width={400}
        height={250}
        className={`${imgB} w-full aspect-[16/10] object-cover mb-2.5 block`}
      />
      <div className={`${lbl} mb-1`}>FEATURED PROJECT</div>
      <h4 className="font-extrabold text-sm uppercase text-[#2a2a2a] mb-1.5">
        TIMEPAD
      </h4>
      <p className={`${just} text-[11px] text-[#666] leading-[1.6]`}>
        Time management app implementing Realm for data storing and Chartview
        library for visualizing user productivity patterns.
      </p>
    </div>

    {/* Manifesto */}
    <div className="pl-[18px] py-5">
      <h3 className="font-extrabold text-[clamp(26px,4.5vw,48px)] uppercase text-[#2a2a2a] leading-[0.92] mb-1 -tracking-[0.02em]">
        THINK, CREATE
      </h3>
      <h3 className="font-extrabold text-[clamp(32px,5.5vw,60px)] uppercase text-[#2a2a2a] leading-[0.88] mb-4 -tracking-[0.03em]">
        DELIVER
      </h3>
      <p className={`${just} text-sm text-[#333] leading-[1.65] mb-3`}>
        <span className="float-left text-[44px] font-extrabold leading-[0.75] mr-[5px] mt-[5px] text-[#2a2a2a]" aria-hidden="true">
          A
        </span>
        &nbsp;strong project is created by deep collaboration. I design,
        develop, and deliver applications that solve real problems — from iOS
        apps to full-stack web platforms.
      </p>
      <p className={`${just} text-[13px] text-[#555] leading-[1.6] italic`}>
        Like an artisan, I start from raw code and give life to an iconic
        product, starting from Clean Architecture that guides the project to
        production.
      </p>
    </div>
  </div>
);

export default EditorialColumns;
