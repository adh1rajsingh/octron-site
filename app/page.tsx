import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Team from "@/components/Team";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <Team />
      <CtaPanel />
      <Footer />
    </main>
  );
}