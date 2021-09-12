import React from 'react';
import { render } from '@testing-library/react';
import Error from '../index';

describe('Error test', () => {
  it('should render message-error element', () => {
    const { queryByTestId } = render(<Error message="Error occurred!" />);
    expect(queryByTestId('message-error')).toBeInTheDocument();
    expect(queryByTestId('message-error').textContent).toBe('Error occurred!');
  });
});
