import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Linkedin, BookOpen, Target, Heart, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Clear Niche Focus",
    description:
      "We build AI automations specifically for insurance brokerages—renewals, follow-ups, client communication, and internal workflows.",
  },
  {
    icon: Heart,
    title: "Human-First Automation",
    description:
      "Automation should reduce workload, not remove relationships. Our systems support brokers, not replace them.",
  },
  {
    icon: Lightbulb,
    title: "Practical Systems",
    description:
      "No hype. No overengineering. Every automation is designed to save time, reduce errors, and improve response speed.",
  },
];

const credentials = [
  "AI Automation & Workflow Design",
  "Full-Stack Development Background",
  "CRM & Email Automation Systems",
  "Insurance Process Understanding",
];

const milestones = [
  { year: "2024", event: "Started building real-world AI automations for service businesses" },
  { year: "2024", event: "Designed renewal reminder & notification workflows" },
  { year: "2025", event: "Focused exclusively on insurance brokerage use-cases" },
  { year: "2025", event: "Developed dashboard-driven automation systems" },
  { year: "2025", event: "Launched AI automation services for brokerages" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-body-sm uppercase tracking-wider mb-4">
              About
            </span>
            <h1 className="text-display-lg text-primary-foreground mb-6">
              AI Automation for Insurance Brokerages
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              I help insurance brokerages streamline operations, reduce manual work, 
              and respond faster—using practical AI automation built around real workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div
            ref={ref}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0",
              isVisible && "animate-fade-up"
            )}
          >
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-hero flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                    <span className="text-display-lg text-primary-foreground font-bold">
                      AS
                    </span>
                  </div>
                  <p className="text-heading text-primary-foreground">Arvind</p>
                  <p className="text-body text-primary-foreground/70">
                    AI Automation Builder
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-display text-foreground mb-6">My Story</h2>
              <div className="space-y-4 text-body-lg text-muted-foreground mb-8">
                <p>
                  I come from a full-stack and automation background, where I spent time
                  building systems that remove repetitive work and improve reliability.
                  While exploring AI, I noticed something important—most businesses don’t
                  need complex AI, they need *useful automation*.
                </p>
                <p>
                  Insurance brokerages, in particular, handle renewals, follow-ups,
                  documentation, and client communication daily—much of it still manual.
                  That’s where automation creates immediate value.
                </p>
                <p>
                  My goal is simple: design AI-powered workflows that fit directly into
                  how brokerages already operate, helping them save time while keeping
                  the personal service their clients expect.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {credentials.map((credential) => (
                  <div
                    key={credential}
                    className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg"
                  >
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-body-sm font-medium text-foreground">
                      {credential}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gradient-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-body-sm uppercase tracking-wider mb-4 block">
              Core Principles
            </span>
            <h2 className="text-display text-foreground">How I Build</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-accent mx-auto mb-8" />
            <blockquote className="text-heading-xl md:text-display text-foreground mb-6">
              "Good automation doesn’t feel like AI.
              It feels like your workday suddenly got lighter."
            </blockquote>
            <p className="text-body-lg text-muted-foreground">— Arvind</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-body-sm uppercase tracking-wider mb-4 block">
              Journey
            </span>
            <h2 className="text-display text-primary-foreground">Milestones</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={cn(
                  "flex items-start gap-6 pb-8",
                  index !== milestones.length - 1 &&
                    "border-l-2 border-primary-foreground/20 ml-6 pl-6"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 -ml-12">
                  <span className="text-body-sm font-bold text-accent-foreground">
                    {milestone.year.slice(2)}
                  </span>
                </div>
                <div>
                  <div className="text-heading-sm text-accent font-bold mb-1">
                    {milestone.year}
                  </div>
                  <p className="text-body-lg text-primary-foreground/80">
                    {milestone.event}
                  </p>
                </div>
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
              Let’s Talk Automation
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              If you run an insurance brokerage and want to reduce manual work,
              I’d love to understand your processes and see where automation fits.
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

interface ValueCardProps {
  value: typeof values[0];
  index: number;
}

function ValueCard({ value, index }: ValueCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = value.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "bg-card rounded-2xl p-8 shadow-md border border-border/50 text-center opacity-0",
        isVisible && "animate-fade-up",
        index === 1 && "delay-100",
        index === 2 && "delay-200"
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-heading text-foreground mb-3">{value.title}</h3>
      <p className="text-body text-muted-foreground">{value.description}</p>
    </div>
  );
}