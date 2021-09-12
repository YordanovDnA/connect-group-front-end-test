import React from 'react';
import { render } from '@testing-library/react';
import Header from '../index';

describe('Header test', () => {
  it('should render Header and Navigation components', () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId('header-wrapper')).toBeInTheDocument();
    expect(queryByTestId('nav-desktop'));
  });
});
