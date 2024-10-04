import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">FitGear is your one-stop shop for premium fitness apparel and accessories. We're passionate about helping you achieve your fitness goals in style.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-secondary transition-colors">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/returns" className="text-sm hover:text-secondary transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="text-sm hover:text-secondary transition-colors">Size Guide</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-secondary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram /></a>
            </div>
            <p className="mt-4 text-sm">Subscribe to our newsletter for exclusive offers and fitness tips!</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 FitGear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;