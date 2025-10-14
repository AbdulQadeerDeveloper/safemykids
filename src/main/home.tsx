import Head from "next/head";
import Layout from "../components/layout/Layout";
import HeroSections from "../components/sections/HeroSections";
import AboutWakeel from "../components/sections/AboutWakeel";
import Services from "../components/sections/Services";
import HelpSection from "../components/sections/HelpSection";
import Feature from "../components/sections/Feature";
import NewsletterSignup from "../components/sections/NewsletterSignup";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";
const HomeContainer = () => {
  return (
    <>
      <Head>
        <title>Wakeel - Best Way to Manage Your Employees Easily</title>
        <meta
          name="description"
          content="Save everyone time by harnessing your team's collective knowledge into easy-to-find information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HeroSections />
        <AboutWakeel />
        <Services />
        <HelpSection />
        <Feature />
        <ExperienceSection />
        <ContactSection />
        <NewsletterSignup />
        <Footer />
      </Layout>
    </>
  );
};

export default HomeContainer;
