import { scan } from 'react-scan';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// REDUX
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import reducer from './reducers/infoBar.reducer.js';
import { configureStore } from '@reduxjs/toolkit';

scan({
  enabled: true,
});

// const store = createStore(reducer);
const store = configureStore({
  reducer: reducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
