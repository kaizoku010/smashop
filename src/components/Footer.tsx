
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from "../media/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-xstore-light-gray pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div>
            <a href="/" className="text-2xl font-bold text-xstore-black flex items-center mb-4">
            <img id='footer-image' src={Logo}/>
    
            </a>
            <p className="text-xstore-dark-gray mb-4">
            Our journey began in 1996, when a group of passionate Ugandans discovered the enormous power of sports in mobilizing and supporting young people.             </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-xstore-gray flex items-center justify-center hover:bg-xstore-green hover:text-white transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-xstore-gray flex items-center justify-center hover:bg-xstore-green hover:text-white transition-colors duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-xstore-gray flex items-center justify-center hover:bg-xstore-green hover:text-white transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-xstore-gray flex items-center justify-center hover:bg-xstore-green hover:text-white transition-colors duration-300">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div id='footer-slice'>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div id='footer-slice'>
            <h3 className="font-bold text-lg mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Ladies</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Men</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Bags</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">Ponchos</a></li>
              <li><a href="#" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">For all</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div id='footer-slice'>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="text-xstore-green shrink-0 mt-1 mr-2" />
                <span className="text-xstore-dark-gray">14, rue Charles Bernhoeft, Kirchberg Luxembourg L-1240</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-xstore-green mr-2" />
                <a href="tel:+11234567890" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">(+352) 621 495 483
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-xstore-green mr-2" />
                <a href="mailto:info@xstore.com" className="text-xstore-dark-gray hover:text-xstore-green transition-colors">info@sembezaafrica.org</a>
              </li>
            </ul>

          </div>
        </div>
        
        {/* Payment methods */}
        <div className="border-t border-b border-xstore-light-gray py-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xstore-dark-gray">We accept payment via:</p>
            </div>
            <div className="flex space-x-3">
              <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8 w-auto" />
              <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-8 w-auto" />
              <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="American Express" className="h-8 w-auto" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xstore-dark-gray">
          <p>&copy; {new Date().getFullYear()} Sembeza Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
