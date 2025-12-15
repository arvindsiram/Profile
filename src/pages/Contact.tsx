import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Linkedin, 
  Calendar, 
  Clock, 
  Shield, 
  CheckCircle2,
  Send
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const services = [
  "AI Chatbot",
  "Voice Agent",
  "Client Portal",
  "Full Suite",
  "Not Sure Yet",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll respond within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-body-sm uppercase tracking-wider mb-4">
              Contact
            </span>
            <h1 className="text-display-lg text-primary-foreground mb-6">
              Let's Talk About Your Goals
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to transform your brokerage? Schedule a free consultation 
              to discuss how AI automation can work for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <ContactForm 
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />

            {/* Info */}
            <ContactInfo />
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<ContactFormProps["formData"]>>;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

function ContactForm({ formData, setFormData, handleSubmit, isSubmitting }: ContactFormProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLFormElement>();

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className={cn(
        "bg-card rounded-2xl p-8 shadow-lg border border-border/50 opacity-0",
        isVisible && "animate-fade-up"
      )}
    >
      <h2 className="text-heading-xl text-foreground mb-2">Send a Message</h2>
      <p className="text-body text-muted-foreground mb-8">
        Fill out the form below and I'll get back to you within 24 hours.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-body-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-body-sm font-medium text-foreground mb-2">
              Work Email *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@company.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-body-sm font-medium text-foreground mb-2">
            Brokerage Name
          </label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Your brokerage"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-body-sm font-medium text-foreground mb-2">
            Service Interest
          </label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-body-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your goals and challenges..."
            rows={5}
            required
          />
        </div>

        <Button 
          type="submit" 
          variant="accent" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("opacity-0", isVisible && "animate-fade-up delay-200")}
    >
      <h2 className="text-heading-xl text-foreground mb-6">Other Ways to Connect</h2>

      <div className="space-y-6 mb-12">
        <a
          href="mailto:contact@example.com"
          className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-heading-sm text-foreground">Email</p>
            <p className="text-body text-muted-foreground">contact@example.com</p>
          </div>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Linkedin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-heading-sm text-foreground">LinkedIn</p>
            <p className="text-body text-muted-foreground">Connect with me</p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-heading-sm text-foreground">Book a Call</p>
            <p className="text-body text-muted-foreground">Schedule via Calendly</p>
          </div>
        </a>
      </div>

      {/* Trust indicators */}
      <div className="bg-muted/50 rounded-2xl p-6">
        <h3 className="text-heading-sm text-foreground mb-4">What to Expect</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-body text-muted-foreground">
            <Clock className="w-5 h-5 text-accent flex-shrink-0" />
            Response within 24 hours
          </li>
          <li className="flex items-center gap-3 text-body text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
            Free 30-minute discovery call
          </li>
          <li className="flex items-center gap-3 text-body text-muted-foreground">
            <Shield className="w-5 h-5 text-accent flex-shrink-0" />
            Your information is kept confidential
          </li>
        </ul>
      </div>
    </div>
  );
}