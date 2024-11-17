import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Medical Student",
      image: "/avatars/sarah.jpg",
      content:
        "FlashLearn transformed how I study medicine. The AI-generated flashcards are incredibly effective for memorizing complex medical terms.",
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      image: "/avatars/david.jpg",
      content:
        "I used FlashLearn to prepare for technical interviews. The interactive nature of the cards helped me retain information much better.",
    },
    {
      name: "Emma Williams",
      role: "Language Learner",
      image: "/avatars/emma.jpg",
      content:
        "Learning a new language became so much easier with FlashLearn. The spaced repetition system really works!",
    },
    {
      name: "Michael Brown",
      role: "History Teacher",
      image: "/avatars/michael.jpg",
      content:
        "As a teacher, I recommend FlashLearn to all my students. It's an excellent tool for reviewing historical dates and events.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Loved by Learners Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their
            learning journey with FlashLearn.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};