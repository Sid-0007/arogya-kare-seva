
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const HealthCardSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">INTRODUCING SWASTHYA HEALTH CARD</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">A revolutionary approach to managing your healthcare journey</p>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Health Card" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <Card className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-white to-swasthya-light">
              <CardContent className="p-6 md:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Swasthya Health Card is a revolutionary tool that helps you keep track of all your vital health information in one place. From minor details to major health concerns, this card ensures you have all the information you need at your fingertips.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With the Swasthya Card, you can take control of your health and make informed decisions about your well-being. By becoming a card holder, you will gain access to a wide range of facilities that will enhance your overall experience.
                </p>
                
                <div className="flex justify-center mt-6">
                  <Button asChild size="lg" className="bg-swasthya-primary hover:bg-swasthya-secondary text-white px-8">
                    <Link to="/services/health-card">Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCardSection;
