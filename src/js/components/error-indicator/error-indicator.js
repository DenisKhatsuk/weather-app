import React from 'react';

import './error-indicator.css';

const initialErrorMessage = 'Something went wrong! Please reload the page.';

const ErrorIndicator = ({ error = initialErrorMessage }) => {
  return (
    <div className = "error-indicator">
      <span>{ error }</span>
    </div>
  );
};

export default ErrorIndicator;
