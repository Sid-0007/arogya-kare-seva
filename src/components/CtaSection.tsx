
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="py-16 bg-swasthya-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Join thousands of members who are already experiencing the benefits of the Swasthya Health Card. Sign up today and start your journey to better healthcare management.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg" className="bg-white text-swasthya-primary hover:bg-gray-100">
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
