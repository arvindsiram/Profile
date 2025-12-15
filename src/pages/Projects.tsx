import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "insurance-renewal-automation",
    title: "Insurance Renewal Automation System",
    excerpt:
      "An end-to-end automation that tracks upcoming renewals, sends scheduled reminder emails, provides a live dashboard, and allows one-click manual follow-ups.",
    category: "Automation",
    date: "2025",
    duration: "Workflow-based system",
    featured: true,
  },
  {
    id: "voice-agent-lead-qualification",
    title: "AI Voice Agent for Lead Qualification",
    excerpt:
      "A voice-based AI agent that answers inbound calls, qualifies insurance leads, captures intent, and routes data to internal systems.",
    category: "Voice AI",
    date: "2025",
    duration: "Conversational AI",
    featured: false,
  },
  {
    id: "insurance-chatbot-demo",
    title: "Demo Insurance Website with AI Chatbot",
    excerpt:
      "A simple insurance website integrated with a chatbot that answers FAQs about policies, coverage, and company details.",
    category: "Demo Project",
    date: "2024",
    duration: "Web + Chatbot",
    featured: false,
  },
];

const categories = ["All", "Automation", "Voice AI", "Demo Project"];

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-body-sm uppercase tracking-wider mb-4">
              Sample Projects
            </span>
            <h1 className="text-display-lg text-primary-foreground mb-6">
              Practical AI Automation Systems
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Real-world automation projects built for insurance workflows—focused on
              efficiency, reliability, and usability.
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

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-16">
          <div className="container">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-12 pb-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-surface">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display text-foreground mb-6">
              Want Something Similar?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              If you’re an insurance brokerage looking to automate renewals, lead handling,
              or client communication, let’s talk.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/contact">
                Discuss Your Use Case
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface FeaturedProjectCardProps {
  project: typeof projects[0];
}

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("opacity-0", isVisible && "animate-fade-up")}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50">
        {/* Visual */}
        <div className="aspect-video lg:aspect-auto bg-gradient-hero flex items-center justify-center">
          <span className="text-display text-primary-foreground/50">Featured Project</span>
        </div>

        {/* Content */}
        <div className="p-8 lg:py-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-body-sm font-medium">
              {project.category}
            </span>
            <span className="text-body-sm text-muted-foreground">Featured</span>
          </div>

          <h2 className="text-heading-xl text-foreground mb-4">
            {project.title}
          </h2>

          <p className="text-body-lg text-muted-foreground mb-6">
            {project.excerpt}
          </p>

          <div className="flex items-center gap-4 text-body-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {project.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && "animate-fade-up",
        index % 3 === 1 && "delay-100",
        index % 3 === 2 && "delay-200"
      )}
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-md border border-border/50">
        {/* Visual */}
        <div className="aspect-video bg-muted flex items-center justify-center">
          <span className="text-heading text-muted-foreground/50">Project</span>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-body-sm font-medium mb-3 inline-block">
            {project.category}
          </span>

          <h3 className="text-heading text-foreground mb-3">
            {project.title}
          </h3>

          <p className="text-body text-muted-foreground mb-4">
            {project.excerpt}
          </p>

          <div className="flex items-center gap-4 text-body-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {project.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}