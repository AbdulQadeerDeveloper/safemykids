import AboutBanner from "@/pages/about/bannerAbout";
import NewsSlider from "@/pages/about/NewsSlider";
import StatsSection from "@/pages/about/StatsSection";
import WorkProcess from "@/pages/about/WorkProcessAbout";

const AboutPage = () => {
  return (
    <div id="about">
      <AboutBanner />
      <WorkProcess />
      <StatsSection />
      <NewsSlider />
    </div>
  );
};

export default AboutPage;
