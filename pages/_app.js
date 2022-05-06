import "../styles/globals.css";

const App = ({ Component, pageProps, ...otherprops }) => {
  return <Component {...pageProps} {...otherprops} />;
};

export default App;
