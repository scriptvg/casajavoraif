import { PencilRuler, Calendar, DollarSign } from 'lucide-react';

export function DibujoPage() {
  const clases = [
    {
      tipo: "Dibujo Básico",
      horario: "Lunes y Miércoles 10:00 - 12:00",
      precio: "$250/hora",
      descripcion: "Fundamentos del dibujo, perspectiva y composición"
    },
    {
      tipo: "Dibujo Anatómico",
      horario: "Martes y Jueves 16:00 - 18:00",
      precio: "$300/hora",
      descripcion: "Estudio de la figura humana y anatomía artística"
    },
    {
      tipo: "Técnicas Mixtas",
      horario: "Viernes 15:00 - 18:00",
      precio: "$350/hora",
      descripcion: "Exploración de diferentes medios y técnicas artísticas"
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Dibujo Artístico</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Desarrolla tu creatividad y técnica artística con nuestros cursos especializados
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clases.map((clase, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 p-4">
                <h3 className="text-xl font-bold text-white">{clase.tipo}</h3>
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
                <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
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