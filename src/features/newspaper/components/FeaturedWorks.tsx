import type { FC } from "react";
import { rule, colR, lbl, just, imgB, badge } from "../styles/classNames";
import { IMAGES } from "../data";

const FeaturedWorks: FC = () => (
  <>
    <div className={`${rule} pt-5`}>
      <div className={`${lbl} mb-3`}>FEATURED WORKS</div>
    </div>

    <div className={`${rule} grid grid-cols-3`}>
      {/* Cyclouse */}
      <div className={`${colR} pr-[18px] pt-4 pb-5`}>
        <img
          src={IMAGES.cyclouse}
          alt="Cyclouse App"
          className={`${imgB} w-full aspect-[4/3] object-cover block mb-2.5`}
        />
        <div className="font-extrabold text-sm uppercase text-[#2a2a2a] mb-[3px]">
          CYCLOUSE <span className={badge}>NEW</span>
        </div>
        <p className={`${just} text-[11px] text-[#666] leading-[1.55]`}>
          A cycling e-commerce iOS app built with Swift, RxSwift reactive
          programming, MVVM architecture, and Core Data management.
        </p>
      </div>

      {/* Center */}
      <div
        className={`${colR} flex flex-col items-center justify-center text-center px-[18px] py-4`}
      >
        <h2 className="font-extrabold text-[clamp(22px,3vw,36px)] uppercase text-[#2a2a2a] leading-none mb-2.5 -tracking-[0.01em]">
          ALL WORK!
        </h2>
        <div className="w-10 h-px bg-[#b5b0a8] mb-2.5" />
        <p className="text-sm italic text-[#555] leading-[1.45] mb-3 max-w-[220px]">
          A featured selection of the latest work — spanning the last years.
        </p>
        <p className={`${lbl} !text-[8px]`}>TIP: DRAG SIDEWAYS TO NAVIGATE</p>
      </div>

      {/* Siniar */}
      <div className="pl-[18px] pt-4 pb-5">
        <img
          src={IMAGES.siniar}
          alt="Siniar App"
          className={`${imgB} w-full aspect-[4/3] object-cover block mb-2.5`}
        />
        <div className="font-extrabold text-sm uppercase text-[#2a2a2a] mb-[3px]">
          SINIAR <span className={badge}>APP</span>
        </div>
        <p className={`${just} text-[11px] text-[#666] leading-[1.55]`}>
          Simple Podcast App using iTunes API and AVKit for developing the media
          player with a clean, intuitive interface.
        </p>
      </div>
    </div>
  </>
);

export default FeaturedWorks;
