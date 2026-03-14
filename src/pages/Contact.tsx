// src/pages/Contact.tsx

// We don't need to import the image because it's in /public.
// We can reference it directly by path: /images/contact/anya-rozen-photographer.webp

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Responsive layout:
         - on mobile: text first, image below
         - on desktop: image and text side by side
      */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        {/* Text block (typography stays the same).
            On mobile it appears first, on desktop it stays on the right. */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="text-center md:text-left">
            <div className="flex flex-col gap-4 items-center md:items-start text-foreground/80">
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
                <a
                  href="https://www.facebook.com/profile.php?id=100055054287871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Facebook
                </a>
                <span className="text-foreground/30">·</span>
                <a
                  href="https://www.instagram.com/anyarozen.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
                <span className="text-foreground/30">·</span>
                <a
                  href="https://wa.me/972545325540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image block.
            On mobile it appears below the text (order-2),
            on desktop it appears on the left (md:order-1). */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative w-full overflow-hidden rounded-sm">
            {/* Aspect ratio keeps the image looking good on both mobile and desktop */}
            <div className="aspect-[3/4] md:aspect-[4/5]">
              <img
                src="/images/contact/anya-rozen-photographer.webp"
                alt="Portrait of photographer Anya Rozen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
