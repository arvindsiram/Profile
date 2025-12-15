import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    id: "midwest-insurance",
    title: "Midwest Insurance Group",
    category: "AI Chatbot + Portal",
    description: "Regional brokerage transforms client service with 24/7 AI support",
    metrics: [
      { icon: TrendingUp, value: "45%", label: "Lead Conversion" },
      { icon: Clock, value: "68%", label: "Faster Response" },
      { icon: DollarSign, value: "$180K", label: "Annual Savings" },
    ],
    image: "M",
  },
  {
    id: "coastal-partners",
    title: "Coastal Insurance Partners",
    category: "Voice Agent",
    description: "Multi-location agency handles 3x call volume without hiring",
    metrics: [
      { icon: Users, value: "3,200", label: "Calls/Month" },
      { icon: Clock, value: "24/7", label: "Availability" },
      { icon: DollarSign, value: "$95K", label: "Annual Savings" },
    ],
    image: "C",
  },
  {
    id: "summit-group",
    title: "Summit Brokerage Group",
    category: "Full Suite",
    description: "Complete digital transformation for growing commercial brokerage",
    metrics: [
      { icon: TrendingUp, value: "120%", label: "Client Growth" },
      { icon: Clock, value: "5 min", label: "Avg Response" },
      { icon: DollarSign, value: "$320K", label: "Annual Savings" },
    ],
    image: "S",
  },
  {
    id: "harbor-insurance",
    title: "Harbor Insurance",
    category: "Client Portal",
    description: "Self-service portal reduces admin workload by 60%",
    metrics: [
      { icon: Users, value: "4,500", label: "Active Users" },
      { icon: Clock, value: "60%", label: "Less Admin" },
      { icon: DollarSign, value: "$85K", label: "Annual Savings" },
    ],
    image: "H",
  },
];

const categories = ["All", "AI Chatbot", "Voice Agent", "Client Portal", "Full Suite"];

export default function CaseStudies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-body-sm uppercase tracking-wider mb-4">
              Case Studies
            </span>
            <h1 className="text-display-lg text-primary-foreground mb-6">
              Real Results for Real Brokerages
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              See how insurance professionals like you have transformed their operations 
              and achieved measurable ROI with our AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-md z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-lg text-body-sm font-medium transition-colors",
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display text-foreground mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              Join the growing list of insurance brokerages transforming their operations with AI.
            </p>
            <Button size="xl" variant="accent" asChild>
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface CaseStudyCardProps {
  study: typeof caseStudies[0];
  index: number;
}

function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && "animate-fade-up",
        index % 2 === 1 && "delay-100"
      )}
    >
      <Link
        to={`/case-studies/${study.id}`}
        className="group block bg-card rounded-2xl overflow-hidden shadow-md border border-border/50 hover:shadow-xl hover:border-accent/50 transition-all duration-300"
      >
      {/* Image */}
      <div className="aspect-video bg-gradient-hero flex items-center justify-center relative">
        <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
          <span className="text-display text-primary-foreground font-bold">
            {study.image}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-body-sm font-medium">
            {study.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-heading-lg text-foreground mb-2 group-hover:text-accent transition-colors">
          {study.title}
        </h3>
        <p className="text-body text-muted-foreground mb-6">{study.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {study.metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="text-center">
                <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-heading-sm text-foreground font-bold">
                  {metric.value}
                </div>
                <div className="text-body-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
    </div>
  );
}