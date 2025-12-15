import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  PenTool,
  Settings,
  Rocket,
  RefreshCcw,
  CheckCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Workflow Discovery",
    icon: Search,
    description:
      "I start by understanding how your brokerage currently operates—renewals, follow-ups, calls, emails, and internal tracking.",
    points: [
      "Identify repetitive and manual tasks",
      "Understand existing tools (CRM, email, spreadsheets)",
      "Map real workflows, not assumptions",
    ],
  },
  {
    step: "02",
    title: "Automation Design",
    icon: PenTool,
    description:
      "Based on your workflows, I design a simple and reliable automation system tailored to your processes.",
    points: [
      "Clear triggers and conditions",
      "Human-in-the-loop where needed",
      "No unnecessary complexity",
    ],
  },
  {
    step: "03",
    title: "Build & Integration",
    icon: Settings,
    description:
      "The automation is built and connected to your existing systems like email, dashboards, and databases.",
    points: [
      "Email & notification workflows",
      "Dashboards for visibility",
      "AI models only where they add value",
    ],
  },
  {
    step: "04",
    title: "Testing & Validation",
    icon: CheckCircle,
    description:
      "Before anything goes live, workflows are tested with real scenarios to ensure accuracy and reliability.",
    points: [
      "Edge cases handled",
      "Manual override options",
      "Clear logging and visibility",
    ],
  },
  {
    step: "05",
    title: "Deployment",
    icon: Rocket,
    description:
      "Once tested, the system is deployed into your day-to-day operations with minimal disruption.",
    points: [
      "Smooth rollout",
      "Simple usage instructions",
      "No steep learning curve",
    ],
  },
  {
    step: "06",
    title: "Iteration & Improvement",
    icon: RefreshCcw,
    description:
      "Automation is never one-and-done. I refine workflows based on usage and feedback.",
    points: [
      "Small improvements over time",
      "New automation opportunities",
      "Scales as your brokerage grows",
    ],
  },
];

const automationAreas = [
  "Policy renewal reminders & follow-ups",
  "Inbound lead qualification (chat or voice)",
  "Client FAQs and basic support",
  "Internal dashboards & tracking",
  "Manual task reduction for admin teams",
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-body-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h1 className="text-display-lg text-primary-foreground mb-6">
              From Manual Work to Reliable Automation
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A clear, practical process for designing AI automation systems that fit
              real insurance brokerage workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-display text-foreground mb-6">
              The Process
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Every automation follows a structured approach to ensure it’s useful,
              understandable, and dependable.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What Gets Automated */}
      <section className="py-20 md:py-28 bg-gradient-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-display text-foreground mb-6">
              What Can Be Automated
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Common insurance workflows where automation delivers immediate value.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {automationAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 bg-card border border-border/50 rounded-xl p-5"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-body text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display text-foreground mb-6">
              Ready to Automate Smarter?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              If you’d like to reduce manual work and build reliable automation
              around your brokerage workflows, let’s talk.
            </p>
            <Button size="xl" variant="accent" asChild>
              <Link to="/contact">
                Discuss Your Workflow
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ProcessStepProps {
  step: typeof steps[0];
  index: number;
}

function ProcessStep({ step, index }: ProcessStepProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-10 items-center opacity-0",
        isVisible && "animate-fade-up",
        index % 2 === 1 && "md:flex-row-reverse"
      )}
    >
      {/* Text */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-accent font-bold text-heading">
            {step.step}
          </span>
          <h3 className="text-heading-lg text-foreground">
            {step.title}
          </h3>
        </div>
        <p className="text-body-lg text-muted-foreground mb-6">
          {step.description}
        </p>
        <ul className="space-y-2">
          {step.points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-body text-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Icon Card */}
      <div className="bg-card border border-border/50 rounded-2xl p-10 flex items-center justify-center">
        <Icon className="w-20 h-20 text-accent" />
      </div>
    </div>
  );
}