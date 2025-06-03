
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ElectronicsGallery = () => {
  const products = [
    { 
      id: 1, 
      name: "iPhone 15 Pro", 
      price: "€1,199", 
      originalPrice: "€1,299", 
      rating: 4.8, 
      shape: "rounded-2xl",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
      category: "Smartphone"
    },
    { 
      id: 2, 
      name: "MacBook Air M2", 
      price: "€1,299", 
      rating: 4.9, 
      shape: "rounded-lg",
      color: "bg-gradient-to-br from-gray-300 to-gray-400",
      category: "Laptop"
    },
    { 
      id: 3, 
      name: "AirPods Pro", 
      price: "€279", 
      originalPrice: "€329", 
      rating: 4.7, 
      shape: "rounded-full",
      color: "bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200",
      category: "Audio"
    },
    { 
      id: 4, 
      name: "iPad Pro 12.9", 
      price: "€1,199", 
      rating: 4.8, 
      shape: "rounded-xl",
      color: "bg-gradient-to-br from-gray-600 to-gray-700",
      category: "Tablet"
    },
    { 
      id: 5, 
      name: "Samsung Galaxy S24", 
      price: "€899", 
      originalPrice: "€999", 
      rating: 4.6, 
      shape: "rounded-3xl",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      category: "Smartphone"
    },
    { 
      id: 6, 
      name: "Sony WH-1000XM4", 
      price: "€299", 
      rating: 4.9, 
      shape: "rounded-2xl",
      color: "bg-gradient-to-br from-black to-gray-800",
      category: "Audio"
    },
    { 
      id: 7, 
      name: "Nintendo Switch", 
      price: "€329", 
      rating: 4.7, 
      shape: "rounded-lg",
      color: "bg-gradient-to-br from-red-500 to-blue-500",
      category: "Gaming"
    },
    { 
      id: 8, 
      name: "Apple Watch Ultra", 
      price: "€899", 
      rating: 4.8, 
      shape: "rounded-xl",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      category: "Wearable"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Electronics</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our curated selection of premium electronics with the latest technology and unbeatable prices.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">All</button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">Smartphones</button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">Laptops</button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">Audio</button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">Gaming</button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border border-gray-200">
        {products.map((product) => (
          <div key={product.id} className="bg-white border-r border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 group last:border-r-0 sm:odd:border-r lg:nth-child(3n):border-r-0 xl:nth-child(4n):border-r-0">
            
            {/* Product Image Placeholder */}
            <div className="relative p-6 bg-gray-50">
              <div className={`w-full h-48 ${product.color} ${product.shape} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                {/* Decorative elements on the shape */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 bg-white bg-opacity-30 rounded-sm"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-2 bg-white bg-opacity-25 rounded-full"></div>
                </div>
              </div>
              
              {/* Sale badge */}
              {product.originalPrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  SALE
                </div>
              )}
              
              {/* Wishlist button */}
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors group-hover:scale-110">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="text-xs text-blue-600 font-medium mb-1">{product.category}</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Add to cart button */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group-hover:bg-blue-700">
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load more button */}
      <div className="text-center mt-12">
        <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
          Load More Products
        </button>
      </div>
    </div>
  )
}

export default ElectronicsGallery;
