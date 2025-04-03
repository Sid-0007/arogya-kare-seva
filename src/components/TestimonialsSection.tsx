
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Patient since 2021",
    content: "The Swasthya Health Card has completely transformed how I manage my healthcare. Having all my medical information in one place makes appointments and emergencies so much easier.",
    avatar: "RS",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Patel",
    role: "Family Plan Member",
    content: "As someone managing healthcare for my entire family, the Swasthya card has been a blessing. The priority support and appointment scheduling save us so much time.",
    avatar: "PP",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Arjun Singh",
    role: "Premium Member",
    content: "The access to specialized care and personalized health recommendations has made a tremendous difference in my wellness journey. Highly recommend to everyone!",
    avatar: "AS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Meera Reddy",
    role: "New Member",
    content: "I was skeptical at first, but the Swasthya Health Card exceeded all my expectations. The ease of accessing my medical history has been invaluable during recent doctor visits.",
    avatar: "MR",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
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

        <div className="px-8 md:px-16">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-gray-200 h-full shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="w-16 h-16 border-2 border-swasthya-primary mb-4">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
