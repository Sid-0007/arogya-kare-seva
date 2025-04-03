
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="bg-swasthya-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission to transform healthcare accessibility and quality
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Swasthya began with a simple mission: to make quality healthcare accessible to everyone. What started as a small clinic has grown into a comprehensive healthcare ecosystem that serves thousands of patients daily.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Dr. Anil Kapoor, envisioned a healthcare system that puts patients first, emphasizing preventive care, transparent information, and personalized service. Today, that vision drives everything we do.
              </p>
              <p className="text-gray-700">
                Over the years, we've pioneered innovations like the Swasthya Health Card, which revolutionized how patients manage their health information and access services.
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="max-w-md border border-gray-200 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Healthcare professionals"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-swasthya-primary mb-3">Patient-Centered Care</h3>
                  <p className="text-gray-700">
                    We put patients at the center of everything we do, ensuring their needs, preferences, and values guide our clinical decisions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-swasthya-primary mb-3">Excellence & Innovation</h3>
                  <p className="text-gray-700">
                    We strive for excellence in healthcare delivery and continuously innovate to improve outcomes and patient experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-swasthya-primary mb-3">Integrity & Transparency</h3>
                  <p className="text-gray-700">
                    We operate with utmost integrity and transparency, building trust through honest communication and ethical practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
