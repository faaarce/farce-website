import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { MenuOverlay, Nav } from "./Nav";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const hasPlayed = useRef(false);
  const location = useLocation();

  // Close menu + scroll top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock scroll during intro
  useEffect(() => {
    if (hasPlayed.current) return;
    hasPlayed.current = true;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleAnimationComplete = () => {
    setIntroDone(true);
    document.body.style.overflow = "";
  };

  return (
    <div className="min-h-screen bg-[#1d1d1b] flex justify-center overflow-hidden">
      <motion.div
        className="w-full max-w-[1400px] bg-[#e8e0d0] relative shadow-[0_0_80px_rgba(0,0,0,0.35),inset_0_0_100px_rgba(0,0,0,0.02)]"
        initial={{ y: "100vh", rotate: -12, scale: 0.45 }}
        animate={{ y: 0, rotate: 0, scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
          y: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
          rotate: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
        }}
        style={{ transformOrigin: "center bottom" }}
        onAnimationComplete={handleAnimationComplete}
      >
        {/* Paper grain overlay */}
        <div
          className="absolute -inset-[20%] opacity-[0.025] bg-repeat animate-grain pointer-events-none z-[2] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px",
          }}
        />
        <div className="relative z-[3]">
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
          {children}
        </div>
      </motion.div>
    </div>
  );
};