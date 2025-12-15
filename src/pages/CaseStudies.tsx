import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    id: "renewal-automation-pilot",
    title: "Insurance Renewal Automation (Pilot Project)",
    category: "Automation System",
    description:
      "Built a renewal automation system that tracks upcoming policy renewals, sends scheduled reminder emails, and provides a dashboard for manual follow-ups.",
    metrics: [
      { icon: Clock, value: "Monthly", label: "Automated Email Runs" },
      { icon: Users, value: "1 Click", label: "Manual Follow-Up" },
      { icon: TrendingUp, value: "Reduced", label: "Missed Renewals" },
    ],
    image: "R",
  },
  {
    id: "voice-agent-demo",
    title: "AI Voice Agent for Lead Qualification",
    category: "Voice AI",
    description:
      "Developed a voice-based AI agent to handle inbound calls, ask qualification questions, and capture structured lead data for insurance teams.",
    metrics: [
      { icon: Clock, value: "24/7", label: "Call Handling" },
      { icon: Users, value: "Inbound", label: "Lead Qualification" },
      { icon: TrendingUp, value: "Consistent", label: "Call Response" },
    ],
    image: "V",
  },
  {
    id: "insurance-chatbot-demo",
    title: "Insurance Website with AI Chatbot (Demo)",
    category: "Chatbot Demo",
    description:
      "Created a demo insurance website with an AI chatbot that answers common questions about policies, coverage, and company information.",
    metrics: [
      { icon: Users, value: "FAQs", label: "Answered Automatically" },
      { icon: Clock, value: "Instant", label: "Responses" },
      { icon: TrendingUp, value: "Improved", label: "User Experience" },
    ],
    image: "C",
  },
];

const categories = ["All", "Automation System", "Voice AI", "Chatbot Demo"];

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
              Practical Automation Examples
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Real automation systems and demos built to solve common insurance
              workflow problems—focused on reliability and clarity.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Want a System Like This?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              If you want a similar automation tailored to your brokerage workflows,
              let’s discuss your use case.
            </p>
            <Button size="xl" variant="accent" asChild>
              <Link to="/contact">
                Start a Conversation
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
      <div className="bg-card rounded-2xl overflow-hidden shadow-md border border-border/50">
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
          <h3 className="text-heading-lg text-foreground mb-2">
            {study.title}
          </h3>
          <p className="text-body text-muted-foreground mb-6">
            {study.description}
          </p>

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
      </div>
    </div>
  );
}
