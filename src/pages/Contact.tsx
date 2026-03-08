import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-foreground">Get in Touch</h1>
        <div className="flex flex-col gap-6 items-center text-muted-foreground">
          <a
            href="tel:+972545325540"
            className="flex items-center gap-3 text-sm tracking-wide hover:text-foreground transition-colors"
          >
            <Phone size={16} />
            +972-545325540
          </a>
          <a
            href="mailto:anyarozenphoto@gmail.com"
            className="flex items-center gap-3 text-sm tracking-wide hover:text-foreground transition-colors"
          >
            <Mail size={16} />
            anyarozenphoto@gmail.com
          </a>
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100055054287871" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/anyarozen.space/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/972545325540" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
