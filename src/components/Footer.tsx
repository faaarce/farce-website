import { Reveal } from "./shared";




const socials = [
 { label: "LinkedIn", href: "https://www.linkedin.com/in/farisarie/" },
 { label: "GitHub", href: "https://github.com/farisarie" },
 { label: "Email", href: "mailto:farisariep@gmail.com" },
];


export const Footer = () => (
 <footer className="pt-10 pb-8 px-6 md:px-10 lg:px-12 border-t border-[#1d1d1b]/10">
   <Reveal>
     <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
       <div>
         <div className="font-['UnifrakturMaguntia'] text-base md:text-lg text-[#1d1d1b] mb-1">
           The Developer Portfolio
         </div>
         <div className="font-['IM_Fell_English_SC'] text-[10px] md:text-xs text-[#3a3a38] tracking-wide">
           Mohammad Faris Arie Prasetyo © 2025
         </div>
       </div>
       <div className="flex gap-5 flex-wrap">
         {socials.map((s) => (
           <a
             key={s.label}
             href={s.href}
             target="_blank"
             rel="noopener noreferrer"
             className="font-['IM_Fell_English_SC'] text-[11px] md:text-xs text-[#1d1d1b] no-underline uppercase tracking-widest border-b border-[#1d1d1b]/20 pb-0.5 hover:border-[#1d1d1b] transition-colors"
           >
             {s.label}
           </a>
         ))}
       </div>
     </div>
   </Reveal>


   {/* Marquee */}
   <div className="overflow-hidden whitespace-nowrap">
     <div className="inline-block animate-marquee font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-black text-[#1d1d1b] opacity-5 uppercase tracking-tight">
       {Array(5)
         .fill("Faris · Software Engineer · Jakarta · ")
         .join("")}
     </div>
   </div>
 </footer>
);


/* Email CTA marquee like Miranda's "Let's create something together EMAIL ME" */
export const EmailMarquee = () => (
 <Reveal>
   <div className="py-6 md:py-10 border-t border-b border-[#1d1d1b]/20 overflow-hidden whitespace-nowrap">
     <div className="inline-block animate-marquee-slow">
       {Array(4)
         .fill(null)
         .map((_, i) => (
           <span key={i} className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl font-light italic text-[#1d1d1b] tracking-tight">
             Let's build something together{" "}
             <a
               href="mailto:farisariep@gmail.com"
               className="font-['Playfair_Display'] font-black not-italic uppercase no-underline text-[#1d1d1b] border-2 border-[#1d1d1b] px-3 md:px-5 py-1 md:py-2 mx-3 hover:bg-[#1d1d1b] hover:text-[#e8e0d0] transition-colors inline-block"
             >
               Email Me
             </a>{" "}
           </span>
         ))}
     </div>
   </div>
 </Reveal>
);
