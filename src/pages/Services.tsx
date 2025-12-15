import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Phone, 
  LayoutDashboard, 
  ArrowRight, 
  Check,
  Zap,
  Shield,
  Settings
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "chatbots",
    icon: MessageSquare,
    title: "AI Chatbots",
    subtitle: "24/7 Intelligent Client Support",
    description:
      "Deploy conversational AI that understands insurance terminology, handles policy inquiries, qualifies leads, and provides instant support - all while maintaining compliance.",
    features: [
      "Natural language understanding trained on insurance terminology",
      "Instant policy information and document retrieval",
      "Lead qualification and appointment scheduling",
      "Seamless handoff to human agents when needed",
      "CRM and AMS integration",
      "Multi-language support",
    ],
    benefits: [
      { icon: Zap, text: "80% faster response times" },
      { icon: Shield, text: "HIPAA compliant" },
      { icon: Settings, text: "Custom workflows" },
    ],
  },
  {
    id: "voice",
    icon: Phone,
    title: "AI Voice Agents",
    subtitle: "Human-Like Phone Interactions",
    description:
      "Voice AI that handles inbound calls naturally, routes inquiries intelligently, and provides personalized guidance - indistinguishable from your best team members.",
    features: [
      "Natural voice synthesis with industry-specific vocabulary",
      "Intelligent call routing and prioritization",
      "Appointment scheduling and reminders",
      "Claim status updates and policy information",
      "After-hours coverage without staffing costs",
      "Call recording and transcription for compliance",
    ],
    benefits: [
      { icon: Zap, text: "Never miss a call" },
      { icon: Shield, text: "Call compliance logging" },
      { icon: Settings, text: "Custom voice personas" },
    ],
  },
  {
    id: "portals",
    icon: LayoutDashboard,
    title: "Custom Client Portals",
    subtitle: "Self-Service Excellence",
    description:
      "Branded portals that empower clients to manage their insurance needs independently - viewing policies, filing claims, and accessing documents anytime.",
    features: [
      "Branded, mobile-responsive interface",
      "Policy viewing and document access",
      "Online claim filing with status tracking",
      "Secure messaging with your team",
      "Payment processing and history",
      "Certificate of insurance requests",
    ],
    benefits: [
      { icon: Zap, text: "Reduce admin calls 60%" },
      { icon: Shield, text: "Bank-level security" },
      { icon: Settings, text: "Full white-label" },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your workflows, pain points, and goals to design the perfect solution.",
  },
  {
    step: "02",
    title: "Design",
    description: "Custom AI configuration tailored to your processes, brand, and compliance needs.",
  },
  {
    step: "03",
    title: "Development",
    description: "Rapid implementation with continuous testing and refinement based on your feedback.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Seamless deployment with training, documentation, and ongoing support.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-body-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-display-lg text-primary-foreground mb-6">
              AI Solutions Built for Insurance
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Purpose-built automation that understands the unique challenges of 
              insurance brokerages - from compliance requirements to client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Process */}
      <section className="py-20 md:py-28 bg-gradient-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-body-sm uppercase tracking-wider mb-4 block">
              Our Process
            </span>
            <h2 className="text-display text-foreground mb-6">
              From Discovery to Launch
            </h2>
            <p className="text-body-lg text-muted-foreground">
              A proven methodology that ensures smooth implementation and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessCard key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-display text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-body-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Schedule a free consultation to discuss which solutions are right for your brokerage.
            </p>
            <Button size="xl" variant="accent" asChild>
              <Link to="/contact">
                Book Your Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ServiceSectionProps {
  service: typeof services[0];
  index: number;
}

function ServiceSection({ service, index }: ServiceSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = service.icon;
  const isReversed = index % 2 === 1;

  return (
    <section
      id={service.id}
      className={cn("py-20 md:py-28", index % 2 === 1 && "bg-muted/30")}
    >
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0",
            isVisible && "animate-fade-up",
            isReversed && "lg:flex-row-reverse"
          )}
        >
          {/* Content */}
          <div className={cn(isReversed && "lg:order-2")}>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="text-display text-foreground mb-2">{service.title}</h2>
            <p className="text-heading text-accent mb-6">{service.subtitle}</p>
            <p className="text-body-lg text-muted-foreground mb-8">
              {service.description}
            </p>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-body text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              {service.benefits.map((benefit) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div
                    key={benefit.text}
                    className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg"
                  >
                    <BenefitIcon className="w-4 h-4 text-accent" />
                    <span className="text-body-sm font-medium text-foreground">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div className={cn("relative", isReversed && "lg:order-1")}>
            <div className="aspect-square rounded-3xl bg-gradient-hero flex items-center justify-center">
              <div className="w-32 h-32 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: typeof processSteps[0];
  index: number;
}

function ProcessCard({ step, index }: ProcessCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "text-center opacity-0",
        isVisible && "animate-fade-up",
        index === 1 && "delay-100",
        index === 2 && "delay-200",
        index === 3 && "delay-300"
      )}
    >
      <div className="text-display text-accent/20 font-bold mb-4">{step.step}</div>
      <h3 className="text-heading text-foreground mb-3">{step.title}</h3>
      <p className="text-body text-muted-foreground">{step.description}</p>
    </div>
  );
}