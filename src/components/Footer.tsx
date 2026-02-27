import { MapPin, Phone, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-stone-950 text-stone-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Parcelación El Recreo</h3>
            <p className="mb-6 max-w-md">
              Un proyecto exclusivo en el corazón del Huila. Naturaleza, seguridad y desarrollo para tu familia.
            </p>
            <div className="flex items-center gap-2 text-white">
              <Building2 className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Ingeobras de Colombia SAS</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-white">313 852 4910</p>
                  <p className="text-xs">Línea directa de ventas</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-white">Palermo, Huila</p>
                  <p className="text-xs">Vía a Teruel, a 10 minutos del casco urbano</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Información Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Licencia:</span> <span className="text-white">Vigente</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Matrícula:</span> <span className="text-white">200-7622</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Cédula Catastral:</span> <span className="text-white text-xs">00-00-009-0317-000</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Resolución:</span> <span className="text-white text-xs">130-06-03-000244</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ingeobras de Colombia SAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
