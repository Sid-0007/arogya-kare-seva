
import { Star, Users, Clock, Building } from "lucide-react";

const stats = [
  {
    title: "5000+",
    description: "Happy Patients",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "50+",
    description: "Specialist Doctors",
    icon: Star,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "24/7",
    description: "Medical Support",
    icon: Clock,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "20+",
    description: "Years of Service",
    icon: Building,
    color: "bg-amber-100 text-amber-600",
  },
];

const StatsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
