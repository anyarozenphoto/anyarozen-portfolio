import { useFadeIn } from "@/hooks/useFadeIn";

const Contact = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Блок с фотографией */}
        <div className="w-full md:w-1/2 max-w-sm">
          <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-sm">
            <img 
              src={`${import.meta.env.BASE_URL}images/contact/anya-rozen-photographer-israel.webp`} 
              alt="Anya Rozen - Professional photographer in Israel specializing in portraits, maternity and kids"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Блок с контактной информацией */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-serif text-3xl md:text-4xl mb-8 tracking-wide">Get in touch</h1>
          
          <div className="flex flex-col gap-6 items-center md:items-start text-foreground/80">
            <a
              href="tel:+972545325540"
              className="text-base tracking-widest hover:text-primary transition-colors border-b border-transparent hover:border-foreground/20"
            >
              +972-545325540
            </a>
            
            <a
              href="mailto:anyarozenphoto@gmail.com"
              className="text-base tracking-widest hover:text-primary transition-colors border-b border-transparent hover:border-foreground/20"
            >
              anyarozenphoto@gmail.com
            </a>

            {/* Социальные сети */}
            <div className="flex items-center gap-4 mt-4 text-sm tracking-[0.2em] uppercase text-foreground/60">
              <a 
                href="https://www.facebook.com/profile.php?id=100055054287871" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                Facebook
              </a>
              <span className="text-foreground/20">/</span>
              <a 
                href="https://www.instagram.com/anyarozen.space/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <span className="text-foreground/20">/</span>
              <a 
                href="https://wa.me/972545325540" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;