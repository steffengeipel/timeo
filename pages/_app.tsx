import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.prototype = {};

export default MyApp;
