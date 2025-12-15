import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudySpotlight } from "@/components/home/CaseStudySpotlight";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <CaseStudySpotlight />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
