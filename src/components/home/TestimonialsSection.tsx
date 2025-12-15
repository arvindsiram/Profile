import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "InsureAI transformed how we handle client inquiries. Our response time dropped from hours to seconds, and client satisfaction scores are at an all-time high.",
    author: "Sarah Mitchell",
    title: "Director of Operations",
    company: "Pacific Coast Insurance",
  },
  {
    quote:
      "The ROI was evident within the first quarter. We've automated 60% of our routine inquiries, allowing our team to focus on complex cases and relationship building.",
    author: "James Rodriguez",
    title: "CEO",
    company: "Summit Brokerage Group",
  },
  {
    quote:
      "Implementation was seamless, and the team understood our compliance needs perfectly. It's rare to find technology partners who truly get the insurance industry.",
    author: "Emily Chen",
    title: "VP of Technology",
    company: "Harbor Insurance Partners",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-surface">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <span className="text-accent font-semibold text-body-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-display text-foreground">
            Trusted by Leading Brokerages
          </h2>
        </div>

        <div
          className={cn(
            "max-w-4xl mx-auto opacity-0",
            isVisible && "animate-fade-up delay-200"
          )}
        >
          <div className="relative bg-card rounded-2xl shadow-lg border border-border/50 p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-md">
              <Quote className="w-6 h-6 text-accent-foreground" />
            </div>

            {/* Testimonial content */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <blockquote className="text-heading-lg md:text-heading-xl text-foreground mb-8 transition-opacity duration-300">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-heading-sm text-foreground font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-body text-muted-foreground">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex ? "w-6 bg-accent" : "bg-border"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
