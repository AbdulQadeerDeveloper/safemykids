import PrimaryNav from '../sections/PrimaryNav';
import SecondaryNav from '../sections/SecondaryNav'
import Footer from '../sections/Footer'
import NewsletterSignup from '../sections/NewsletterSignup';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
  
      {/* Navbar */}
      <div className="relative z-20">
        <SecondaryNav />
        <PrimaryNav />
      </div>

      {/* Main content */}
      <main className="relative z-10">{children}</main>

      <NewsletterSignup />
      <Footer />
      </div>

  );
};

export default Layout;