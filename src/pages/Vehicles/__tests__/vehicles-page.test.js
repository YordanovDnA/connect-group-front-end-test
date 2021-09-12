import React from 'react';
import { render } from '@testing-library/react';
import Vehicles from '../index';
import useData from '../../../components/VehicleList/useData';
import mockup from '../../../mockups/index.json';

jest.mock('../../../components/VehicleList/useData');

describe('Vehicles page test', () => {
  it('should render Header, VehicleList and Footer components at large screens', () => {
    window.innerWidth = 1980;
    useData.mockReturnValue([false, false, mockup.vehicles]);
    const { queryByTestId } = render(<Vehicles />);
    expect(queryByTestId('header-wrapper')).toBeInTheDocument();
    expect(queryByTestId('results')).toBeInTheDocument();
    expect(queryByTestId('footer')).toBeInTheDocument();
  });

  it('should not render Footer component at medium screen devices', () => {
    window.innerWidth = 768;
    useData.mockReturnValue([false, false, mockup.vehicles]);
    const { queryByTestId } = render(<Vehicles />);
    expect(queryByTestId('header-wrapper')).toBeInTheDocument();
    expect(queryByTestId('results')).toBeInTheDocument();
    expect(queryByTestId('footer')).not.toBeInTheDocument();
  });

  it('should not render Footer component at small screen devices', () => {
    window.innerWidth = 300;
    useData.mockReturnValue([false, false, mockup.vehicles]);
    const { queryByTestId } = render(<Vehicles />);
    expect(queryByTestId('header-wrapper')).toBeInTheDocument();
    expect(queryByTestId('results')).toBeInTheDocument();
    expect(queryByTestId('footer')).not.toBeInTheDocument();
  });
});
