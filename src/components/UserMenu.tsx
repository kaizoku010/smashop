
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, LogIn, UserPlus, ShoppingBag, Heart, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth system

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // In a real implementation, this would log the user out
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={toggleMenu}
        className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-gray-100"
      >
        <User size={22} className="text-xstore-black hover:text-xstore-green transition-colors" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
          {isLoggedIn ? (
            <>
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500 mt-1 truncate">john.doe@example.com</p>
              </div>
              <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <User size={16} className="mr-3 text-gray-500" />
                My Profile
              </Link>
              <Link to="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <ShoppingBag size={16} className="mr-3 text-gray-500" />
                My Orders
              </Link>
              <Link to="/wishlist" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <Heart size={16} className="mr-3 text-gray-500" />
                Wishlist
              </Link>
              <Link to="/profile?tab=settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <Settings size={16} className="mr-3 text-gray-500" />
                Settings
              </Link>
              <div className="border-t border-gray-100 mt-1"></div>
              <button 
                onClick={handleLogout} 
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut size={16} className="mr-3 text-gray-500" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <LogIn size={16} className="mr-3 text-gray-500" />
                Sign In
              </Link>
              <Link to="/sign-up" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <UserPlus size={16} className="mr-3 text-gray-500" />
                Create Account
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
