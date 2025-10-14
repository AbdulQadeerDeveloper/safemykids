import ServicesHeroSection from './ServicesHeroSection';
import Services from './Services';
import ContactSection from './ContactSection';
import ScheduleConsultationSection from './ScheduleConsultationSection';
import WhyChooseUsSection from './WhyChooseUsSection';

const ServicesPage = () => {
  return (
    <div>
      <ServicesHeroSection />
      <Services />
      <ScheduleConsultationSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  );
};

export default ServicesPage;