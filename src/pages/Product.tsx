
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Star, Truck, ShieldCheck, RotateCcw, Heart, Minus, Plus, ShoppingCart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import { useCart } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductContext";

// Define the Product interface
interface Product {
  _id: string;  // Changed from id to _id
  name: string;
  price: number;
  description: string;
  image: string;  // Single image instead of images array
  category: string;
  stock: number;
  reviews: number;
  // Make optional fields that aren't in the API response
  images?: string[];
  rating?: number;
  originalPrice?: number;
  sku?: string;
  tags?: string[];
}

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { toast } = useToast();
  const { addItem } = useCart();
  const { products } = useProducts();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const foundProduct = products.find(p => p._id === id); // Changed from p.id to p._id
        if (!foundProduct) {
          throw new Error('Product not found');
        }
        // Transform the data to match our interface
        setProduct({
          ...foundProduct,
          images: foundProduct.image ? [foundProduct.image] : [], // Convert single image to array
          rating: 0, // Default value
          tags: [], // Default empty array
          sku: 'N/A' // Default value
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Product not found",  // More specific error message
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, products, toast]);

  const updateQuantity = (newQuantity: number) => {
    if (!product) return;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to cart`,
    });
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Product link copied to clipboard",
    });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div>Loading...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div>Product not found</div>
        </div>
        <Footer />
      </>
    );
  }

  // Get related products based on same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p._id !== product._id)
    .slice(0, 4); // Got only 4 related products

  return (
    <>
      <Navbar />
      <div id="product-page" className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-96">
              {product?.images?.length > 0 ? (
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="max-h-full object-contain"
                />
              ) : (
                <div className="text-xstore-dark-gray">No image available</div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product?.images?.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`cursor-pointer bg-gray-50 rounded p-2 border-2 ${
                    activeImageIndex === index ? 'border-xstore-green' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="h-16 w-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-xstore-black mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-xstore-dark-gray">
                {product?.rating?.toFixed(1) ?? '0.0'} ({product?.reviews ?? 0} reviews)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-xstore-black">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="ml-2 text-xstore-dark-gray line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="ml-2 bg-xstore-red text-white text-xs py-1 px-2 rounded-md">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <div className="text-sm text-xstore-green mt-1">
                In stock ({product.stock} available)
              </div>
            </div>

            <p className="text-xstore-dark-gray mb-6">{product.description}</p>

            <div className="flex flex-wrap mb-6">
              <div className="flex items-center mr-6 mb-4">
                <div className="mr-2 text-xstore-dark-gray">SKU:</div>
                <div>{product.sku}</div>
              </div>
              <div className="flex items-center mr-6 mb-4">
                <div className="mr-2 text-xstore-dark-gray">Category:</div>
                <div>{product.category}</div>
              </div>
              {product.tags?.length > 0 && (
                <div className="flex flex-wrap items-center mb-4">
                  <div className="mr-2 text-xstore-dark-gray">Tags:</div>
                  <div className="flex flex-wrap">
                    {product.tags.map((tag, index) => (
                      <span key={tag} className="mr-2 mb-2">
                        {tag}{index < product.tags.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap mb-4">
                <div className="flex items-center">
                  <div className="mr-2 text-xstore-dark-gray">Quantity:</div>
                  <div className="flex items-center">
                    <Button 
                      variant="outline"
                      onClick={() => updateQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                      className="h-8 w-8 p-0"
                    >
                      <Minus size={16} />
                    </Button>
                    <input 
                      type="number" 
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                      className="w-12 h-8 border-y border-input text-center focus:outline-none"
                    />
                    <Button 
                      variant="outline"
                      onClick={() => updateQuantity(quantity + 1)}
                      disabled={quantity >= product.stock}
                      className="h-8 w-8 p-0"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={handleAddToCart} 
                  className="flex-1 bg-xstore-green hover:bg-xstore-green/90"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleAddToWishlist} 
                  variant="outline" 
                  className="px-3"
                >
                  <Heart size={18} />
                </Button>
                <Button 
                  onClick={handleShare} 
                  variant="outline" 
                  className="px-3"
                >
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
            
            <div className="divide-y divide-xstore-light-gray">
              <div className="flex items-center py-3">
                <Truck size={18} className="text-xstore-green mr-3" />
                <div>
                  <div className="font-medium">Free Delivery</div>
                  <div className="text-sm text-xstore-dark-gray">For orders over $50</div>
                </div>
              </div>
              <div className="flex items-center py-3">
                <ShieldCheck size={18} className="text-xstore-green mr-3" />
                <div>
                  <div className="font-medium">Quality Guarantee</div>
                  <div className="text-sm text-xstore-dark-gray">100% quality guarantee</div>
                </div>
              </div>
              <div className="flex items-center py-3">
                <RotateCcw size={18} className="text-xstore-green mr-3" />
                <div>
                  <div className="font-medium">Easy Returns</div>
                  <div className="text-sm text-xstore-dark-gray">30-day return policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="border-b border-xstore-light-gray w-full justify-start mb-6">
              <TabsTrigger value="description" className="text-base">Description</TabsTrigger>
              <TabsTrigger value="reviews" className="text-base">Reviews (0)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="text-xstore-dark-gray">
              <p className="mb-4">{product.description}</p>
            </TabsContent>
            
  
        
            
            <TabsContent value="reviews">
              <div className="text-center py-12">
                <p className="text-xstore-dark-gray mb-4">Reviews are being loaded...</p>
                <Button className="bg-xstore-green hover:bg-xstore-green/90">
                  Write a Review
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <ProductSlider 
              products={relatedProducts.map(product => ({
                id: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                category: product.category,
                stock: product.stock,
                rating: product.reviews || 0, // Assuming reviews count can be used as rating
                createdAt: product.createdAt,
                updatedAt: product.updatedAt
              }))} 
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;











