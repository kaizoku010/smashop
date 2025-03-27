
import { CheckCircle } from 'lucide-react';
import BAG from "../media/sandles.jpg"

const PromoBanner = () => {
  return (
    <section id='' className="bg-xstore-green py-12 text-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div id='promo' className="flex flex-col md:flex-row items-center justify-between">
          <div id='margin-lr' className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Today's Special Offer</h2>
            <h3 className="text-3xl font-bold mb-6">Dont miss out on our daily deals!</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                <span> Handcrafted African-Inspired Pieces</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                <span>Easy One-Click Purchase</span>
              </div>
        
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                <span> Handcrafted African-Inspired Pieces</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                <span> Handcrafted African-Inspired Pieces</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                <span>Free Shipping & Lifetime Care Tips</span>
              </div>
            </div>
            
            <button id='shop-now-btn' className="bg-white text-xstore-green hover:bg-xstore-light-green transition-colors duration-300 py-3 px-6 rounded-md font-medium">
              Shop Now
            </button>
          </div>
          
          <div className="relative">
            <img 
    src={BAG}
alt="bags" 
              className="rounded-lg w-80 h-80 object-cover"
            />
            <div className="absolute -top-4 -right-4 bg-xstore-red text-white rounded-full w-16 h-16 flex flex-col items-center justify-center">
              <span className="text-sm">SAVE</span>
              <span className="text-lg font-bold">30%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
