
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Kanzu from "../media/kanzu.jpg"

const articles = [
  {
    id: '1',
    title: 'Ubuntu Sports Festival',
    excerpt: '“Ubuntu” encapsulates the essence of community and interconnectedness. This festival is built on the belief that when we come together, we can create powerful change. ',
    image:   "https://static.wixstatic.com/media/1d0560_6a2646fe8bcd42828d5bb4491d8782c5~mv2.jpg",

  },
  {
    id: '2',
    title: ' Satellite Primary Schools Programme (SPSP)',
    excerpt: 'Welcome to the Satellite Primary Schools Programme (SPSP), a transformative initiative by Sembeza Africa, RAC, and SportsUganda Ltd (UK). Our program intertwines sports and environmental conservation to impact young lives across Uganda.',
    image:   "https://static.wixstatic.com/media/1d0560_5e42ab164b4348f6879831abb7c29af5~mv2.jpg",

  },
  {
    id: '3',
    title: ' TheBestBareFootLeague in the World (TBBFL)',
    excerpt: 'Welcome to TheBestBareFootLeague in the World (TBBFL), an ambitious sports development program dedicated to empowering youth through sports, conservation, health education, and tourism.',
    image:   "https://static.wixstatic.com/media/1d0560_20914c8be01843e5bd5875ad40cc85a7~mv2.jpeg",

  }
];

const Articles = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section id='main-padding' className="section-container">
      <div className="section-title">
        <h2>Top Recent Articles</h2>
        <a href="#" className="text-sm text-xstore-green hover:underline flex items-center">
          View All <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-xstore-light-gray card-hover animate-scale-in">
            <div className="h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110`}
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-xstore-green mb-2 inline-block">{article.category}</span>
              <h3 className="font-bold text-lg mb-2 hover:text-xstore-green transition-colors duration-300">
                <a href="#">{article.title}</a>
              </h3>
              <p className="text-xstore-dark-gray text-sm mb-4 line-clamp-2">{article.excerpt}</p>
           
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
