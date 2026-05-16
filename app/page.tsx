import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Динамический импорт компонентов, зависящих от IntersectionObserver и window
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Advantages = dynamic(() => import("@/components/Advantages"), { ssr: false });
const Cases = dynamic(() => import("@/components/Cases"), { ssr: false });
const Workflow = dynamic(() => import("@/components/Workflow"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Cases />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  );
}
