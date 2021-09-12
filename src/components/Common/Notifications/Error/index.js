import React from 'react';
import './style.scss';

const Error = ({ message }) => {
  return (
    <div data-testid="message-error" className="message-error">{message}</div>
  );
};

export default Error;
