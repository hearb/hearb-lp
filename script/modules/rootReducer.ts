import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import {drawerReducer as drawer} from './drawer';
import {toastReducer as toast} from './toast';

export default combineReducers({
	routing,
	drawer,
	toast
});
