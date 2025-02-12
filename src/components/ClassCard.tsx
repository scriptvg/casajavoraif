import { Calendar, CheckCircle2, DollarSign } from 'lucide-react';
import { ReserveButton } from './ReserveButton';

interface ClassCardProps {
  nivel: string;
  horario: string;
  precio: string;
  descripcion: string;
  beneficios: string[];
  formUrl: string;
}

export function ClassCard({ nivel, horario, precio, descripcion, beneficios, formUrl }: ClassCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{nivel}</h3>
        <p className="text-amber-100 text-sm">{descripcion}</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 mr-3 text-amber-600" />
            <span>{horario}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <DollarSign className="w-5 h-5 mr-3 text-amber-600" />
            <span>{precio}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Incluye:</h4>
          {beneficios.map((beneficio, idx) => (
            <div key={idx} className="flex items-center text-gray-600">
              <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600" />
              <span>{beneficio}</span>
            </div>
          ))}
        </div>

        <ReserveButton formUrl={formUrl} />
      </div>
    </div>
  );
}
