import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
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
        <div className="flex items-center justify-between px-5 md:px-10 py-3">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="Anya Rozen" className="h-14 md:h-16 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile: show Contact always + hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <Link
              to="/contact"
              className="font-sans text-xs tracking-[0.15em] uppercase text-foreground/70"
            >
              Contact
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

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
