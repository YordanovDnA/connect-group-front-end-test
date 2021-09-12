import React from 'react';
import Header from '../../components/Common/Header';

const SmallScreenLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SmallScreenLayout;
