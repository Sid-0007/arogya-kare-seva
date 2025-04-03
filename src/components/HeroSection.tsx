
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-swasthya-primary to-swasthya-secondary text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f0c68fad0df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Health Is Our Priority</h1>
            <p className="text-xl mb-6 text-white/90">Comprehensive healthcare solutions tailored to your needs with our revolutionary Swasthya Health Card system.</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-white h-5 w-5" />
                <span>Access to premium healthcare services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-white h-5 w-5" />
                <span>Priority appointments with specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-white h-5 w-5" />
                <span>Complete medical history at your fingertips</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-white text-swasthya-primary hover:bg-gray-100 shadow-lg">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-swasthya-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7d113979421b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
