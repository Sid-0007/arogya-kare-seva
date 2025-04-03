
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Patient since 2021",
    content: "The Swasthya Health Card has completely transformed how I manage my healthcare. Having all my medical information in one place makes appointments and emergencies so much easier.",
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    role: "Family Plan Member",
    content: "As someone managing healthcare for my entire family, the Swasthya card has been a blessing. The priority support and appointment scheduling save us so much time.",
    avatar: "PP",
  },
  {
    name: "Arjun Singh",
    role: "Premium Member",
    content: "The access to specialized care and personalized health recommendations has made a tremendous difference in my wellness journey. Highly recommend to everyone!",
    avatar: "AS",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Members Say</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Don't just take our word for it - hear from our satisfied members about their experience with Swasthya
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-16 h-16 border-2 border-swasthya-primary mb-4">
                    <AvatarFallback className="bg-swasthya-primary text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
