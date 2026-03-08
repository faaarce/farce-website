import type { FC } from "react";
import { rule, colR, lbl, just, imgB, badge } from "../styles/classNames";
import { IMAGES } from "../data";

const FeaturedWorks: FC = () => (
  <section aria-labelledby="works-heading">
    <div className={`${rule} pt-5`}>
      <div className={`${lbl} mb-3`} id="works-heading">FEATURED WORKS</div>
    </div>

    <div className={`${rule} grid grid-cols-3`}>
      {/* Cyclouse */}
      <article className={`${colR} pr-[18px] pt-4 pb-5`}>
        <img
          src={IMAGES.cyclouse}
          alt="Cyclouse — cycling e-commerce iOS app screenshot"
          loading="lazy"
          width={400}
          height={300}
          className={`${imgB} w-full aspect-[4/3] object-cover block mb-2.5`}
        />
        <h3 className="font-extrabold text-sm uppercase text-[#2a2a2a] mb-[3px]">
          CYCLOUSE <span className={badge}>NEW</span>
        </h3>
        <p className={`${just} text-[11px] text-[#666] leading-[1.55]`}>
          A cycling e-commerce iOS app built with Swift, RxSwift reactive
          programming, MVVM architecture, and Core Data management.
        </p>
      </article>

      {/* Center */}
      <div
        className={`${colR} flex flex-col items-center justify-center text-center px-[18px] py-4`}
      >
        <h2 className="font-extrabold text-[clamp(22px,3vw,36px)] uppercase text-[#2a2a2a] leading-none mb-2.5 -tracking-[0.01em]">
          ALL WORK!
        </h2>
        <div className="w-10 h-px bg-[#b5b0a8] mb-2.5" aria-hidden="true" />
        <p className="text-sm italic text-[#555] leading-[1.45] mb-3 max-w-[220px]">
          A featured selection of the latest work — spanning the last years.
        </p>
        <p className={`${lbl} !text-[8px]`}>TIP: DRAG SIDEWAYS TO NAVIGATE</p>
      </div>

      {/* Siniar */}
      <article className="pl-[18px] pt-4 pb-5">
        <img
          src={IMAGES.siniar}
          alt="Siniar — podcast app using iTunes API"
          loading="lazy"
          width={400}
          height={300}
          className={`${imgB} w-full aspect-[4/3] object-cover block mb-2.5`}
        />
        <h3 className="font-extrabold text-sm uppercase text-[#2a2a2a] mb-[3px]">
          SINIAR <span className={badge}>APP</span>
        </h3>
        <p className={`${just} text-[11px] text-[#666] leading-[1.55]`}>
          Simple Podcast App using iTunes API and AVKit for developing the media
          player with a clean, intuitive interface.
        </p>
      </article>
    </div>
  </section>
);

export default FeaturedWorks;
