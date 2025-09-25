import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Credibility from "@/components/Credibility";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Credibility />
      <CtaPanel />
      <Footer />
    </main>
  );
}