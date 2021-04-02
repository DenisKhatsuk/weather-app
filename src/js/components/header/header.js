import React from 'react';
import SearchFormWrapper from '../search-form-wrapper';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Weather App</h1>
      <SearchFormWrapper />
    </header>
  );
};

export default Header;
