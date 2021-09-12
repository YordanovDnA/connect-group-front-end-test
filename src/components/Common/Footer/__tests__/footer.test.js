import React from 'react';
import { render } from '@testing-library/react';
import Footer from '..';

describe('Footer test', () => {
  it('should render footer', () => {
    const { queryByTestId } = render(<Footer />);
    expect(queryByTestId('footer')).toBeInTheDocument();
  });
});
