import { useEffect } from 'react';
import { Calendar, Clock, DollarSign, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function EventosPage() {
  const eventos = [
    {
      titulo: "Noche de Jazz",
      fecha: "15 de Marzo, 2024",
      hora: "20:00",
      costo: "Entrada libre",
      ubicacion: "Sala Principal",
      imagen: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80",
      descripcion: "Una velada musical con los mejores exponentes del jazz local"
    },
    {
      titulo: "Exposición de Arte",
      fecha: "20-25 de Marzo, 2024",
      hora: "10:00 - 20:00",
      costo: "$50",
      ubicacion: "Galería",
      imagen: "https://images.unsplash.com/photo-1531913764164-f85c52201e8c?auto=format&fit=crop&q=80",
      descripcion: "Muestra colectiva de artistas emergentes"
    },
    {
      titulo: "Teatro: 'La Casa de Bernarda Alba'",
      fecha: "30 de Marzo, 2024",
      hora: "19:00",
      costo: "$150",
      ubicacion: "Auditorio",
      imagen: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80",
      descripcion: "Obra clásica de Federico García Lorca"
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Eventos Culturales</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Descubre nuestra agenda cultural y sé parte de la comunidad artística
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carrusel de imágenes */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-[500px] rounded-lg overflow-hidden"
            >
              {eventos.map((evento, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full">
                    <img 
                      src={evento.imagen} 
                      alt={evento.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{evento.titulo}</h3>
                        <p className="text-lg">{evento.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Timeline de eventos */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>
            <div className="space-y-6">
              {eventos.map((evento, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{evento.titulo}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{evento.fecha}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{evento.hora}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>{evento.costo}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{evento.ubicacion}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}