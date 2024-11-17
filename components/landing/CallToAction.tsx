import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Clock, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CallToAction = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Free",
      description: "Start Learning",
    },
    {
      icon: Clock,
      title: "5 Minutes",
      description: "Quick Setup",
    },
    {
      icon: Zap,
      title: "24/7",
      description: "Support",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

      <div className="relative container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <Badge variant="secondary" className="w-fit mx-auto mb-4">
              Limited Time Offer
            </Badge>
            <CardTitle className="text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </CardTitle>
            <CardDescription className="text-xl">
              Join thousands of learners who are already mastering new topics with
              our interactive flashcard system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <Button size="lg" className="group mb-8" asChild>
                <Link href="/topics">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-4 rounded-lg bg-primary/5"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="text-2xl font-bold mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};