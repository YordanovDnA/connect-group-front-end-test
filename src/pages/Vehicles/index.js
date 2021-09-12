import React from 'react';
import useDisplay from '../../utils/useDisplay/index';
import BigScreenLayout from '../../layouts/BigScreensLayout';
import SmallScreenLayout from '../../layouts/SmallScreensLayout';
import VehicleList from '../../components/VehicleList';

const Vehicles = () => {
  const display = useDisplay();
  if (display === 'l') {
    return (
      <BigScreenLayout>
        <VehicleList />
      </BigScreenLayout>
    );
  }
  return (
    <SmallScreenLayout>
      <VehicleList />
    </SmallScreenLayout>
  );
};

export default Vehicles;
