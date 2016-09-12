//==============================================================================
// Toast module
//==============================================================================

import shortid = require('shortid');

//==============================================================================
// types

export const TOAST_ADD     = 'TOAST_ADD';
export const TOAST_HIDE    = 'TOAST_HIDE';
export const TOAST_DISABLE = 'TOAST_DISABLE';


//==============================================================================
// actions

interface Action {
	type:   string;
	toast?: {
		key:       string;
		message:   string;
		type:      string;
		animating: boolean;
		disabled:  boolean;
		created:   number;
	};
	key?:   string;
}

export const generateToast = (message: string, type: string): Redux.ActionCreator<any> => {
	return (dispatch: Redux.Dispatch<any>) => {
		const key = shortid.generate();

		setTimeout(() => {
			dispatch(hideToast(key));
		}, 5000);

		dispatch(addToast(key, message, type));
	}
}

const addToast = (key: string, message: string, type: string): Action => {
	return {
		type:  TOAST_ADD,
		toast: {
			key:       key,
			message:   message,
			type:      type,
			animating: false,
			disabled:  false,
			created:   Date.now()
		}
	};
}

const hideToast = (key: string): Action => {
	return {
		type: TOAST_HIDE,
		key:  key
	}
}

export const disableToast = (key: string): Action => {
	return {
		type: TOAST_DISABLE,
		key:  key
	};
}


//==============================================================================
// reducer

export interface Toast {
	key:       string;
	message:   string;
	type:      string;
	animating: boolean;
	disabled:  boolean;
	created:   number;
}

const initial: Array<Toast> = [];

export const toastReducer = (state: Array<Toast> = initial, action: Action): Array<Toast> => {
	// stateの実体をコピーして、2分以上経過したtoastを削除する
	let toasts = state.concat().filter((toast): boolean => {
		return toast.created + 2 * 60 * 1000 > Date.now();
	});

	switch(action.type) {
		case TOAST_ADD:
			toasts.push(action.toast);
			return toasts;

		case TOAST_HIDE:
			toasts.forEach((toast, index) => {
				if(toast.key === action.key) {
					toasts[index].animating = true;
				}
			});
			return toasts;

		case TOAST_DISABLE:
		toasts.forEach((toast, index) => {
			if(toast.key === action.key) {
				toasts[index].disabled = true;
			}
		});
		return toasts;

		default:
			return state;
	}
}
