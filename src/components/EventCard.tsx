import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  image
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 mr-3 text-amber-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="w-5 h-5 mr-3 text-amber-600" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="w-5 h-5 mr-3 text-amber-600" />
            <span>{location}</span>
          </div>
        </div>

        <button 
          className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
        >
          Más información
        </button>
      </div>
    </div>
  );
}
