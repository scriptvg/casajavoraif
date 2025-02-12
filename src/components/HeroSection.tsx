interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export function HeroSection({ title, description, backgroundImage }: HeroSectionProps) {
  return (
    <div className="relative h-[60vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
