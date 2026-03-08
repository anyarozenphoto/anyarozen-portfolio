import { useFadeIn } from "@/hooks/useFadeIn";

// =============================================
// ✏️ ABOUT PAGE — edit the text below to update your bio
// =============================================

const About = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="pt-24 pb-16 px-6 md:px-12 min-h-screen">
      <div className="fade-in-section max-w-2xl mx-auto">
        <h1 className="font-sans text-sm tracking-[0.25em] uppercase text-foreground mb-8">
          About
        </h1>

        {/* ✏️ EDIT YOUR BIO TEXT BELOW */}
        <div className="space-y-4 text-foreground/80 text-sm leading-relaxed tracking-wide">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        {/* ✏️ END BIO TEXT */}
      </div>
    </div>
  );
};

export default About;
