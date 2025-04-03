
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-swasthya-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need to schedule an appointment? Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} />
                </div>
                
                <Button type="submit" className="w-full bg-swasthya-primary hover:bg-swasthya-secondary text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-swasthya-primary/10 flex items-center justify-center mb-4">
                        <Phone className="w-6 h-6 text-swasthya-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+91 123-456-7890</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-swasthya-primary/10 flex items-center justify-center mb-4">
                        <Mail className="w-6 h-6 text-swasthya-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">swasthyacare@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-swasthya-primary/10 flex items-center justify-center mb-4">
                        <MapPin className="w-6 h-6 text-swasthya-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">123 Healthcare Avenue, Delhi, India - 110001</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-swasthya-primary/10 flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-swasthya-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9am - 7pm<br />Sunday: 10am - 2pm</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contact</h3>
                    <p className="text-gray-600 mb-4">
                      For medical emergencies, please call our 24/7 emergency hotline:
                    </p>
                    <p className="text-xl font-bold text-swasthya-primary">+91 999-888-7777</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
