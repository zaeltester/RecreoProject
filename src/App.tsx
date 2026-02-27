import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="font-sans text-stone-900 bg-stone-50 dark:bg-stone-950 dark:text-stone-100 selection:bg-green-100 selection:text-green-900 relative transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <ScrollToTop />
      <Hero isDark={isDark} />
      <Features />
      <Gallery />
      <Pricing />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/573138524910" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
