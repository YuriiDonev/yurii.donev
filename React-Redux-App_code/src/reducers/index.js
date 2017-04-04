import { combineReducers } from 'redux';
import columns from './columns';
import names from './reducer-async';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    columns,
	names,
	routing: routerReducer
})
