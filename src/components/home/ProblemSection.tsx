import { Clock, Users, TrendingDown, AlertCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: Clock,
    title: "Time-Consuming Manual Tasks",
    description:
      "Your team spends hours on repetitive inquiries, policy lookups, and data entry that could be automated.",
  },
  {
    icon: Users,
    title: "Limited Client Availability",
    description:
      "Clients expect 24/7 support, but staffing around the clock is expensive and impractical for most brokerages.",
  },
  {
    icon: TrendingDown,
    title: "Rising Operational Costs",
    description:
      "Growing competition and client expectations put pressure on margins while hiring costs continue to climb.",
  },
  {
    icon: AlertCircle,
    title: "Compliance Complexity",
    description:
      "Navigating regulatory requirements manually increases risk and slows down your response times.",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

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
            The Challenge
          </span>
          <h2 className="text-display text-foreground mb-6">
            Insurance Brokerages Face Growing Pressures
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Modern clients demand instant responses and seamless experiences. 
            Traditional operations struggle to keep up while maintaining quality and controlling costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              problem={problem}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProblemCardProps {
  problem: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
}

function ProblemCard({ problem, index }: ProblemCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = problem.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "bg-card rounded-2xl p-8 shadow-md border border-border/50 hover:shadow-lg hover:border-accent/30 transition-all duration-300 opacity-0",
        isVisible && "animate-fade-up",
        index === 1 && "delay-100",
        index === 2 && "delay-200",
        index === 3 && "delay-300"
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-destructive" />
      </div>
      <h3 className="text-heading text-foreground mb-3">{problem.title}</h3>
      <p className="text-body text-muted-foreground">{problem.description}</p>
    </div>
  );
}
