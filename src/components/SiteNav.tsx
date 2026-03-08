import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // ✏️ To add a new page to the nav, just add a new object here:
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
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="Anya Rozen" className="h-28 md:h-32 w-auto" />
          </Link>

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

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

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
    </>
  );
};

export default SiteNav;
