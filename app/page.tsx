import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ValueProposition } from "@/components/landing/ValueProposition";
import { Testimonials } from "@/components/landing/Testimonials";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
