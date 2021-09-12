import React from 'react';
import useDisplay from './index';

const UseDisplayExample = () => {
  const display = useDisplay();
  if (display === 's') {
    return (
      <div data-testid="small-screen-test" />
    );
  }
  if (display === 'm') {
    return (
      <div data-testid="medium-screen-test" />
    );
  }
  return (
    <div data-testid="large-screen-test" />
  );
};

export default UseDisplayExample;
