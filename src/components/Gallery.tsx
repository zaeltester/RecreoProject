import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "https://picsum.photos/seed/stream_nature/1200/800",
    alt: "Fuentes hídricas naturales",
    caption: "Riqueza Hídrica"
  },
  {
    src: "https://picsum.photos/seed/cows_grazing/1200/800",
    alt: "Ganadería y Pastos",
    caption: "Aptitud Agropecuaria"
  },
  {
    src: "https://picsum.photos/seed/glamping_cabin/1200/800",
    alt: "Proyectos Turísticos",
    caption: "Ideal para Glamping"
  },
  {
    src: "https://picsum.photos/seed/green_hills_huila/1200/800",
    alt: "Paisajes del Huila",
    caption: "Vistas Panorámicas"
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-stone-100 dark:bg-stone-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">Galería del Proyecto</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400">Un vistazo a tu futuro hogar en el campo</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group bg-stone-200 dark:bg-stone-800">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-white text-3xl font-bold mb-2">{images[currentIndex].caption}</h3>
                  <p className="text-white/90 text-lg">{images[currentIndex].alt}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prevImage} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Anterior imagen"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextImage} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
