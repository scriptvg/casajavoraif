interface FeaturedEvent {
  title: string;
  date: string;
  image: string;
  description: string;
}

interface FeaturedEventsProps {
  events: FeaturedEvent[];
}

export function FeaturedEvents({ events }: FeaturedEventsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Próximos Eventos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No te pierdas nuestros eventos especiales y presentaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{event.date}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-4 text-amber-600 font-medium hover:text-amber-700 transition-colors">
                  Más información →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
