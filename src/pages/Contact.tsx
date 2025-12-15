import { Layout } from "@/components/layout/Layout";
import { 
  Mail, 
  Linkedin, 
  Calendar, 
  Clock, 
  Shield, 
  CheckCircle2 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export default function Contact() {
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
              Let’s Connect
            </h1>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Prefer direct conversations. Reach out via email or LinkedIn and we’ll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <ContactInfo />
        </div>
      </section>
    </Layout>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 space-y-10",
        isVisible && "animate-fade-up"
      )}
    >
      <h2 className="text-heading-xl text-foreground text-center">
        Get in Touch
      </h2>

      <div className="grid gap-6">
        {/* Email */}
        <a
          href="mailto:hello@insureai.com"
          className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
        >
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
            <Mail className="w-7 h-7 text-accent" />
          </div>
          <div>
            <p className="text-heading-sm text-foreground">Email</p>
            <p className="text-body text-muted-foreground">
              hello@insureai.com
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
        >
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
            <Linkedin className="w-7 h-7 text-accent" />
          </div>
          <div>
            <p className="text-heading-sm text-foreground">LinkedIn</p>
            <p className="text-body text-muted-foreground">
              Connect and message me directly
            </p>
          </div>
        </a>

        {/* Optional: Calendly */}
        <a
          href="#"
          className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
        >
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
            <Calendar className="w-7 h-7 text-accent" />
          </div>
          <div>
            <p className="text-heading-sm text-foreground">Book a Call</p>
            <p className="text-body text-muted-foreground">
              Schedule a 30-minute discovery call
            </p>
          </div>
        </a>
      </div>

      {/* Trust Indicators */}
      <div className="bg-muted/50 rounded-2xl p-6 max-w-xl mx-auto">
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-body text-muted-foreground">
            <Clock className="w-5 h-5 text-accent" />
            Response within 24 hours
          </li>
          <li className="flex items-center gap-3 text-body text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            Free discovery call
          </li>
          <li className="flex items-center gap-3 text-body text-muted-foreground">
            <Shield className="w-5 h-5 text-accent" />
            Conversations kept confidential
          </li>
        </ul>
      </div>
    </div>
  );
}
