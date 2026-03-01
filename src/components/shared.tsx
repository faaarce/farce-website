import { useState, useEffect, useRef } from "react";

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis] as const;
}

export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [ref, vis] = useReveal(0.06);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(50px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export const ThinRule = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-px bg-[#1d1d1b]/20 ${className}`} />
);

export const ThickRule = ({ className = "" }: { className?: string }) => (
  <div className={`w-full ${className}`}>
    <div className="h-[3px] bg-[#1d1d1b]" />
    <div className="h-px bg-[#1d1d1b] mt-0.5" />
  </div>
);