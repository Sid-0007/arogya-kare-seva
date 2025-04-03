
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const HealthCardSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">INTRODUCING SWASTHYA HEALTH CARD...</h2>
        
        <Card className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Swasthya Health Card is a revolutionary tool that helps you keep track of all your vital health information in one place. From minor details to major health concerns, this card ensures you have all the information you need at your fingertips. With the Swasthya Card, you can take control of your health and make informed decisions about your well-being. By becoming a card holder, you will gain access to a wide range of facilities that will enhance your overall experience. From personalized offers to priority customer support, our goal is to provide you with the best possible service. Join us and take advantage of all the benefits that come with being a holder.
            </p>
            
            <div className="flex justify-center mt-6">
              <Button asChild className="bg-swasthya-primary hover:bg-swasthya-secondary text-white px-8">
                <Link to="/services/health-card">Apply Now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthCardSection;
