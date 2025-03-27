
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Kanzu from "../media/kanzu.jpg"
import Kanzu2 from "../media/kanzu2.jpg"
import Wrap from "../media/cb.jpg"
import Dress from "../media/dress.jpg"
import Bag from "../media/rafix.jpg"
import Hats from "../media/hats.jpg"
import Ladies from "../media/ladies.jpg"
import zetu from "../media/rasta.jpg"
import Sans from "../media/sandles2.jpg"


const Cart = () => {
  const { cartItems, updateQuantity: updateCartQuantity, removeItem: removeCartItem } = useCart();
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateCartQuantity(id, newQuantity);
  };
  
  const removeItem = (id: string) => {
    removeCartItem(id);
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div id="cart-page" className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-xstore-black">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <ShoppingBag size={64} className="text-xstore-light-gray mb-6" />
            <h2 className="text-2xl font-medium text-xstore-black mb-2">Your cart is empty</h2>
            <p className="text-xstore-dark-gray mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop">
              <Button className="bg-xstore-green hover:bg-xstore-green/90">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-xstore-light-gray overflow-hidden">
                <div className="hidden md:grid grid-cols-7 gap-4 p-4 border-b border-xstore-light-gray bg-gray-50">
                  <div className="col-span-3 font-medium">Product</div>
                  <div className="col-span-1 font-medium">Price</div>
                  <div className="col-span-2 font-medium">Quantity</div>
                  <div className="col-span-1 font-medium text-right">Total</div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item._id} className="p-4 border-b border-xstore-light-gray last:border-b-0">
                    <div className="md:grid md:grid-cols-7 md:gap-4 md:items-center">
                      {/* Product */}
                      <div className="md:col-span-3 flex items-center mb-4 md:mb-0">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-4">
                          <Link to={`/product/${item._id}`} className="text-xstore-black font-medium hover:text-xstore-green transition-colors">
                            {item.name}
                          </Link>
                          <p className="text-xstore-dark-gray text-sm">{item.category}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="md:col-span-1 mb-2 md:mb-0">
                        <div className="md:hidden text-sm text-xstore-dark-gray mb-1">Price:</div>
                        <span className="font-medium">${item.price.toFixed(2)}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="md:col-span-2 mb-2 md:mb-0">
                        <div className="md:hidden text-sm text-xstore-dark-gray mb-1">Quantity:</div>
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-l-md border border-xstore-light-gray"
                          >
                            <Minus size={16} />
                          </button>
                          <input 
                            type="number" 
                            min="1" 
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item._id, parseInt(e.target.value) || 1)}
                            className="w-12 h-8 border-t border-b border-xstore-light-gray text-center focus:outline-none"
                          />
                          <button 
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-r-md border border-xstore-light-gray"
                          >
                            <Plus size={16} />
                          </button>
                          <button 
                            onClick={() => removeItem(item._id)}
                            className="ml-3 text-xstore-dark-gray hover:text-xstore-red transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="md:col-span-1 text-right">
                        <div className="md:hidden text-sm text-xstore-dark-gray mb-1">Total:</div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Link to="/shop" className="text-xstore-green hover:underline flex items-center">
                  <ArrowRight size={16} className="mr-2 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-xstore-light-gray p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-xstore-dark-gray">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xstore-dark-gray">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <div className="text-sm text-xstore-dark-gray">
                      Add ${(50 - subtotal).toFixed(2)} more to get free shipping
                    </div>
                  )}
                  <div className="border-t border-xstore-light-gray pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-xstore-green hover:bg-xstore-green/90">
                  Proceed to Checkout
                </Button>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-sm text-xstore-dark-gray">
                    <span className="block w-8 h-5 bg-gray-200 rounded mr-2"></span>
                    We accept Visa, Mastercard, and American Express
                  </div>
                  <div className="flex items-center text-sm text-xstore-dark-gray">
                    <span className="block w-6 h-6 bg-gray-200 rounded-full mr-2"></span>
                    Secure Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

