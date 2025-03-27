
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  oldPrice?: number;
  badge?: 'sale' | 'new' | 'hot';
}

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider = ({ products }: ProductSliderProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = window.innerWidth < 768 ? 2 : 5;

  // our base case
  if (!Array.isArray(products)) {
    return null;
  }

  const handleNext = () => {
    setStartIndex(prev => (prev + 1) % (products.length - itemsToShow + 1));
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev === 0 ? products.length - itemsToShow : prev - 1));
  };

  return (
    <section id="product-slider" className="relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
      
      <div className="flex overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
        >
          {products.map(product => (
            <div key={product.id} className="min-w-[50%] md:min-w-[20%] p-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;

