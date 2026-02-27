import { CheckCircle2, FileCheck, Droplets, Sun, Map, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <FileCheck className="w-8 h-8 text-green-600" />,
    title: "Licencia Urbanística",
    description: "Proyecto totalmente legalizado con licencia de la Secretaría de Planeación de Palermo."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "Escritura Pública",
    description: "Tranquilidad jurídica para tu inversión. Cada lote cuenta con su documentación al día."
  },
  {
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    title: "Acueducto Propio",
    description: "Suministro de agua garantizado para tu parcela y cultivos."
  },
  {
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    title: "Iluminación Solar",
    description: "Alumbrado público ecológico y sostenible en las zonas comunes."
  },
  {
    icon: <Map className="w-8 h-8 text-amber-700" />,
    title: "Vías Placa Huella",
    description: "Excelente acceso vehicular hasta tu propiedad en cualquier época del año."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
    title: "Uso Agroturístico",
    description: "Ideal para vivienda campestre, cultivos o proyectos de turismo ecológico."
  }
];

export default function Features() {
  return (
    <section id="detalles" className="py-20 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">Todo lo que necesitas para tu proyecto</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            El Recreo ofrece una infraestructura completa para asegurar tu comodidad y la valorización de tu inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-stone-100 dark:border-stone-800">
              <div className="bg-stone-50 dark:bg-stone-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-3">{feature.title}</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
