import React from 'react';

import './error-indicator.css';

const initialErrorMessage = 'Something went wrong! Please reload the page.';

const ErrorIndicator = ({ error }) => {
  const errorMessage = error ? `${error.name}: ${error.message}` : initialErrorMessage;
  return (
    <div className = "error-indicator">
      <span>{ errorMessage }</span>
    </div>
  );
};

export default ErrorIndicator;
