import React from 'react';
import './Style/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from '../HamburgerMenu';
import useDisplay from '../../../utils/useDisplay/index';

const Navigation = () => {
  const display = useDisplay();
  return (
    <div data-testid="nav-desktop" className="nav-desktop">
      {display === 's' && <HamburgerMenu /> }
      {display === 'm' && <HamburgerMenu /> }
      <div className="logo-wrapper">
        <img className="logo-jaguar" src="https://dxnav.jaguar.com/current/images/logo-jaguar-b5b95da0dbe970581680b12f0936b540.png" alt="Jaguar logo" />
      </div>
      <nav>
        {display === 'l' && (
        <ul className="nav-elements-left">
          <li>
            <button data-testid="btn-behicles" type="button">VEHICLES</button>
          </li>
          <li>
            <button data-testid="btn-purchase" type="button">PURCHASE</button>
          </li>
          <li>
            <button data-testid="btn-owners" type="button">OWNERS</button>
          </li>
          <li>
            <button data-testid="btn-explore" type="button">EXPLORE</button>
          </li>
        </ul>
        )}
        <ul className="nav-elements-right">
          <li><FontAwesomeIcon data-testingid="btn-search" icon={faSearch} /></li>
          <li><FontAwesomeIcon data-testingid="btn-location" icon={faMapMarkerAlt} /></li>
          <li><FontAwesomeIcon data-testingid="btn-user-profile" icon={faUser} /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
