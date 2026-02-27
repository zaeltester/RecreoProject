import { Phone, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/nature_huila/1920/1080" 
          alt="Paisaje Huila" 
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            isDark ? 'brightness-[0.4] grayscale-[0.3] contrast-[1.1]' : ''
          }`}
        />
        
        {/* Night Atmosphere Overlay */}
        <div 
          className={`absolute inset-0 bg-indigo-950/50 mix-blend-multiply transition-opacity duration-1000 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Standard Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-600/80 backdrop-blur-sm text-sm font-semibold mb-4 border border-green-400/30">
            Proyecto Exclusivo en el Huila
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Parcelación Agroturística <br />
            <span className="text-green-400">El Recreo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100 font-light">
            Construye tu finca soñada a solo 10 minutos de Palermo, vía a Teruel. Naturaleza, tranquilidad y desarrollo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contacto" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-green-900/20"
            >
              <Phone className="w-5 h-5" />
              Contáctanos: 313 852 4910
            </a>
            <a 
              href="#detalles" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
            >
              Ver Detalles <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-12 h-12 drop-shadow-lg" />
      </motion.div>
    </div>
  );
}
