// import Challenge from "@/components/home/Challenge";
import Faqs from "@/components/home/Faqs";
// import Grid from "@/components/home/Grid";
import Hero from "@/components/home/Hero";
// import Pricing from "@/components/home/Pricing";
import MonitoringSection from "@/components/home/MonitoringSection";

import Navbar from "@/components/Navbar";

import MonitoringBioSection from "@/components/home/Features";
import Footer from "@/components/Footer";
import MonitoringTrands from "@/components/home/Trands";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MonitoringSection />
      <MonitoringBioSection />
      {/* <Challenge />
      <Pricing /> */}
      <Faqs />
      <MonitoringTrands />
      <Footer />
    </>
  );
}
