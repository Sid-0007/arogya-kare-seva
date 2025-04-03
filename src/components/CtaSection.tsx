
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-swasthya-primary/90"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Take Control of Your Health?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 text-white/90">
          Join thousands of members who are already experiencing the benefits of the Swasthya Health Card. Sign up today and start your journey to better healthcare management.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg" className="bg-white text-swasthya-primary hover:bg-gray-100 shadow-lg">
            <Link to="/services/health-card">Get Your Health Card</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-swasthya-primary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
