import { Phone } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-20 bg-white dark:bg-stone-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[300px]">
            <img 
              src="https://picsum.photos/seed/cabin_woods/800/800" 
              alt="Cabaña en el bosque" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-medium text-green-400 mb-1">Oferta de Lanzamiento</p>
                <h3 className="text-3xl font-bold">Invierte en tu futuro</h3>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-stone-900 text-white">
            <h2 className="text-3xl font-bold mb-6">Lotes Campestres</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-stone-400">Área desde</span>
                <span className="text-xl font-semibold">2.944 m²</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-stone-400">Área hasta</span>
                <span className="text-xl font-semibold">1 Hectárea</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-stone-400">Precios desde</span>
                <span className="text-3xl font-bold text-green-400">$128 Millones</span>
              </div>
            </div>

            <p className="text-stone-400 mb-8 text-sm">
              * Financiación disponible directamente con Ingeobras de Colombia SAS.
            </p>

            <a 
              href="tel:+573138524910"
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora: 313 852 4910
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
