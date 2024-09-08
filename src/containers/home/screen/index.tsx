import React from 'react';
import FAQ from 'src/components/organisms/FAQ';
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
      <FAQ/>
    </div>
  );
};

export default HomeScreen;
