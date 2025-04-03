
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2 overflow-hidden">
              <img
                src="/lovable-uploads/d8a2d024-18f4-4c1f-af33-9bf9bebac547.png"
                alt="Swasthya Logo"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-swasthya-primary/10 rounded-full"></div>
            </div>
            <span className="text-swasthya-primary text-2xl font-bold">Swasthya</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-swasthya-primary font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-swasthya-primary font-medium">
            About Us
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-swasthya-primary font-medium">
            Our Services
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-swasthya-primary font-medium">
            Blog
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-swasthya-primary font-medium">
            FAQ
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-swasthya-primary font-medium">
            Contact
          </Link>
        </div>
        
        <Button asChild className="bg-swasthya-primary hover:bg-swasthya-secondary text-white">
          <Link to="/login">Log In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
