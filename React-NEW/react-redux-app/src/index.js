	import 'babel-polyfill';
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Provider } from 'react-redux';
	import { createStore } from 'redux';
	import App from './App';
	import reducer from './reducers';



	const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__());

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));



/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/