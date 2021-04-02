import React from 'react';

import './search-form.scss';

const SearchForm = ({ onFormSubmit, onInputChange, inputValue }) => {
  return (
    <form
      className = "search"
      autoComplete = "off"
      onSubmit = { onFormSubmit }
    >
      <input
        className = "search__input"
        type = "text"
        name = "search"
        id = "search"
        placeholder = "Search city or ZIP"
        value = { inputValue }
        onChange={ onInputChange }
      />
      <button
        className = "search__button"
        type="submit"
        id = "search__button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
