
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck, RotateCcw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust badges */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-8 w-8 text-blue-400" />
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-gray-300">Orders over €50</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw className="h-8 w-8 text-green-400" />
              <div>
                <div className="font-semibold">30-Day Returns</div>
                <div className="text-sm text-gray-300">Easy returns</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-purple-400" />
              <div>
                <div className="font-semibold">Secure Payment</div>
                <div className="text-sm text-gray-300">SSL encrypted</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-8 w-8 text-orange-400" />
              <div>
                <div className="font-semibold">24/7 Support</div>
                <div className="text-sm text-gray-300">Expert help</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">
                EuroVista
                <span className="text-lg text-gray-300 ml-2 font-normal">Electronics</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted destination for premium electronics. We offer the latest technology, competitive prices, and exceptional customer service across Europe.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">support@eurovista.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+31 20 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Amsterdam, Netherlands</span>
                </div>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smartphones</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Laptops</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audio & Headphones</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gaming</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smart Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="text-red-400 hover:text-red-300 transition-colors font-medium">Sale Items</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technical Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investor Relations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest deals and product updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 EuroVista Electronics. All rights reserved.
            </div>

            {/* Social media */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Payment methods */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm mr-2">We accept:</span>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-6 w-6 text-gray-400" />
                <span className="text-xs text-gray-400">Visa</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400">Mastercard</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
