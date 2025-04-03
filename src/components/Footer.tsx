
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 uppercase mb-2">SWASTHYA</h2>
          <div className="flex justify-center items-center space-x-2 text-swasthya-primary">
            <Phone size={16} />
            <a href="tel:123-456-7890" className="hover:underline">123-456-7890</a>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-1 text-swasthya-primary">
            <Mail size={16} />
            <a href="mailto:swasthyacare@gmail.com" className="hover:underline">swasthyacare@gmail.com</a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-swasthya-primary">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-swasthya-primary">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-swasthya-primary">Our Services</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-swasthya-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/health-card" className="text-gray-600 hover:text-swasthya-primary">Health Card</Link></li>
              <li><Link to="/services/primary-care" className="text-gray-600 hover:text-swasthya-primary">Primary Care</Link></li>
              <li><Link to="/services/specialist-consultations" className="text-gray-600 hover:text-swasthya-primary">Specialist Consultations</Link></li>
              <li><Link to="/services/diagnostics" className="text-gray-600 hover:text-swasthya-primary">Diagnostics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-swasthya-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-swasthya-primary">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-swasthya-primary">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-swasthya-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Swasthya Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
