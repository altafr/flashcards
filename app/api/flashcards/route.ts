import { NextResponse } from "next/server";
import { generateFlashcards } from "@/lib/groq";

export async function POST(req: Request) {
  try {
    const { topic, count } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    const flashcards = await generateFlashcards(topic, count || 5);
    return NextResponse.json(flashcards);
  } catch (error) {
    console.error("Error in flashcards API:", error);
    return NextResponse.json(
      { error: "Failed to generate flashcards" },
      { status: 500 }
    );
  }
}
