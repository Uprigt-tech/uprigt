import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Footer, ScrollToTop } from '@/components/layout';
import { Home } from '@/pages/Home';
import { Portfolio } from '@/pages/Portfolio';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';

// Component to handle route animations and ensure proper scroll
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

// Initial scroll effect - runs once when app mounts
function InitialScroll() {
  useEffect(() => {
    // Force scroll to top immediately on app mount
    window.scrollTo(0, 0);
    
    // Also try after a short delay to ensure it works
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);
  
  return null;
}

function App() {
  return (
    <Router>
      <InitialScroll />
      <ScrollToTop />
      <div className="min-h-screen bg-navy-300 text-white overflow-x-hidden">
        <Navbar />
        <main className="relative">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
