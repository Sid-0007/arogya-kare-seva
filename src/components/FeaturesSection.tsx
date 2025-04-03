
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ClipboardCheck, Clock, Users, Award, Headphones } from "lucide-react";

const features = [
  {
    title: "Complete Health Tracking",
    description: "Monitor all your vital health information in one convenient place",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Medical Records Access",
    description: "Access your complete medical history whenever you need it",
    icon: ClipboardCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Priority Appointments",
    description: "Get priority scheduling for consultations and treatments",
    icon: Clock,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Family Coverage",
    description: "Add family members to your health card for comprehensive care",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Premium Healthcare",
    description: "Access to premium healthcare services and specialists",
    icon: Award,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your healthcare needs",
    icon: Headphones,
    color: "bg-indigo-100 text-indigo-600",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-swasthya-light to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Key Features</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Discover the benefits that make the Swasthya Health Card essential for your healthcare journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
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
