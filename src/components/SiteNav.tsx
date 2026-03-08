import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/lifestyle", label: "Lifestyle" },
    { to: "/portraits", label: "Portraits" },
    { to: "/contact", label: "Contact" },
  ];

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
        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between px-4 py-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground w-10"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <Link to="/" onClick={() => setOpen(false)} className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Anya Rozen" className="h-12 w-auto" />
          </Link>

          <Link
            to="/contact"
            className="font-sans text-[10px] tracking-[0.15em] uppercase text-foreground/70"
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
            {links.map((link) => (
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
            {links.map((link) => (
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
