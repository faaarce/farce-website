import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Nav = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#e8e0d0]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="font-['IM_Fell_English_SC'] text-xs md:text-sm text-[#1d1d1b] tracking-tight">
        Jakarta, Indonesia
      </div>
      <Link
        to="/"
        className="font-['UnifrakturMaguntia'] text-sm md:text-lg text-[#1d1d1b] absolute left-1/2 -translate-x-1/2 no-underline hover:opacity-70 transition-opacity"
      >
        The Developer Portfolio
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="z-[60] flex flex-col items-end gap-[5px] p-2 bg-transparent border-none cursor-pointer"
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-[26px] h-[2px] transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)]"
            style={{
              background: menuOpen ? "#f0e8d8" : "#1d1d1b",
              transform: menuOpen
                ? i === 0
                  ? "rotate(45deg) translateY(1px)"
                  : i === 2
                  ? "rotate(-45deg) translateY(-1px)"
                  : "scaleX(0)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>
    </nav>
  );
};

export const MenuOverlay = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "INDEX", to: "/", strike: location.pathname === "/" },
    { label: "ABOUT", to: "/about", strike: location.pathname === "/about" },
    { label: "CONTACT", to: "mailto:farisariep@gmail.com", external: true, strike: false },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/farisarie/" },
    { label: "GitHub", href: "https://github.com/farisarie" },
    { label: "Email", href: "mailto:farisariep@gmail.com" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[45] bg-[#1d1d1b] flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {menuItems.map((item, i) => (
        <button
          key={item.label}
          onClick={() => {
            onClose();
            if (item.external) {
              window.location.href = item.to;
            } else {
              navigate(item.to);
            }
          }}
          className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-black text-[#e8e0d0] bg-transparent border-none cursor-pointer relative leading-tight tracking-tight transition-all duration-500"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "none" : "translateY(40px)",
            transitionDelay: `${0.2 + i * 0.1}s`,
          }}
        >
          {item.label}
          {item.strike && (
            <div className="absolute -left-[5%] -right-[5%] top-[48%] h-1 bg-[#c85a3a]" />
          )}
        </button>
      ))}
      <div className="flex gap-4 mt-10">
        {socials.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['IM_Fell_English_SC'] text-xs text-[#e8e0d0] no-underline uppercase tracking-[0.15em] transition-opacity duration-500"
            style={{
              opacity: open ? 0.7 : 0,
              transitionDelay: `${0.5 + i * 0.05}s`,
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
};