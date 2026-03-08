import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <a href="tel:+972545325540" className="flex items-center gap-2 text-xs tracking-wide hover:text-foreground transition-colors">
            <Phone size={14} />
            +972-545325540
          </a>
          <a href="mailto:anyarozenphoto@gmail.com" className="flex items-center gap-2 text-xs tracking-wide hover:text-foreground transition-colors">
            <Mail size={14} />
            anyarozenphoto@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="https://www.facebook.com/profile.php?id=100055054287871" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/anyarozen.space/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/972545325540" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">
          ©2025 Anya Rozen — all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
