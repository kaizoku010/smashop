
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Kanzu from "../media/kanzu2.jpg"
import Sandles from "../media/sandles.jpg"
import Wrap from "../media/jewelry.jpg"
import Dress from "../media/dress.jpg"
import Bag from "../media/rafix.jpg"
import Hats from "../media/hats.jpg"

const categories = [
  {
    id: '1',
    name: 'Sandles',
    count: 15,
    image:  Sandles,
  },
  {
    id: '2',
    name: 'Bags',
    count: 32,
    image:   Bag,
  },
  {
    id: '3',
    name: 'Hats',
    count: 21,
    image:   Hats,
  },
  {
    id: '4',
    name: 'Dresses',
    count: 28,
    image:   Dress,
  },
  {
    id: '5',
    name: 'Men',
    count: 12,
    image:   Kanzu,
  },
  {
    id: '6',
    name: 'jewelry',
    count: 18,
    image:   Wrap,
  }
];

const Categories = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section className="section-container">
      <div className="section-title">
        <h2>Our Trending Categories</h2>
        <a href="#" className="text-sm text-xstore-green hover:underline flex items-center">
          {/* View All <ArrowRight size={16} className="ml-1" /> */}
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(category => (
          <a 
            key={category.id}
            href="#"
            className="group bg-white rounded-lg overflow-hidden card-hover flex flex-col items-center p-4 animate-scale-in"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 flex items-center justify-center">
              <img 
                src={category.image} 
                alt={category.name}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  loadedImages[category.id] ? 'image-loaded' : 'image-loading'
                }`}
                onLoad={() => handleImageLoad(category.id)}
              />
            </div>
            <h3 className="font-medium text-sm text-center">{category.name}</h3>
            <p className="text-xs text-xstore-dark-gray">{category.count} items</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
