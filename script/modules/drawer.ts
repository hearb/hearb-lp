//==============================================================================
// Drawer module
//==============================================================================

import assign = require('object-assign');
import shortid = require('shortid');


//==============================================================================
// types

export const DRAWER_OPEN    = 'DRAWER_OPEN';
export const DRAWER_CLOSE   = 'DRAWER_CLOSE';
export const DRAWER_DOCKON  = 'DRAWER_DOCKON';
export const DRAWER_DOCKOFF = 'DRAWER_DOCKOFF';
export const DRAWER_SELECT  = 'DRAWER_SELECT';


//==============================================================================
// actions

interface Action {
	type: string;
	id?:  string;
}

export const openDrawer = (): Action => {
	return {
		type: DRAWER_OPEN
	}
}

export const closeDrawer = (): Action => {
	return {
		type: DRAWER_CLOSE
	}
}

export const dockOnDrawer = (): Action => {
	return {
		type: DRAWER_DOCKON
	}
}

export const dockOffDrawer = (): Action => {
	return {
		type: DRAWER_DOCKOFF
	}
}

export const selectItem = (id: string): Action => {
	return {
		type: DRAWER_SELECT,
		id: id
	}
}


//==============================================================================
// reducer

export interface Item {
	id:   string;
	icon: string;
	text: string;
	href: string;
}

interface State {
	opened:   boolean;
	docked:   boolean;
	items:    Array<Item>;
	selected: string;
}

const menu = [
	{
		icon: 'home',
		text: 'ホーム',
		href: '/'
	}
]

const items = menu.map((item): Item => {
	return assign({}, item, {
		id: shortid.generate()
	})
})

const initial: State = {
	opened: false,
	docked: false,
	items: items,
	selected: items[0].id
}

export const drawerReducer = (state: State = initial, action: Action): State => {
	switch(action.type) {
		case DRAWER_OPEN:
			return assign({}, state, {
				opened: true
			})

		case DRAWER_CLOSE:
			return assign({}, state, {
				opened: false
			})

		case DRAWER_DOCKON:
			return assign({}, state, {
				docked: true
			})

		case DRAWER_DOCKOFF:
			return assign({}, state, {
				docked: false
			})

		case DRAWER_SELECT:
			return assign({}, state, {
				selected: action.id
			})

		default:
			return state;
	}
}
