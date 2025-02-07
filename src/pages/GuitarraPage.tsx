import { Music, Calendar, DollarSign } from 'lucide-react';

export function GuitarraPage() {
  const clases = [
    {
      nivel: "Principiante",
      horario: "Lunes y Miércoles 16:00 - 17:30",
      precio: "$300/hora",
      descripcion: "Introducción a la guitarra, acordes básicos y ritmos sencillos"
    },
    {
      nivel: "Intermedio",
      horario: "Martes y Jueves 17:00 - 18:30",
      precio: "$350/hora",
      descripcion: "Técnicas avanzadas, teoría musical y práctica en conjunto"
    },
    {
      nivel: "Avanzado",
      horario: "Sábados 10:00 - 12:00",
      precio: "$400/hora",
      descripcion: "Composición, improvisación y estilos específicos"
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Clases de Guitarra</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Aprende a tocar guitarra con profesores experimentados en un ambiente 
              acogedor y profesional
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clases.map((clase, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-amber-600 p-4">
                <h3 className="text-xl font-bold text-white">{clase.nivel}</h3>
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
                <button className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors">
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