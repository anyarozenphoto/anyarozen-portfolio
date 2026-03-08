import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import Index from "./pages/Index";
import Portraits from "./pages/Portraits";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <SiteNav />
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <SiteFooter />
  </BrowserRouter>
);

export default App;
