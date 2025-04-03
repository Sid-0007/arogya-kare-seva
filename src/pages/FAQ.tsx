
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "What is the Swasthya Health Card?",
    answer: "The Swasthya Health Card is a comprehensive health management tool that helps you track and access your vital health information in one place. It provides benefits like priority appointments, personalized healthcare plans, and access to our network of healthcare facilities."
  },
  {
    question: "How do I apply for a Swasthya Health Card?",
    answer: "You can apply for a Swasthya Health Card by visiting our website and filling out the application form, visiting any of our healthcare centers in person, or calling our customer service line. The application process is simple and requires basic personal and health information."
  },
  {
    question: "What are the benefits of having a Swasthya Health Card?",
    answer: "Benefits include centralized health information management, priority appointments, discounts on healthcare services, access to specialized care, personalized health recommendations, and 24/7 customer support for all your healthcare needs."
  },
  {
    question: "Can I add my family members to my health card plan?",
    answer: "Yes, we offer family plans that allow you to add your spouse, children, and dependent parents to your health card. Each family member receives their own card that is linked to the family account, making it easy to manage healthcare for the whole family."
  },
  {
    question: "How secure is my health information with Swasthya?",
    answer: "We take data security very seriously. All health information is stored in encrypted formats on secure servers that comply with healthcare data protection regulations. We never share your information with third parties without your explicit consent."
  },
  {
    question: "Do you offer telehealth consultations?",
    answer: "Yes, we offer telehealth consultations for a wide range of non-emergency medical concerns. Health Card members receive priority scheduling for telehealth appointments and can access our network of specialists remotely."
  },
  {
    question: "What if I need to see a specialist?",
    answer: "As a Health Card member, you have access to our extensive network of specialists across various medical fields. We can facilitate referrals and help schedule appointments based on your healthcare needs."
  },
  {
    question: "Are there different tiers of Health Cards?",
    answer: "Yes, we offer Basic, Premium, and Elite Health Card tiers, each with different levels of benefits and services. You can choose the tier that best fits your healthcare needs and budget."
  },
  {
    question: "How can I renew my Health Card?",
    answer: "Health Cards typically have an annual renewal. You'll receive notification before your card expires, and you can renew online, by phone, or in person at any of our healthcare centers."
  },
  {
    question: "What should I do if I lose my Health Card?",
    answer: "If you lose your physical Health Card, please contact our customer service immediately. We can issue a replacement card and ensure your account remains secure. Your health information remains accessible through our secure online portal during this time."
  }
];

const FAQ = () => {
  return (
    <Layout>
      <div className="bg-swasthya-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our services and health card
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-gray-800 font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Our customer support team is ready to help you with any other questions you might have.
              </p>
              <Button asChild className="bg-swasthya-primary hover:bg-swasthya-secondary text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
