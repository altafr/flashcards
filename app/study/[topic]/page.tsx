'use client';

import { useState, useEffect } from "react";
import { FlashCard } from "@/components/flashcard/FlashCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface Flashcard {
  front: string;
  back: string;
  topic: string;
}

export default function StudyPage({ params }: { params: { topic: string } }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFlashcards() {
      try {
        const response = await fetch("/api/flashcards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic: params.topic,
            count: 10,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to load flashcards");
        }

        const data = await response.json();
        setFlashcards(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading flashcards:", error);
        toast.error("Failed to load flashcards. Please try again.");
        // Set some sample flashcards for testing
        setFlashcards([
          {
            front: "What is a variable?",
            back: "A container for storing data values",
            topic: params.topic,
          },
          {
            front: "What is a function?",
            back: "A reusable block of code that performs a specific task",
            topic: params.topic,
          },
          {
            front: "What is an array?",
            back: "A data structure that stores multiple values in a single variable",
            topic: params.topic,
          },
        ]);
        setLoading(false);
      }
    }

    loadFlashcards();
  }, [params.topic]);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(((currentIndex + 2) / flashcards.length) * 100);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress(((currentIndex) / flashcards.length) * 100);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-12 pt-24 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Generating AI-powered flashcards...</p>
        </div>
      </div>
    );
  }

  if (!flashcards.length) {
    return (
      <div className="container mx-auto py-12 pt-24">
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">No flashcards available for this topic.</p>
          <Button className="mt-4" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 capitalize">
            {params.topic.replace("-", " ")}
          </h1>
          <Progress value={progress} className="h-2" />
          <div className="mt-2 text-sm text-muted-foreground">
            Card {currentIndex + 1} of {flashcards.length}
          </div>
        </div>

        <div className="mb-8">
          <FlashCard {...flashcards[currentIndex]} />
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Card className="mt-8 p-4 bg-muted">
          <p className="text-sm text-muted-foreground text-center">
            Tip: Click on the card to flip it and reveal the answer
          </p>
        </Card>
      </div>
    </div>
  );
}
