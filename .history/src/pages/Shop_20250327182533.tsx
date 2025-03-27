
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, Filter, Grid3X3, Grid2X2, ArrowUpDown, Search, Sliders, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Kanzu from "../media/kanzu.jpg"
import Kanzu2 from "../media/kanzu2.jpg"
import Wrap from "../media/cb.jpg"
import Dress from "../media/dress.jpg"
import Bag from "../media/rafix.jpg"
import Jewelry from "../media/jewelry.jpg"
import Ladies from "../media/ladies.jpg"
import zetu from "../media/rasta.jpg"
import Sans from "../media/sandles2.jpg"
import { useProducts } from "@/contexts/ProductContext";

// Mock categories
const categories = [
  { id: "all", name: "All Categories" },
  { id: "Clothing", name: "Clothing" },
  { id: "Jewelry", name: "Jewelry" },
  { id: "Crafts", name: "Crafts" },
  // Add more categories that match your backend
];

// Mock brands
const brands = [
  { id: "kenyan-bags", name: "Kenyan Bags", count: 28 },
  { id: "bbfl-collection", name: "BBFL Collection", count: 42 },
  { id: "tree-trio-collection", name: "Tree-Trio Collection", count: 35 },
  { id: "sembeza-collection", name: "Sembeza Collection", count: 22 },
  { id: "ubuntu-choice", name: "Ubuntu Choice", count: 19 }
];

const Shop = () => {
  const { products, isLoading, error } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [gridView, setGridView] = useState(3); // 3 or 4 columns
  const [sortOption, setSortOption] = useState("featured");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  
  useEffect(() => {
    console.log("Current products from API:", products);
    if (error) {
      console.error("Error fetching products:", error);
    }
  }, [products, error]);

  useEffect(() => {
    if (!products) return;
    
    let filtered = [...products];
    
    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }
    
    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
    }
    
    // Apply sorting
    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      default: // featured
        // Keep original order
        break;
    }
    
    console.log("Filtered products:", filtered);
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrands, priceRange, searchQuery, sortOption, searchParams, products]);
  
  const toggleBrandSelection = (brandId: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId) 
        : [...prev, brandId]
    );
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    // Update URL parameter
    if (categoryId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
  };
  
  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrands([]);
    setPriceRange([0, 20]);
    setSearchQuery("");
    setSortOption("featured");
    searchParams.delete("category");
    setSearchParams(searchParams);
  };
  
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // if (isLoading) {
  //   return <div>Loading products...</div>;
  // }

  // if (error) {
  //   return <div>Error loading products: {error}</div>;
  // }

  return (
    <>
      <Navbar />
      <div id="main-padding"  className=" container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-xstore-black">
          {selectedCategory === "all" 
            ? "All Products" 
            : categories.find(c => c.id === selectedCategory)?.name || "Shop"
          }
        </h1>
        
        <div className="lg:grid lg:grid-cols-4 gap-8">
          {/* Sidebar filters - desktop */}
          <div id="sidebar" className="lg:block hidden">
            <div className="bg-white rounded-lg shadow-sm border border-xstore-light-gray p-6 sticky top-[120px]">
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button 
                        onClick={() => handleCategoryChange(category.id)}
                        className={`flex justify-between w-full py-1 text-left ${selectedCategory === category.id ? 'text-xstore-green font-medium' : 'text-xstore-dark-gray'}`}
                      >
                        <span>{category.name}</span>
                        <span className="text-xstore-dark-gray text-sm">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-3">Price Range</h3>
                <Slider 
                  defaultValue={priceRange} 
                  min={0} 
                  max={20} 
                  step={0.5}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="mb-4" 
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0].toFixed(2)}</span>
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-3">Brands</h3>
                <ul className="space-y-2">
                  {brands.map(brand => (
                    <li key={brand.id} className="flex items-center">
                      <Checkbox 
                        id={`brand-${brand.id}`} 
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={() => toggleBrandSelection(brand.id)}
                        className="mr-2"
                      />
                      <label 
                        htmlFor={`brand-${brand.id}`}
                        className="flex justify-between w-full text-xstore-dark-gray cursor-pointer"
                      >
                        <span>{brand.name}</span>
                        <span className="text-sm">({brand.count})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button onClick={resetFilters} variant="outline" className="w-full" size="sm">
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Filters bar */}
            <div id="shop-main" className="bg-white rounded-lg shadow-sm border border-xstore-light-gray p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleFilterVisibility}
                  className="lg:hidden mr-2"
                >
                  <Filter size={16} className="mr-1" />
                  Filters
                </Button>
                <span className="text-xstore-dark-gray">
                  Showing <strong>{filteredProducts.length}</strong> results
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center">
                  <Search size={18} className="text-xstore-dark-gray mr-2" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48"
                  />
                </div>
                
                <Select 
                  value={sortOption} 
                  onValueChange={setSortOption}
                >
                  <SelectTrigger className="w-[180px]">
                    <ArrowUpDown size={14} className="mr-2" />
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="hidden md:flex items-center space-x-1">
                  <Button
                    variant={gridView === 3 ? "default" : "outline"}
                    size="icon"
                    onClick={() => setGridView(3)}
                    className={gridView === 3 ? "bg-xstore-green hover:bg-xstore-green/90" : ""}
                  >
                    <Grid3X3 size={16} />
                  </Button>
                  <Button
                    variant={gridView === 4 ? "default" : "outline"}
                    size="icon"
                    onClick={() => setGridView(4)}
                    className={gridView === 4 ? "bg-xstore-green hover:bg-xstore-green/90" : ""}
                  >
                    <Grid2X2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Mobile filters */}
            {isFilterVisible && (
              <div className="lg:hidden bg-white rounded-lg shadow-sm border border-xstore-light-gray p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={toggleFilterVisibility}>
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <Select 
                    value={selectedCategory} 
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <Slider 
                    defaultValue={priceRange} 
                    min={0} 
                    max={20} 
                    step={0.5}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="mb-4" 
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0].toFixed(2)}</span>
                    <span>${priceRange[1].toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Brands</h4>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <div key={brand.id} className="flex items-center">
                        <Checkbox 
                          id={`mobile-brand-${brand.id}`}
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => toggleBrandSelection(brand.id)}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`mobile-brand-${brand.id}`}
                          className="flex justify-between w-full text-xstore-dark-gray cursor-pointer"
                        >
                          <span>{brand.name}</span>
                          <span className="text-sm">({brand.count})</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button onClick={resetFilters} variant="outline" className="flex-1" size="sm">
                    Reset
                  </Button>
                  <Button onClick={toggleFilterVisibility} className="flex-1 bg-xstore-green hover:bg-xstore-green/90" size="sm">
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
            
            {/* Products grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-xstore-light-gray p-12 text-center">
                <Sliders size={48} className="mx-auto mb-4 text-xstore-light-gray" />
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-xstore-dark-gray mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                <Button onClick={resetFilters} className="bg-xstore-green hover:bg-xstore-green/90">
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className={`grid ${
                gridView === 3 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              } gap-6`}>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    description={product.description}
                    stock={product.stock}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;




