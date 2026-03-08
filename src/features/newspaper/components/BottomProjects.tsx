import type { FC } from "react";
import { rule, colR, lbl, just, imgB, badgeSm } from "../styles/classNames";
import { IMAGES } from "../data";

const BottomProjects: FC = () => (
  <section aria-label="More projects">
    <div className="pt-1">
      <div className={`${lbl} mb-2.5`}>MORE FROM THE ARCHIVE</div>
    </div>

    <div className={`${rule} grid grid-cols-[1fr_1.2fr_1fr]`}>
      <article className={`${colR} pr-[18px] pb-5`}>
        <img
          src={IMAGES.cyclouse}
          alt="Cyclouse app"
          loading="lazy"
          width={400}
          height={225}
          className={`${imgB} w-full aspect-video object-cover block mb-2.5`}
        />
        <h3 className="font-extrabold text-[13px] uppercase text-[#2a2a2a] mb-[3px]">
          CYCLOUSE <span className={badgeSm}>NEW</span>
        </h3>
        <p className={`${just} text-[11px] text-[#666] leading-[1.55]`}>
          Cycling e-commerce iOS app with Swift, RxSwift, MVVM, Core Data, and Alamofire.
        </p>
      </article>

      <div className={`${colR} flex flex-col items-center justify-center text-center px-[18px] py-2.5`}>
        <h3 className="font-extrabold text-[clamp(22px,3vw,34px)] uppercase text-[#2a2a2a] leading-none mb-2">
          ALL WORK!
        </h3>
        <div className="w-[30px] h-px bg-[#b5b0a8] mb-2" aria-hidden="true" />
        <p className="text-sm italic text-[#444] leading-[1.45] mb-2.5 max-w-[240px]">
          Handpicked highlights — spanning the last few years.
        </p>
        <p className={`${lbl} !text-[8px]`}>TIP! CLICK ON THE SIDES TO EXPLORE</p>
      </div>

      <article className="pl-[18px] pb-5">
        <img
          src={IMAGES.timepadWide}
          alt="Timepad app"
          loading="lazy"
          width={400}
          height={225}
          className={`${imgB} w-full aspect-video object-cover block mb-2.5`}
        />
        <h3 className="font-extrabold text-[13px] uppercase text-[#2a2a2a] mb-[3px]">
          TIMEPAD <span className={badgeSm}>APP</span>
        </h3>
        <p className={`${just} text-[11px] text-[#666] leading-[1.55]`}>
          Time management app with Realm for data storing and Chartview library.
        </p>
      </article>
    </div>
  </section>
);

export default BottomProjects;
