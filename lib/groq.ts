import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export interface GeneratedFlashcard {
  front: string;
  back: string;
  topic: string;
}

export async function generateFlashcards(topic: string, count: number = 5): Promise<GeneratedFlashcard[]> {
  const prompt = `Generate ${count} flashcards for the topic "${topic}". 
  Each flashcard should have a clear question on the front and a concise answer on the back.
  Format the response as a JSON array of objects with "front", "back", and "topic" properties.
  Make the content educational and engaging.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an educational expert specializing in creating effective flashcards for learning.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 2000,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error("No response from GROQ API");
    }

    const flashcards: GeneratedFlashcard[] = JSON.parse(response);
    return flashcards;
  } catch (error) {
    console.error("Error generating flashcards:", error);
    throw error;
  }
}
