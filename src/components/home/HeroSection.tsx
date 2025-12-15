import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const trustPoints = [
  "30% reduction in operational costs",
  "24/7 automated client support",
  "50+ insurance brokerages transformed",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.2)_0%,_transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float delay-300" />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-body-sm font-medium">
              Specialized for Insurance Brokerages
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-display-lg md:text-display-xl text-primary-foreground mb-6 animate-fade-up delay-100">
            Transform Your Brokerage with{" "}
            <span className="text-accent">Intelligent AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg md:text-heading-sm text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
            Reduce costs, improve client satisfaction, and scale operations with 
            AI-powered chatbots, voice agents, and custom client portals designed 
            specifically for insurance professionals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up delay-300">
            <Button size="xl" variant="accent" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" variant="hero-outline" asChild>
              <Link to="/case-studies">
                <Play className="w-5 h-5" />
                View Success Stories
              </Link>
            </Button>
          </div>

          {/* Trust Points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up delay-400">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-body-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
