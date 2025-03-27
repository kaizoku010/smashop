
import { ArrowRight } from 'lucide-react';
import "./hero.css"

const Hero = () => {
  return (
    <section id='hero-section' className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-sm border border-xstore-light-gray">
          {/* Left side with woman image */}
          <div className="w-full md:w-1/2 p-6 md:p-10 animate-slide-in-left">
            <div className="mb-6">
              <span id='chip' className="bg-xstore-light-green text-xstore-green text-xs rounded-full px-3 py-1">
                Welcome to SembezaAfrica store
              </span>
            </div>
            <h1 id='hero-title' className="text-3xl md:text-4xl font-bold mb-2 text-left">
             Rooted in Culture – Discover Afro-Inspired Treasures For You!
            </h1>
            <p id='hero-subtitle' className="text-xstore-dark-gray mb-6">
            Explore a vibrant collection of Afro-inspired fashion, art, and so much more.
                         </p>
            <div className="flex space-x-4">
              <button id='orange-btn-hero' className="btn-primary">
                Shop Now <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="btn-secondary">
                View Deals
              </button>
            </div>
          </div>
          
          {/* Right side with vegetables image */}
          <div  id='sembeza-green' className="w-full md:w-1/2 bg-xstore-green p-6 md:p-10 text-white animate-slide-in-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Whether you're connecting with your roots or simply love unique designs
         
                   </h2>
            <p className="mb-6">
            our store offers something special for everyone. Shop now and add a touch of global flair to your world!            </p>
            <button id="btn-green" className="bg-white text-xstore-green hover:bg-xstore-light-green transition-colors duration-300 py-2 px-4 rounded-md font-medium flex items-center">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
        
        {/* Additional info bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="flex items-center bg-white p-4 rounded-lg border border-xstore-light-gray transition-transform hover:transform hover:scale-105">
            <div className="bg-xstore-light-green p-2 rounded-full mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="#00A69C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm">Free Delivery</h3>
              <p className="text-xs text-xstore-dark-gray">For orders over $50</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white p-4 rounded-lg border border-xstore-light-gray transition-transform hover:transform hover:scale-105">
            <div className="bg-xstore-light-yellow p-2 rounded-full mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12" stroke="#FFB100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7H2V12H22V7Z" stroke="#FFB100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V7" stroke="#FFB100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="#FFB100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="#FFB100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm">Top-Notch Support</h3>
              <p className="text-xs text-xstore-dark-gray">24/7 Amazing Support</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white p-4 rounded-lg border border-xstore-light-gray transition-transform hover:transform hover:scale-105">
            <div className="bg-xstore-light-red p-2 rounded-full mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#FF5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm">100% Secure Checkout</h3>
              <p className="text-xs text-xstore-dark-gray">Pay with secure method</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white p-4 rounded-lg border border-xstore-light-gray transition-transform hover:transform hover:scale-105">
            <div className="bg-xstore-light-green p-2 rounded-full mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 22H20V2H4V22Z" stroke="#00A69C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V22" stroke="#00A69C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12H16" stroke="#00A69C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm">Money Back Guarantee</h3>
              <p className="text-xs text-xstore-dark-gray">30-day money back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
