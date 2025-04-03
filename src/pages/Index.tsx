
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import HealthCardSection from "@/components/HealthCardSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  useEffect(() => {
    // Smooth scroll effect
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Layout>
      <div className="space-y-0">
        <HeroSection />
        <HealthCardSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;
