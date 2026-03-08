import { Mail, Phone, Instagram } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif text-xl font-light text-foreground">Anya Rozen</p>
        <div className="flex items-center gap-8 text-muted-foreground">
          <a href="mailto:hello@anyarozen.com" className="flex items-center gap-2 text-xs tracking-wide uppercase hover:text-foreground transition-colors">
            <Mail size={14} />
            <span className="hidden sm:inline">hello@anyarozen.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 text-xs tracking-wide uppercase hover:text-foreground transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">+1 234 567 890</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
