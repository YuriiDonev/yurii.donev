import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/app';
import About from './components/about';
import Users from './components/users';
import reducer from './reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}/>
			<Route path="/about" component={About}/>
			<Route path="/users/:id" component={Users}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);
