
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DealOfMonth from '@/components/DealOfMonth';
import Categories from '@/components/Categories';
import EditorsPicks from '@/components/EditorsPicks';
import PromoBanner from '@/components/PromoBanner';
import ProductSlider from '@/components/ProductSlider';
import TodaysSpecial from '@/components/TodaysSpecial';
import Articles from '@/components/Articles';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero  />
        <DealOfMonth />
        <Categories />
        <EditorsPicks />
        <PromoBanner />
        {/* <ProductSlider products={[]} /> */}
        <TodaysSpecial />
        <Articles />
        <FAQ />
      </main>
      
      <Footer />
      
      {/* Floating action button fab */}
      <button id='chat-btn' className="fixed bottom-6 right-6 bg-xstore-green text-white p-4 rounded-full shadow-lg hover:bg-xstore-dark-green transition-colors z-40 animate-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C10.5324 21 9.14649 20.6322 7.91793 19.9836C7.6186 19.8351 7.45893 19.7614 7.37785 19.7346C7.2968 19.7077 7.25072 19.7004 7.14349 19.7004C7.03626 19.7004 6.91843 19.7365 6.68277 19.8086L3.49662 20.794C3.00264 20.9553 2.75565 21.036 2.56276 20.9818C2.39138 20.9339 2.24466 20.8161 2.15932 20.6557C2.06149 20.4726 2.06831 20.2099 2.08195 19.6845L2.13491 17.7086C2.14081 17.498 2.14376 17.3927 2.12245 17.2913C2.10114 17.19 2.0563 17.098 1.96661 16.9141C1.34302 15.6065 1 14.1356 1 12.5C1 7.52944 5.02944 3.5 10 3.5C10.7673 3.5 11.5149 3.59442 12.2236 3.77105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 12.5C11 12.5 12 12.5 13 13.5C13 13.5 15.1667 10.3333 17 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Back to top button  */}
      <button 
        id='to-top'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 bg-xstore-light-green
         text-xstore-black p-3 rounded-full 
         shadow-lg hover:bg-xstore-light-green
          hover:text-white transition-colors z-40"
      >
        <svg id='fab' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
    </div>
  );
};

export default Index;
