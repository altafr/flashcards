import { Brain, Zap, Clock, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ValueProposition = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description:
        "Our intelligent system creates personalized flashcards tailored to your learning style and pace.",
      className: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: Zap,
      title: "Quick Understanding",
      description:
        "Break down complex topics into easily digestible flashcards for faster comprehension.",
      className: "border-yellow-200 dark:border-yellow-800",
    },
    {
      icon: Clock,
      title: "Efficient Review",
      description:
        "Smart review scheduling ensures you study at optimal intervals for maximum retention.",
      className: "border-green-200 dark:border-green-800",
    },
    {
      icon: Sparkles,
      title: "Interactive Learning",
      description:
        "Engage with dynamic flashcards that make learning more interactive and enjoyable.",
      className: "border-purple-200 dark:border-purple-800",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">FlashLearn</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience a revolutionary way to learn with our cutting-edge flashcard
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={cn(
                  "transition-all hover:scale-105",
                  feature.className
                )}
              >
                <CardHeader>
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};