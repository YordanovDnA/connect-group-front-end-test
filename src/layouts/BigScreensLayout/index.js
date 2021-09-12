import React from 'react';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';

const BigScreenLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BigScreenLayout;
