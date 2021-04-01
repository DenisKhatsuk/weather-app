import React, { useState } from 'react';
import { connect } from 'react-redux';
import GeocodingService from '../../services/geocoding-service';
import { fetchGeocodingData } from '../../actions';

import './search-form.scss';

const geocodingService = new GeocodingService();

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

const SearchFormWrapper = ({ fetchGeocodingDataAndDispatch }) => {
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetchGeocodingDataAndDispatch(inputValue);
    setInputValue('');
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return <SearchForm
    onFormSubmit = { onFormSubmit }
    onInputChange = { onInputChange }
    inputValue = { inputValue }/>;
};

const mapDispatchToProps = (dispatch) => ({
  fetchGeocodingDataAndDispatch: (city) => fetchGeocodingData(dispatch, geocodingService)(city),
});

export default connect(null, mapDispatchToProps)(SearchFormWrapper);
