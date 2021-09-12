import React from 'react';
import { render } from '@testing-library/react';
import UseDisplayExample from '../useDisplay/useDisplayExample';

describe('useDisplay test', () => {
  it('should render small-screen-test for small screens', () => {
    window.innerWidth = 362;
    const { queryByTestId } = render(<UseDisplayExample />);
    expect(queryByTestId('small-screen-test')).toBeInTheDocument();
  });

  it('should render medium-screen-test for small screens', () => {
    window.innerWidth = 768;
    const { queryByTestId } = render(<UseDisplayExample />);
    expect(queryByTestId('medium-screen-test')).toBeInTheDocument();
  });

  it('should render large-screen-test for small screens', () => {
    window.innerWidth = 1980;
    const { queryByTestId } = render(<UseDisplayExample />);
    expect(queryByTestId('large-screen-test')).toBeInTheDocument();
  });
});
