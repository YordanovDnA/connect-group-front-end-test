import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <div data-testid="footer" className="footer">
      <span>
        2021 | This technical test is done by
        <a rel="noreferrer" href="https://main.d3230som2y43rg.amplifyapp.com" target="_blank"> Iliyan Yordanov</a>
        .
      </span>
    </div>
  );
};

export default Footer;
