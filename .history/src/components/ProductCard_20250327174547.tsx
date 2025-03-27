
import { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  badge?: 'sale' | 'new' | 'hot';
  category?: string;
}

const ProductCard = ({ id, name, price, oldPrice, rating, image, badge, category }: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'fill-xstore-yellow' : 'text-xstore-light-gray'}
      />
    ));
  };

  return (
    <div 
      onClick={handleProductClick}
      className="cursor-pointer card-hover bg-white rounded-lg overflow-hidden relative p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {badge && (
        <span className={`product-badge ${badge}`}>
          {badge.toUpperCase()}
        </span>
      )}
      
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-contain img-zoom ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        <div 
          className={`absolute inset-0 bg-black/5 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
     
        </div>
      </div>
      
      {category && (
        <p className="text-xs text-xstore-dark-gray mb-1">{category}</p>
      )}
      
      <h3 id='product_title' className="font-medium text-sm mb-1 line-clamp-2 h-10">{name}</h3>
      
      <div className="rating mb-2">
        {renderStars(rating)}
        <span className="text-xs text-xstore-dark-gray ml-1">({Math.round(rating * 10)})</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="font-bold text-xstore-black">${price.toFixed(2)}</span>
        {oldPrice && (
          <span className="text-xstore-dark-gray line-through text-sm">${oldPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

