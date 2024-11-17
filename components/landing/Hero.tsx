import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-3 h-3 mr-1" /> New AI-Powered Learning
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Master Any Topic with Interactive{" "}
              <span className="text-primary">Flashcards</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your learning experience with our AI-powered flashcard system.
              Create, study, and master any subject with engaging, interactive cards
              that adapt to your learning style.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/topics">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">
                  <Brain className="mr-2 h-4 w-4" />
                  How It Works
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
                  <p className="text-sm text-muted-foreground">Active Learners</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-sm text-muted-foreground">Topics Available</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};