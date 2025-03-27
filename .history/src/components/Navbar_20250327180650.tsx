
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Heart, MapPin, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCart } from '@/contexts/CartContext';
import UserMenu from './UserMenu';
import Logo from "../media/logo.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Calculate total items in cart
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={`absolute top-0 left-0 right-0 bg-white z-50 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      {/* Top bar */}
      <div id='top-bar' className="bg-xstore-green text-white py-1.5 px-4">
        <div id='top-bar-content' className="container">
          <div className="flex pace-x-4">
            <div className="flex items-center text-xs">
              <MapPin id='map-pin' size={14} className="mr-1" />
              <span>14, rue Charles Bernhoeft, Kirchberg Luxembourg L-1240</span>
            </div>
            <div id='top-bar-contact' className="hidden md:flex items-center text-xs">
              <Phone size={14} className="mr-1" />
              <span>(+352) 621 495 483</span>
            </div>
          </div>
          <div className="text-xs">
            {/*  something like " Free shipping for orders over $500 " sld be here*/}
            <span>Free shipping for orders over $500</span>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div id='main-nav' className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-xstore-black flex items-center">
              <img id='sb-logo' src={Logo} alt="Logo" />
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 rounded-md border border-xstore-light-gray focus:outline-none focus:ring-1 focus:ring-xstore-green transition-all"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xstore-dark-gray" size={18} />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block relative">
              <Heart size={22} className="text-xstore-black hover:text-xstore-green transition-colors" />
              <span className="absolute -top-2 -right-2 bg-xstore-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} className="text-xstore-black hover:text-xstore-green transition-colors" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-xstore-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <div className="hidden md:block">
              <UserMenu />
            </div>
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="ml-2"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Categories menu */}
      <nav  id='shop-categories' className="border-t border-xstore-light-gray hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-2 text-sm">
            <li><Link to="/shop" className="hover:text-xstore-green transition-colors py-2 inline-block font-medium">All Products</Link></li>
            <li><Link to="/shop?category=clothing" className="hover:text-xstore-green transition-colors py-2 inline-block">Clothing</Link></li>
            <li><Link to="/shop?category=crafts" className="hover:text-xstore-green transition-colors py-2 inline-block">Crafts</Link></li>
            <li><Link to="/shop?category=jewelry" className="hover:text-xstore-green transition-colors py-2 inline-block">Jewelry</Link></li>
            <li><Link to="/shop?category=bags" className="hover:text-xstore-green transition-colors py-2 inline-block">Bags</Link></li>
            <li><Link to="/shop?category=accessories" className="hover:text-xstore-green transition-colors py-2 inline-block">Accessories</Link></li>
          </ul>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMobile && (
        <div className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="text-2xl font-bold">
                <img id='mobile-drawer-logo' src={Logo} alt="Logo" className="h-9" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
              >
                <X size={24} />
              </Button>
            </div>
{/*             
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 rounded-md border border-xstore-light-gray focus:outline-none focus:ring-1 focus:ring-xstore-green"
              />
            </div> */}
            
            <nav>
              <ul className="space-y-4">
              <li><Link to="/sign-in" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Sign In</Link></li>
                <li><Link to="/shop" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>All Products</Link></li>
                <li><Link to="/shop?category=clothing" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Clothing</Link></li>
                <li><Link to="/shop?category=crafts" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Crafts</Link></li>
                <li><Link to="/shop?category=jewelry" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Jewelry</Link></li>
                <li><Link to="/shop?category=bags" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Bags</Link></li>
                <li><Link to="/shop?category=accessories" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Accessories</Link></li>
                <li><Link to="/shop?category=ladies" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Ladies</Link></li>
                <li><Link to="/shop?category=men" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Men</Link></li>
                <li><Link to="/shop?category=kids" className="block py-2 border-b border-xstore-light-gray" onClick={toggleMobileMenu}>Kids</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



