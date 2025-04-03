
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-swasthya-primary text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome to Swasthya</h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-swasthya-secondary rounded-xl p-8 md:p-12 mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Your Health, Our Priority</h2>
            <p className="text-lg mb-6">Committed to providing top-notch healthcare services.</p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-white text-swasthya-primary hover:bg-gray-100">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-swasthya-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
