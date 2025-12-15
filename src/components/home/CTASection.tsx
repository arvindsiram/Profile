import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "relative bg-gradient-hero rounded-3xl p-8 md:p-16 text-center overflow-hidden opacity-0",
            isVisible && "animate-scale-in"
          )}
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-display text-primary-foreground mb-6">
              Ready to Transform Your Brokerage?
            </h2>
            <p className="text-body-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation to discover how AI automation 
              can reduce your costs and improve client satisfaction. No commitment required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button size="xl" variant="accent" asChild>
                <Link to="/contact">
                  <Calendar className="w-5 h-5" />
                  Book Your Free Consultation
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" asChild>
                <Link to="/services">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Trust elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-body-sm">100% HIPAA Compliant</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/40" />
              <span className="text-body-sm">Response within 24 hours</span>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/40" />
              <span className="text-body-sm">No technical expertise required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
