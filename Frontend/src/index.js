import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { Provider } from 'react-redux'
// import { store } from './redux/Store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    // {/* </Provider> */}
);
reportWebVitals();
