import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles.scss';
import Vehicles from './pages/Vehicles/index';

ReactDOM.render(
  <React.StrictMode>
    <Vehicles />
  </React.StrictMode>,
  document.querySelector('.root')
);
