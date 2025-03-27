
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Semb from "../media/semb.jpg"

const TodaysSpecial = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id='main-padding' className="section-container">
      <div id='bgColor' className="mdx-test bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div  className="md:w-1/2 pr-6 z-10">
            <span className="inline-block bg-white text-xstore-yellow px-3 py-1 rounded-full text-sm font-medium mb-3">
              Today's Special
            </span>
            <h2 className="text-3xl font-bold mb-4"> Shop Now and embrace the vibrant spirit of Africa! </h2>
            <p className="mb-6 text-xstore-dark-gray">
            Celebrate culture and style with our handpicked Afro-inspired merchandise! Enjoy free shipping on your first order
                        </p>
            <button id='shop-now-btn' className="btn-primary bg-xstore-yellow text-white hover:bg-yellow-400">
              Order Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img 
src={Semb}
alt="sembeza africa"
              className={`rounded-lg w-full h-auto object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-white rounded-full h-16 w-16 flex flex-col items-center justify-center shadow-lg animate-pulse">
          <span className="text-xs text-xstore-dark-gray">SAVE</span>
          <span className="text-lg font-bold text-xstore-red">25%</span>
        </div>
      </div>
    </section>
  );
};

export default TodaysSpecial;
