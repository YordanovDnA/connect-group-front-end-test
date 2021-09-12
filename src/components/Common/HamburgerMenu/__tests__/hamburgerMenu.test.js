import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HamburgerMenu from '../index';

describe('Hamburger test', () => {
  it('should not render the hamburger-menu-wrapper at first', () => {
    const { queryByTestId } = render(<HamburgerMenu />);
    expect(queryByTestId('hamburger-menu-wrapper')).not.toBeInTheDocument();
  });

  it('should be able to click on button to open and close the menu', async () => {
    const { queryByTestId } = render(<HamburgerMenu />);
    fireEvent.click(await screen.findByTestId('btn-hamburger-menu'));
    expect(queryByTestId('hamburger-menu-wrapper')).toBeInTheDocument();
    fireEvent.click(await screen.findByTestId('btn-hamburger-menu'));
    expect(queryByTestId('hamburger-menu-wrapper')).not.toBeInTheDocument();
  });
});
