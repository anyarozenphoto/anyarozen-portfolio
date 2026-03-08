import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-12 text-foreground">Get in Touch</h1>
        <div className="flex flex-col gap-6 items-center text-muted-foreground">
          <a
            href="mailto:hello@anyarozen.com"
            className="flex items-center gap-3 text-sm tracking-wide hover:text-foreground transition-colors"
          >
            <Mail size={16} />
            hello@anyarozen.com
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-3 text-sm tracking-wide hover:text-foreground transition-colors"
          >
            <Phone size={16} />
            +1 234 567 890
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm tracking-wide hover:text-foreground transition-colors"
          >
            <Instagram size={16} />
            @anyarozen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
