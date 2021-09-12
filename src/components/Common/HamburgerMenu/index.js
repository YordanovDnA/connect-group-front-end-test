import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button data-testid="btn-hamburger-menu" id="btn-hamburger-menu" type="button" onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {open && (
        <div data-testid="hamburger-menu-wrapper" className="hamburger-menu-wrapper">
          <ul>
            <li>
              <span>VEHICLES</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <li>
              <span>PURCHASE</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <li>
              <span>OWNERS</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <li>
              <span>EXPLORE</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
