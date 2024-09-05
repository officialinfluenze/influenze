import React from 'react';
import FirstContainer from 'src/components/organisms/FirstContainer';
import Header from 'src/components/organisms/Navbar';

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Header />
      <FirstContainer />
    </div>
  );
};

export default HomeScreen;
