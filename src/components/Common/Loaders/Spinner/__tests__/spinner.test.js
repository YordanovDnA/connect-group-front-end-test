import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '..';

describe('Spinner test', () => {
  it('should render spinner', () => {
    const { queryByTestId } = render(<Spinner />);
    expect(queryByTestId('spinner')).toBeInTheDocument();
  });
});
