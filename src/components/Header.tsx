
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-4">
              <span>Free shipping on orders over €50</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">24/7 Customer Support</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Track Order</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-300">Help</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              EuroVista
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for electronics, accessories..."
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <button className="absolute right-2 top-2 bg-gray-300 text-zinc-700 px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            
            {/* Mobile search button */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            {/* Account */}
            <div className="hidden sm:flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
              <User className="h-5 w-5" />
              <div className="text-sm">
                <div className="text-gray-500">Hello, Sign in</div>
                <div className="font-semibold">Account</div>
              </div>
            </div>

            {/* Mobile account */}
            <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg">
              <User className="h-5 w-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <button className="hidden sm:flex items-center space-x-1 hover:text-red-500 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Wishlist</span>
            </button>

            {/* Cart */}
            <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="hidden sm:inline text-sm font-medium">Cart</span>
              {/* Cart badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search electronics..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto py-3">
            <a href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap font-medium">All Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Smartphones</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Laptops</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Audio</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Gaming</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Smart Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Accessories</a>
            <a href="#" className="text-red-600 hover:text-red-700 whitespace-nowrap font-medium">Sale</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
