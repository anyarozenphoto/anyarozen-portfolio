const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        {/* Блок с фото */}
        <div className="mb-8 max-w-[300px] mx-auto overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}images/contact/anya-rozen-photographer-israel.webp`} 
            alt="Anya Rozen - Photographer"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Типографика и ссылки */}
        <div className="flex flex-col gap-4 items-center text-foreground/80">
          <a
            href="tel:+972545325540"
            className="text-sm tracking-wide hover:text-foreground transition-colors"
          >
            +972-545325540
          </a>
          <a
            href="mailto:anyarozenphoto@gmail.com"
            className="text-sm tracking-wide hover:text-foreground transition-colors"
          >
            anyarozenphoto@gmail.com
          </a>
          <div className="flex items-center gap-2 mt-1 text-sm tracking-wide">
            <a href="https://www.facebook.com/profile.php?id=100055054287871" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Facebook
            </a>
            <span className="text-foreground/30">·</span>
            <a href="https://www.instagram.com/anyarozen.space/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Instagram
            </a>
            <span className="text-foreground/30">·</span>
            <a href="https://wa.me/972545325540" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
