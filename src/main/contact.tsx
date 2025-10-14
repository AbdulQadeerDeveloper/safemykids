import Head from "next/head";
import Layout from "../components/layout/Layout";
import NewsletterSignup from "../components/sections/NewsletterSignup";
import Footer from "../components/sections/Footer";
import ContactPage from "../pages/contact/ContactSectionAbout";
import ContactBanner from "../pages/contact/contactBanner";

const ContactContainer = () => {
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
        <ContactBanner />
        <ContactPage />
        <NewsletterSignup />
        <Footer />
      </Layout>
    </>
  );
};

export default ContactContainer;
