import * as type from '../action/type';

export default function list(state, action) {
	switch(action.type) {
	case type.LIST_SELECT:
		return state;

	default:
		return state;
	}
}
