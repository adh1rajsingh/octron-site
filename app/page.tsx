import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Team from "@/components/Team";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <CtaPanel />
      <Team />
      <VideoSection />
      <Footer />
    </main>
  );
}