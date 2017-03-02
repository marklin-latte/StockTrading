//require('../scss/main.scss');
import '../scss/main.scss';
import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { createStore } from 'redux';
import  tradeApp  from './reducers/index';
import { Provider } from 'react-redux';
import  App  from './components/app';

//const reducer = combineReducers();
const store = createStore(tradeApp);

const app = document.createElement('div');
document.body.appendChild(app);
render(
  <Provider store={store}>
    <App />
  </Provider>,
	app 
);

