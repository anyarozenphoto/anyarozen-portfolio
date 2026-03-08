import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/gallery?category=portraits", label: "Portraits" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname + location.search === to || location.pathname === to.split("?")[0];
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link to="/">
          <img src={logo} alt="Anya Rozen" className="h-20 md:h-24 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-sans text-xs tracking-[0.2em] uppercase transition-opacity ${
                isActive(link.to) ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
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
  );
};

export default SiteNav;
