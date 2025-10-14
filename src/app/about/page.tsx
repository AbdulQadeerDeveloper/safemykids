import Footer from "@/components/Footer";
import JourneySection from "@/components/home/JourneySection ";
import Stats from "@/components/home/Stats";
import Vision from "@/components/home/Vision";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <Stats />
      <JourneySection />
      <Vision />
      <Footer />
    </>
  );
}
