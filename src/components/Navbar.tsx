
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 mr-3">
              <svg viewBox="0 0 100 100" className="w-full h-full text-swasthya-primary">
                <circle cx="50" cy="50" r="45" fill="#00806b" />
                <path d="M30 50 Q 50 20, 70 50 T 30 50" stroke="white" strokeWidth="4" fill="none" />
                <path d="M30 50 Q 50 80, 70 50" stroke="white" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <span className="text-swasthya-primary text-3xl font-bold">Swasthya</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-gray-700 hover:text-swasthya-primary font-medium text-lg">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-swasthya-primary font-medium text-lg">
            About Us
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-swasthya-primary font-medium text-lg">
            Our Services
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-swasthya-primary font-medium text-lg">
            Blog
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-swasthya-primary font-medium text-lg">
            FAQ
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-swasthya-primary font-medium text-lg">
            Contact
          </Link>
        </div>
        
        <Button asChild className="bg-swasthya-primary hover:bg-swasthya-secondary text-white text-lg py-6 px-8 rounded-md">
          <Link to="/login">Log In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
