
import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Kanzu from "../media/kanzu.jpg"
import Kanzu2 from "../media/kanzu2.jpg"
import Wrap from "../media/cb.jpg"
import Dress from "../media/dress.jpg"
import Bag from "../media/rafix.jpg"
import Hats from "../media/hats.jpg"
import Bags2 from "../media/lady4.jpg"
import bag3 from "../media/rasta.jpg"
import BG from "../media/raga.png"

const products = [
  {
    id: '1',
    name: 'Rafix Bag',
    price: 221.79,
    rating: 4.8,
    image:   Bag,
  },
  {
    id: '2',
    name: 'Zetu Bag',
    price: 130.69,
    rating: 4.6,
    image:  bag3,
  },
  {
    id: '3',
    name: 'Patched-up Leather Bag',
    price: 410.49,
    rating: 4.7,
    image:   Bags2,
  },

  {
    id: '5',
    name: 'Beady Head Wrap',
    price: 90.99,
    rating: 4.9,
    image:   Wrap,
  }
];

const EditorsPicks = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };
// please work on git
  return (
    <section id='main-padding' className="section-container">
      <div className="section-title">
        <h2>Editor's Handpick Items</h2>
        <a href="#" className="text-sm text-xstore-green hover:underline flex items-center">
          {/* View All <ArrowRight size={16} className="ml-1" /> */}
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div 
            key={product.id}
            className="bg-white rounded-lg overflow-hidden card-hover animate-scale-in p-4 flex flex-col items-center"
          >
            <div id='editor-picks-image' className="w-full h-32 mb-4 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                  loadedImages[product.id] ? 'image-loaded' : 'image-loading'
                }`}
                onLoad={() => handleImageLoad(product.id)}
              />
            </div>
            <div id='ed-area' className="flex flex-col items-center text-left">
              <h3 className="font-sm">{product.name}</h3>
              <div className="flex items-center mt-1 mb-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < Math.floor(product.rating) ? 'fill-xstore-yellow text-xstore-yellow' : 'text-xstore-light-gray'}
                  />
                ))}
              </div>
              <p className="font-bold text-xstore-green">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div 
            key={product.id}
            className="bg-white rounded-lg overflow-hidden card-hover animate-scale-in p-4 flex flex-col items-center"
          >
            <div id='editor-picks-image' className="w-full h-32 mb-4 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                  loadedImages[product.id] ? 'image-loaded' : 'image-loading'
                }`}
                onLoad={() => handleImageLoad(product.id)}
              />
            </div>
            <div id='ed-area' className="flex flex-col items-center text-left">
              <h3 className="font-sm">{product.name}</h3>
              <div className="flex items-center mt-1 mb-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < Math.floor(product.rating) ? 'fill-xstore-yellow text-xstore-yellow' : 'text-xstore-light-gray'}
                  />
                ))}
              </div>
              <p className="font-bold text-xstore-green">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom banner */}
      <div className="mt-10 rounded-lg overflow-hidden animate-fade-in">
        <div className="relative">
          <img 
            src={BG} 
            id='raga'
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="text-white p-8 max-w-md">
              <h2 className="text-3xl font-bold mb-3">The Tree-Go-Twin Project</h2>
              <p id="raga-text" className="mb-4">The Tree-Go-Twin Project is an innovative conservation
                 initiative by Sembeza Africa, designed to inspire environmental stewardship
                  among children while fostering global connections. This program pairs 
                  Ugandan children with international peers to plant, nurture, and care for trees, 
                promoting sustainable living and a shared sense of responsibility for our planet.

</p>
              <button id="barefoot" className="bg-white text-xstore-green hover:bg-xstore-light-green transition-colors duration-300 py-2 px-4 rounded-md font-medium flex items-center">
                Read More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
