import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav, MenuOverlay } from "./Nav";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change & scroll to top
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#4a6d52] flex justify-center">
      <div className="w-full max-w-[1400px] bg-[#e8e0d0] relative shadow-[0_0_80px_rgba(0,0,0,0.35),inset_0_0_100px_rgba(0,0,0,0.02)]">
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
      </div>
    </div>
  );
};