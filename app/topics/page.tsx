'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles, Brain, Book } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Flashcard {
  front: string;
  back: string;
  topic: string;
}

const suggestedTopics = [
  "Ancient Egyptian Mythology",
  "Quantum Physics Basics",
  "World War II Major Battles",
  "Human Anatomy",
  "Famous Philosophers",
  "Space Exploration",
  "Environmental Science",
  "Modern Art Movements",
  "Computer Algorithms",
  "World Cuisines",
  "Classical Music Composers",
  "Psychology Theories",
];

const gradientColors = [
  ["from-blue-500", "to-purple-500"],
  ["from-pink-500", "to-orange-500"],
  ["from-green-500", "to-teal-500"],
  ["from-yellow-500", "to-red-500"],
  ["from-purple-500", "to-indigo-500"],
  ["from-teal-500", "to-blue-500"],
];

export default function TopicsPage() {
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});

  const handleTopicClick = (selectedTopic: string) => {
    setTopic(selectedTopic);
  };

  const toggleAnswer = (index: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const generateFlashcards = async () => {
    if (!topic.trim()) {
      toast.error("Please enter a topic");
      return;
    }

    setIsLoading(true);
    setFlashcards([]);
    setShowAnswers({});

    try {
      const response = await fetch("/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          count: 15,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate flashcards");
      }

      const data = await response.json();
      setFlashcards(data);
      toast.success(`Generated ${data.length} flashcards for "${topic}"`, {
        icon: <Sparkles className="h-4 w-4" />,
      });
    } catch (error) {
      console.error("Error generating flashcards:", error);
      toast.error("Failed to generate flashcards. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      generateFlashcards();
    }
  };

  return (
    <div className="container mx-auto py-12 pt-24">
      <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Choose Your Topic
            </h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Enter any topic or select from our suggestions to generate AI-powered flashcards
          </p>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter any topic (e.g., 'Ancient Egyptian Mythology')"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button 
                onClick={generateFlashcards} 
                disabled={isLoading}
                className="relative group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Generate
                  </>
                )}
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {suggestedTopics.map((suggestedTopic) => (
                <HoverCard key={suggestedTopic}>
                  <HoverCardTrigger>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80 transition-colors hover:scale-105 transform duration-200"
                      onClick={() => handleTopicClick(suggestedTopic)}
                    >
                      {suggestedTopic}
                    </Badge>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Click to select</h4>
                      <p className="text-sm text-muted-foreground">
                        Generate flashcards about {suggestedTopic.toLowerCase()}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Generating your flashcards...</p>
          </div>
        </div>
      )}

      {flashcards.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Book className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Flashcards for "{topic}"</h2>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowAnswers(prev => {
                const allShown = Object.values(prev).every(Boolean);
                return flashcards.reduce((acc, _, index) => ({
                  ...acc,
                  [index]: !allShown
                }), {});
              })}
              className="hover:shadow-md transition-all duration-300"
            >
              {Object.values(showAnswers).every(Boolean) ? 'Hide All Answers' : 'Show All Answers'}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashcards.map((flashcard, index) => {
              const gradientPair = gradientColors[index % gradientColors.length];
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-t-4 hover:-translate-y-1"
                  style={{
                    borderTopColor: `rgb(${index % 2 ? '168, 85, 247' : '236, 72, 153'})`,
                  }}
                  onClick={() => toggleAnswer(index)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex justify-between items-center">
                      <span className={cn(
                        "bg-clip-text text-transparent bg-gradient-to-r",
                        gradientPair[0],
                        gradientPair[1]
                      )}>
                        Question {index + 1}
                      </span>
                      <Badge variant="outline" className="group-hover:bg-secondary/50 transition-colors">
                        Click to {showAnswers[index] ? 'hide' : 'show'} answer
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/80 backdrop-blur-sm p-4 rounded-lg group-hover:bg-muted/90 transition-colors">
                      <p className="font-medium">Q: {flashcard.front}</p>
                    </div>
                    {showAnswers[index] && (
                      <div className="bg-muted/50 backdrop-blur-sm p-4 rounded-lg animate-in fade-in slide-in-from-bottom duration-300">
                        <p>A: {flashcard.back}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
