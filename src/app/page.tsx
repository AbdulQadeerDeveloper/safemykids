import Footer from "../components/Footer";
import FaqsPage from "../components/home/Faqs";
import MonitoringBioSection from "../components/home/Features";
import Hero from "../components/home/Hero";
import MonitoringSection from "../components/home/MonitoringSection";
import MonitoringTrands from "../components/home/Trands";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MonitoringSection />
      <MonitoringBioSection />
      <FaqsPage />
      <MonitoringTrands />
      <Footer />
    </>
  );
}
