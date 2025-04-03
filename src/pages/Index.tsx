
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import HealthCardSection from "@/components/HealthCardSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HealthCardSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
