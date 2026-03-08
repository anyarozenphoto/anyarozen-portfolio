import { Instagram, Facebook } from "lucide-react";
import { Phone, MessageCircle } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer>
      {/* Dark block with contact + socials */}
      <div className="bg-muted-foreground py-4 px-6 flex items-center justify-center gap-4 flex-wrap">
        <p className="text-primary-foreground text-xs tracking-wide">
          <a href="tel:+972545325540" className="hover:underline">+972-545325540</a>
          <span className="mx-2">·</span>
          <a href="mailto:anyarozenphoto@gmail.com" className="hover:underline">anyarozenphoto@gmail.com</a>
        </p>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/profile.php?id=100055054287871" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="https://www.instagram.com/anyarozen.space/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://wa.me/972545325540" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="WhatsApp">
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
      <div className="py-2 px-6 text-center">
        <p className="text-[10px] text-muted-foreground tracking-wide">
          ©2025 Anya Rozen - all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
