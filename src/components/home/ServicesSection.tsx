import { Link } from "react-router-dom";
import { MessageSquare, Phone, LayoutDashboard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents that handle client inquiries, provide instant policy information, and qualify leads around the clock.",
    features: ["24/7 availability", "Natural language processing", "CRM integration"],
    href: "/services#chatbots",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description:
      "Human-like voice assistants that manage inbound calls, schedule appointments, and provide personalized policy guidance.",
    features: ["Natural voice synthesis", "Call routing", "Appointment scheduling"],
    href: "/services#voice",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Client Portals",
    description:
      "Self-service portals that empower clients to manage policies, file claims, and access documents without staff intervention.",
    features: ["Self-service tools", "Document management", "Secure messaging"],
    href: "/services#portals",
    color: "bg-accent/10 text-accent",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <span className="text-accent font-semibold text-body-sm uppercase tracking-wider mb-4 block">
            Solutions
          </span>
          <h2 className="text-display text-foreground mb-6">
            Purpose-Built AI for Insurance
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Our solutions are designed specifically for the insurance industry, 
            understanding the unique workflows, compliance requirements, and client expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div
          className={cn(
            "text-center mt-12 opacity-0",
            isVisible && "animate-fade-up delay-400"
          )}
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    href: string;
    color: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "group bg-card rounded-2xl p-8 shadow-md border border-border/50 hover:shadow-xl hover:border-accent/50 transition-all duration-300 flex flex-col opacity-0",
        isVisible && "animate-fade-up",
        index === 1 && "delay-100",
        index === 2 && "delay-200"
      )}
    >
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", service.color)}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-heading-lg text-foreground mb-3 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      
      <p className="text-body text-muted-foreground mb-6 flex-1">
        {service.description}
      </p>

      <ul className="space-y-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-body-sm text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={service.href}
        className="flex items-center gap-2 text-accent font-semibold text-body-sm group-hover:gap-3 transition-all"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}