import '../styles/index.css';
import React from 'react';
import PropTypes, { array } from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.prototype = {
  Component: PropTypes.element.isRequired,
  pageProps: array.isRequired,
};

export default MyApp;
