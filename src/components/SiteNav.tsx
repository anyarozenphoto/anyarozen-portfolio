import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navigation } from "@/data/navigation";

const SiteNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const visibleLinks = navigation.filter((n) => !n.hidden);
  const isActive = (to: string) => location.pathname === to;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
        {/* Mobile header — sandwich & contact align to bottom of logo */}
        <div className="relative md:hidden px-4 py-2">
          <Link to="/" onClick={() => setOpen(false)} className="flex justify-center">
            <img src={logo} alt="Anya Rozen" className="h-11 w-auto object-contain" />
          </Link>

          {/* Left: menu button, pinned to bottom of container */}
          <button
            onClick={() => setOpen(!open)}
            className="absolute left-4 bottom-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Right: contact link, pinned to bottom of container */}
          <Link
            to="/contact"
            className="absolute right-4 bottom-2.5 font-sans text-[10px] tracking-[0.15em] uppercase text-foreground/70"
          >
            Contact
          </Link>
        </div>

        {/* Desktop/Tablet header */}
        <div className="hidden md:flex flex-col items-center py-4">
          <Link to="/">
            <img src={logo} alt="Anya Rozen" className="h-14 w-auto" />
          </Link>
          <div className="flex items-center gap-8 mt-2">
            {visibleLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-opacity ${
                  isActive(link.to) ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="md:hidden bg-background border-t border-border px-5 py-5 flex flex-col gap-4">
            {visibleLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-[0.15em] uppercase text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default SiteNav;
