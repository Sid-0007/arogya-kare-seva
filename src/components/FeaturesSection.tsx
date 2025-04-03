
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ClipboardCheck, Clock, Users, Award, Headphones } from "lucide-react";

const features = [
  {
    title: "Complete Health Tracking",
    description: "Monitor all your vital health information in one convenient place",
    icon: Heart,
  },
  {
    title: "Medical Records Access",
    description: "Access your complete medical history whenever you need it",
    icon: ClipboardCheck,
  },
  {
    title: "Priority Appointments",
    description: "Get priority scheduling for consultations and treatments",
    icon: Clock,
  },
  {
    title: "Family Coverage",
    description: "Add family members to your health card for comprehensive care",
    icon: Users,
  },
  {
    title: "Premium Healthcare",
    description: "Access to premium healthcare services and specialists",
    icon: Award,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your healthcare needs",
    icon: Headphones,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-swasthya-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Key Features</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Discover the benefits that make the Swasthya Health Card essential for your healthcare journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-swasthya-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-swasthya-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
