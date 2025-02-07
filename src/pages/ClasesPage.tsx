import { GraduationCap, Calendar, DollarSign } from 'lucide-react';

export function ClasesPage() {
  const clases = [
    {
      materia: "Matemáticas",
      nivel: "Bachillerato",
      horario: "Lunes a Viernes 15:00 - 19:00",
      precio: "$200/hora",
      descripcion: "Álgebra, Cálculo, Geometría y Trigonometría"
    },
    {
      materia: "Física",
      nivel: "Bachillerato",
      horario: "Martes y Jueves 16:00 - 20:00",
      precio: "$250/hora",
      descripcion: "Mecánica, Electricidad y Magnetismo"
    },
    {
      materia: "Química",
      nivel: "Bachillerato",
      horario: "Lunes, Miércoles y Viernes 14:00 - 18:00",
      precio: "$250/hora",
      descripcion: "Química General, Orgánica e Inorgánica"
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Clases Particulares</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Refuerza tus conocimientos con nuestras clases personalizadas
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clases.map((clase, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-4">
                <h3 className="text-xl font-bold text-white">{clase.materia}</h3>
                <p className="text-white/80">{clase.nivel}</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{clase.horario}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span>{clase.precio}</span>
                </div>
                <p className="text-gray-600">{clase.descripcion}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Reservar Clase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}