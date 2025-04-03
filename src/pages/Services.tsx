
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Stethoscope, ScanLine, Pill, UserPlus, Clock } from "lucide-react";

const servicesData = [
  {
    title: "Swasthya Health Card",
    description: "Our revolutionary health card system that helps you manage your health information and access premium services.",
    icon: Heart,
    link: "/services/health-card",
  },
  {
    title: "Primary Care",
    description: "Comprehensive primary healthcare services for patients of all ages, from preventive care to chronic disease management.",
    icon: Stethoscope,
    link: "/services/primary-care",
  },
  {
    title: "Diagnostic Services",
    description: "State-of-the-art diagnostic facilities including laboratory tests, imaging services, and specialized screenings.",
    icon: ScanLine,
    link: "/services/diagnostics",
  },
  {
    title: "Pharmacy Services",
    description: "Convenient access to prescribed medications with expert pharmacist consultation and medication management.",
    icon: Pill,
    link: "/services/pharmacy",
  },
  {
    title: "Specialist Consultations",
    description: "Access to a network of specialist physicians across various medical specialties for expert care.",
    icon: UserPlus,
    link: "/services/specialist-consultations",
  },
  {
    title: "Telehealth Services",
    description: "Virtual consultations with healthcare providers from the comfort of your home for non-emergency concerns.",
    icon: Clock,
    link: "/services/telehealth",
  },
];

const Services = () => {
  return (
    <Layout>
      <div className="bg-swasthya-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed with your needs in mind
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-swasthya-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-swasthya-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="w-full border-swasthya-primary text-swasthya-primary hover:bg-swasthya-primary hover:text-white">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-swasthya-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Looking for a Specific Service?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Our team of healthcare professionals is ready to assist you with any healthcare needs you may have. Contact us to learn more about our services or to schedule an appointment.
          </p>
          <Button asChild className="bg-swasthya-primary hover:bg-swasthya-secondary text-white">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
