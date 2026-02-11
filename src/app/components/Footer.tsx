import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-[#003366] text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="TayoKonnektado Logo" className="h-14 object-contain" />
              <span className="text-xl font-bold text-white">TayoKonnektado</span>
            </div>
            <p className="text-sm">
              Your trusted internet service self-service platform. Manage your account, bills, and support requests anytime, anywhere.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="hover:text-[#FDB913] transition-colors text-sm">
                  Account Management
                </Link>
              </li>
              <li>
                <Link to="/billing" className="hover:text-[#FDB913] transition-colors text-sm">
                  Billing & Payments
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#FDB913] transition-colors text-sm">
                  Support Tickets
                </Link>
              </li>
              <li>
                <Link to="/reports" className="hover:text-[#FDB913] transition-colors text-sm">
                  Service Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">+63 (02) 8123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">support@tayokonnektado.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Manila, Philippines</span>
              </li>
            </ul>
            <p className="text-xs mt-3 text-gray-400">
              Available 24/7 for your convenience
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FDB913] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#FDB913] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#FDB913] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <Link to="/privacy" className="block text-sm hover:text-[#FDB913] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm hover:text-[#FDB913] transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="block text-sm hover:text-[#FDB913] transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00509E] mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TayoKonnektado Internet Service Self-Service Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}