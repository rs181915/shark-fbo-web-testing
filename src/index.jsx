import React from 'react';
import App from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ComingSoonProduction } from 'pages/ComingSoon/ComingSoon';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'store/reducers/index.reducer';

const container = document.getElementById('root');
const root = createRoot(container);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunk)));

const CheckComingSoon = () => {
  console.log('process.env.REACT_APP_IS_PRODUCTION', process.env.REACT_APP_IS_PRODUCTION, process.env.REACT_APP_IS_PRODUCTION === 'TRUE');
  if (process.env.REACT_APP_IS_PRODUCTION === 'TRUE') { return (<ComingSoonProduction />); }
  return <Provider store={store}><App /></Provider>;
};

root.render(<BrowserRouter><CheckComingSoon /></BrowserRouter>);
