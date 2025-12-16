import Hero from "@/app/components/Hero";
import Mission from "@/app/components/Mission";
import Problem from "@/app/components/Problem";
import Impact from "@/app/components/Impact";
import EscalandoPeldanos from "@/app/components/EscalandoPeldanos";
import HowToHelp from "@/app/components/HowToHelp";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Mission />
      <Impact />
      <EscalandoPeldanos />
      <HowToHelp />
      <Footer />
    </main>
  );
}
