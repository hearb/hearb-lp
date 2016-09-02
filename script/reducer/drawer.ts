import {Action} from 'redux';
import assign = require('object-assign');

import * as type from '../action/type';
import {DrawerProps} from '../container/Drawer';

const initialState: DrawerProps = {
	opened: false,
	docked: false
};

export default function drawer(state: DrawerProps = initialState, action: Action): DrawerProps {
	switch(action.type) {
		case type.DRAWER_OPEN:
			return assign({}, state, {opened: true});

		case type.DRAWER_CLOSE:
			return assign({}, state, {opened: false});

		case type.DRAWER_TOGGLE:
			return assign({}, state, {opened: !state.opened});

		case type.DRAWER_DOCKON:
			return assign({}, state, {docked: true});

		case type.DRAWER_DOCKOFF:
			return assign({}, state, {docked: false});

		default:
			return state;
	}
}
