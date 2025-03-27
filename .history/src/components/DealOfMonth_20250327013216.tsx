
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ProductCard from './ProductCard';
import Kanzu from "../media/kanzu.jpg"
import Kanzu2 from "../media/sandles2.jpg"
import Wrap from "../media/cb.jpg"
import Dress from "../media/dress.jpg"
import Bag from "../media/ladies.jpg"
import Hats from "../media/sandles.jpg"


const products = [
  {
    id: '1',
    name: 'Crafted Leather Sandles',
    price: 129.99,
    oldPrice: 189.99,
    rating: 4.8,
    image:   Kanzu2,
    badge: 'sale' as const,
    category: 'Ladies'
  },
  {
    id: '2',
    name: 'Leather Sandles ',
    price: 125.99,
    oldPrice: 278.49,
    rating: 4.5,
    image:   Dress,
    badge: 'sale' as const,
    category: 'Ladies'
  },
  {
    id: '3',
    name: 'Artichoke Brass Braclets',
    price: 125.99,
    oldPrice: 278.49,
    rating: 4.2,
    image:   Bag,
    badge: 'sale' as const,
    category: 'Jewelry'
  },
  {
    id: '4',
    name: 'Denim Sandles',
    price: 125.99,
    oldPrice: 278.49,
    rating: 4.7,
    image:   Hats,
    badge: 'hot' as const,
    category: 'Sandles'
  },

];

const DealsOfMonth = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const handleNext = () => {
    setStartIndex(prev => (prev + 1) % (products.length - itemsToShow + 1));
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev === 0 ? products.length - itemsToShow : prev - 1));
  };

  return (
    <section className="section-container">
      <div className="section-title">
        <h2>Deals Of The Month</h2>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full border border-xstore-light-gray hover:border-xstore-green transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full border border-xstore-light-gray hover:border-xstore-green transition-colors"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 xsm:grid-c sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(startIndex, startIndex + itemsToShow).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {/* Promotional banner */}
      <div className="mt-12 rounded-xl overflow-hidden relative animate-fade-in">
        <div id='green-bg' className="bg-xstore-light-green p-6 md:p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 id='text-cut'  className="text-xl md:text-2xl font-bold mb-2">
            Celebrate Heritage, Embrace Uniqueness – Afro Treasures for the World to Love!

            </h3>
            {/* <p className="text-3xl md:text-4xl font-bold text-xstore-green mb-4">$15 per order</p> */}
            <p id='white' className="text-xstore-dark-gray mb-4">Shop now and add a touch of global flair to your world!"</p>
            <button id="btn-green" className="btn-primary">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/3">
            <img 
            id='mdx-section'
              src={Kanzu} 
              alt="Fresh vegetables" 
              className="rounded-lg object-cover h-40 w-full"
            />
          </div>
          <div id='spacer'></div>
          <div className="md:w-1/3">
            <img 
            id='mdx-section'
              src={Wrap} 
              alt="Fresh vegetables" 
              className="rounded-lg object-cover h-40 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfMonth;
