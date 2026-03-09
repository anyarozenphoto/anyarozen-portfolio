// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import Index from "./pages/Index";
import Portraits from "./pages/Portraits";
import Maternity from "./pages/Maternity";
import Families from "./pages/Families";
import Lifestyle from "./pages/Lifestyle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter basename="/anyarozen-portfolio">
    <SiteNav />
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/maternity" element={<Maternity />} />
        <Route path="/families" element={<Families />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <SiteFooter />
  </BrowserRouter>
);

export default App;
