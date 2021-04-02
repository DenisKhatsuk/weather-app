import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

import './error-boundary.css';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
  };

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      error,
    });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) return <ErrorIndicator error = { error }/>;
    return children;
  }
}
