import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const metrics = [
  { icon: TrendingUp, value: "45%", label: "Lead Conversion Increase" },
  { icon: Clock, value: "68%", label: "Response Time Reduction" },
  { icon: DollarSign, value: "$180K", label: "Annual Cost Savings" },
];

export function CaseStudySpotlight() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-body-sm uppercase tracking-wider mb-4 block">
              Featured Case Study
            </span>
            <h2 className="text-display text-primary-foreground mb-6">
              How Midwest Insurance Group Scaled with AI
            </h2>
            <p className="text-body-lg text-primary-foreground/80 mb-8">
              A regional brokerage with 15 agents transformed their operations by implementing 
              our AI chatbot and client portal solutions. Within 6 months, they achieved 
              remarkable improvements across all key metrics.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-heading-xl text-accent font-bold">
                      {metric.value}
                    </div>
                    <div className="text-body-sm text-primary-foreground/70">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to="/case-studies/midwest-insurance">
                Read Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <span className="text-heading-xl text-accent-foreground font-bold">M</span>
                  </div>
                  <p className="text-heading-sm text-primary-foreground font-semibold">
                    Midwest Insurance Group
                  </p>
                  <p className="text-body text-primary-foreground/70">
                    Regional Insurance Brokerage
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-foreground/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
