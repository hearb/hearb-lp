//==============================================================================
// Drawer module
//==============================================================================

import assign = require('object-assign');


//==============================================================================
// types

export const DRAWER_OPEN    = 'DRAWER_OPEN';
export const DRAWER_CLOSE   = 'DRAWER_CLOSE';
export const DRAWER_DOCKON  = 'DRAWER_DOCKON';
export const DRAWER_DOCKOFF = 'DRAWER_DOCKOFF';


//==============================================================================
// actions

interface Action {
	type: string;
}

export const openDrawer = (): Action => {
	return {
		type: DRAWER_OPEN
	};
}

export const closeDrawer = (): Action => {
	return {
		type: DRAWER_CLOSE
	};
}

export const dockOnDrawer = (): Action => {
	return {
		type: DRAWER_DOCKON
	};
}

export const dockOffDrawer = (): Action => {
	return {
		type: DRAWER_DOCKOFF
	};
}


//==============================================================================
// reducer

interface State {
	opened: boolean;
	docked: boolean;
}

const initial: State = {
	opened: false,
	docked: false
};

export const drawerReducer = (state: State = initial, action: Action): State => {
	switch(action.type) {
		case DRAWER_OPEN:
			return assign({}, state, {
				opened: true
			});

		case DRAWER_CLOSE:
			return assign({}, state, {
				opened: false
			});

		case DRAWER_DOCKON:
			return assign({}, state, {
				docked: true
			});

		case DRAWER_DOCKOFF:
			return assign({}, state, {
				docked: false
			});

		default:
			return state;
	}
}
