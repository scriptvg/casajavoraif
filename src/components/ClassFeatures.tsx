import React from 'react';

interface ClassFeaturesProps {
  features: {
    icon: React.ComponentType;
    title: string;
    description: string;
  }[];
}

export function ClassFeatures({ features }: ClassFeaturesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-10 h-10 text-amber-600 mr-4" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}