
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Importance of Preventive Healthcare",
    excerpt: "Learn why preventive care is crucial for long-term health and wellness, and how regular check-ups can help detect issues early.",
    date: "April 01, 2023",
    author: "Dr. Meera Sharma",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Preventive Care"
  },
  {
    id: 2,
    title: "The Benefits of Digital Health Records",
    excerpt: "Discover how digital health records are transforming healthcare delivery and improving patient outcomes through better information access.",
    date: "March 15, 2023",
    author: "Rajiv Mehta",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Healthcare Technology"
  },
  {
    id: 3,
    title: "Nutrition Tips for a Stronger Immune System",
    excerpt: "Explore the connection between diet and immune function, with practical tips for incorporating immune-boosting foods into your meals.",
    date: "February 28, 2023",
    author: "Anjali Desai, Nutritionist",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Nutrition"
  },
  {
    id: 4,
    title: "Managing Chronic Conditions with Telemedicine",
    excerpt: "How virtual consultations and remote monitoring are making it easier for patients with chronic conditions to receive consistent care.",
    date: "February 10, 2023",
    author: "Dr. Sunil Patel",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Telemedicine"
  },
  {
    id: 5,
    title: "Mental Health Matters: Self-Care Strategies for Busy Professionals",
    excerpt: "Simple but effective techniques to maintain good mental health while balancing the demands of a busy professional life.",
    date: "January 25, 2023",
    author: "Priya Gupta, Psychologist",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Mental Health"
  },
  {
    id: 6,
    title: "Understanding Your Health Card Benefits",
    excerpt: "A comprehensive guide to maximizing the benefits of your Swasthya Health Card and accessing all available services.",
    date: "January 12, 2023",
    author: "The Swasthya Team",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Health Card"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="bg-swasthya-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Health Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tips, and the latest updates from our healthcare experts
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="bg-swasthya-light text-swasthya-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Button variant="link" className="p-0 text-swasthya-primary hover:text-swasthya-secondary">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-swasthya-primary hover:bg-swasthya-secondary text-white">
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
