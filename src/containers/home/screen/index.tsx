import React from 'react';
import ContactMeForm from 'src/components/organisms/ContactMeForm';
import FirstContainer from 'src/components/organisms/FirstContainer';
import Header from 'src/components/organisms/Navbar';
import Plans from 'src/components/organisms/Plans';
import Page from 'src/components/organisms/Services';
import Testimonials from 'src/components/organisms/Testimonials';

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Header />
      <FirstContainer />
      <Page />
      <Plans />
      <Testimonials />
      <ContactMeForm />
    </div>
  );
};

export default HomeScreen;
