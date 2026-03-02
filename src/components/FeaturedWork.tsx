import { Reveal } from "./shared";

/* ─── Featured Work Bottom (3-col: project | ALL WORK! | project) ─── */
/* Matches Miranda's bottom section on About & Legal pages */
export const FeaturedWorkBottom = () => (
  <Reveal>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 md:py-14 px-6 md:px-10 lg:px-12">
      {/* Left project */}
      <div>
        <div className="w-full aspect-[4/3] mb-3 overflow-hidden">
          <img
            src="/cyclouse.png"
            alt="Cyclouse"
            className="w-full h-full object-cover block"
          />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-['Playfair_Display'] text-sm md:text-base font-black text-[#1d1d1b] uppercase">
            Cyclouse
          </span>
        </div>
        <p className="font-['Playfair_Display'] text-sm font-light text-[#3a3a38] leading-relaxed">
          iOS cycling e-commerce app with MVVM, RxSwift, Core Data, and
          Alamofire.
        </p>
      </div>

      {/* Center: ALL WORK! */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#1d1d1b] uppercase mb-4">
          All Work!
        </h2>
        <p className="font-['Playfair_Display'] text-base md:text-lg text-[#1d1d1b] leading-snug font-light italic mb-6">
          A featured work selection — spanning the last few years.
        </p>
        <p className="font-['IM_Fell_English_SC'] text-xs text-[#3a3a38]">
          <strong>Tip!</strong> Drag sideways to navigate
        </p>
      </div>

      {/* Right project */}
      <div>
        <div className="w-full aspect-[4/3] mb-3 overflow-hidden bg-gradient-to-br from-[#2d3436] via-[#636e72] to-[#b2bec3] flex items-center justify-center">
          <div className="font-['Playfair_Display'] text-3xl font-black text-[#e8e0d0]/10 uppercase">
            Siniar
          </div>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-['Playfair_Display'] text-sm md:text-base font-black text-[#1d1d1b] uppercase">
            Siniar
          </span>
          <span className="bg-[#c85a3a] text-white text-[8px] font-bold py-0.5 px-1.5 rounded-sm uppercase tracking-widest">
            New
          </span>
        </div>
        <p className="font-['Playfair_Display'] text-sm font-light text-[#3a3a38] leading-relaxed">
          Simple podcast app using iTunes API and AVKit media player.
        </p>
      </div>
    </section>
  </Reveal>
);