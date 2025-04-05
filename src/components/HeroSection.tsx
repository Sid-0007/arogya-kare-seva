
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-swasthya-primary text-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to<br />Swasthya</h1>
            <p className="text-xl mb-10 text-white/90 max-w-xl">Your partner in health and wellness, providing comprehensive healthcare solutions for a healthier tomorrow.</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-swasthya-primary hover:bg-gray-100 py-6 px-10 text-lg">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-swasthya-primary py-6 px-10 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-swasthya-secondary/80 rounded-xl p-10 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-semibold mb-5">Your Health, Our Priority</h2>
              <p className="text-xl mb-8">Committed to providing top-notch healthcare services for you and your family.</p>
              <div className="">
                <Button asChild className="bg-white text-swasthya-primary hover:bg-gray-100 py-6 px-10 text-lg">
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
