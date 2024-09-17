import React, { useRef } from 'react';
import ContactMeForm from 'src/components/organisms/ContactMeForm';
import CardSection from 'src/components/molecules/CardSection';
import FAQ from 'src/components/organisms/FAQ';
import FirstContainer from 'src/components/organisms/FirstContainer';
import Footer from 'src/components/organisms/Footer';
import Header from 'src/components/organisms/Navbar';
import Plans from 'src/components/organisms/Plans';
import Page from 'src/components/organisms/Services';
// import Testimonials from 'src/components/organisms/Testimonials';

const HomeScreen: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleScrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <Header
        scrollHome={handleScrollToHome}
        scrollAbout={handleScrollToAbout}
        scrollService={handleScrollToService}
        scrollPricing={handleScrollToPricing}
        scrollContact={handleScrollToContact}
      />
      <FirstContainer passedRef={homeRef} />
      <CardSection passedRef={aboutRef} />
      <Page passedRef={serviceRef} />
      <Plans passedRef={pricingRef} contactRef={contactRef} />
      {/* <Testimonials /> */}
      <ContactMeForm passedRef={contactRef} />
      <FAQ />
      <Footer
        scrollHome={handleScrollToHome}
        scrollAbout={handleScrollToAbout}
        scrollService={handleScrollToService}
        scrollPricing={handleScrollToPricing}
        scrollContact={handleScrollToContact}
      />
    </div>
  );
};

export default HomeScreen;
