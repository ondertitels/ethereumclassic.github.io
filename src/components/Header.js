import React from 'react';
import logo from '../assets/images/etc-black.svg';
import LocalizedLink from './localizedLink';

const Header = ({ extra }) => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="Ethereum Classic Logo" />
        <h1>
          <LocalizedLink to="/">Ethereum Classic</LocalizedLink>
          {extra && (
            <>
              {' '}
              <small>{extra}</small>
            </>
          )}
        </h1>
      </header>
    </div>
  );
};

export default Header;
