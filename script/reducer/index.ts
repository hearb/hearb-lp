import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import drawer from './drawer';
import list from './list';

const reducer = combineReducers({
	routing,
	drawer,
	// list
});

export default reducer;
