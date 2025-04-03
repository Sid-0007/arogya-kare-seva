
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-swasthya-primary text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f0c68fad0df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Swasthya</h1>
            <p className="text-xl mb-8 text-white/90">Your partner in health and wellness, providing comprehensive healthcare solutions for a healthier tomorrow.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-white text-swasthya-primary hover:bg-gray-100">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-swasthya-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-swasthya-secondary rounded-xl p-8 md:p-10 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Your Health, Our Priority</h2>
              <p className="text-lg mb-6">Committed to providing top-notch healthcare services for you and your family.</p>
              <div className="flex justify-center gap-4">
                <Button asChild className="bg-white text-swasthya-primary hover:bg-gray-100">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
