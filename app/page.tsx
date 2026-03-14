import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Awards from "@/components/Awards";
import Program from "@/components/Program";
import FAQ from "@/components/FAQ";
import SubmissionForm from "@/components/SubmissionForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Awards />
      <Program />
      <FAQ />
      <SubmissionForm />
      <Contact />
      <Footer />
    </main>
  );
}
