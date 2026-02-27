import { motion } from 'motion/react';

const images = [
  {
    src: "https://picsum.photos/seed/stream_nature/800/600",
    alt: "Fuentes hídricas naturales",
    caption: "Riqueza Hídrica"
  },
  {
    src: "https://picsum.photos/seed/cows_grazing/800/600",
    alt: "Ganadería y Pastos",
    caption: "Aptitud Agropecuaria"
  },
  {
    src: "https://picsum.photos/seed/glamping_cabin/800/600",
    alt: "Proyectos Turísticos",
    caption: "Ideal para Glamping"
  },
  {
    src: "https://picsum.photos/seed/green_hills_huila/800/600",
    alt: "Paisajes del Huila",
    caption: "Vistas Panorámicas"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-stone-100 dark:bg-stone-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">Galería del Proyecto</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400">Un vistazo a tu futuro hogar en el campo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{img.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
