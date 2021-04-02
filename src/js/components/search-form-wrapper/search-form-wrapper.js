import React, { useState } from 'react';
import { connect } from 'react-redux';
import GeocodingService from '../../services/geocoding-service';
import { fetchGeocodingData } from '../../actions';
import SearchForm from '../search-form';

import './search-form-wrapper.scss';

const geocodingService = new GeocodingService();

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
