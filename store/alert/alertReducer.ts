import {
	AlertActions,
	AlertActionTypes,
	AlertState,
	AlertTypes,
} from '../../types';

const defaultState: AlertState = {
	visible: false,
	type: AlertTypes.error,
	message: 'Сообщение',
};

export const alertReducer = (
	state = defaultState,
	action: AlertActionTypes
) => {
	switch (action.type) {
		case AlertActions.SHOW_ALERT:
			return { ...state, ...action.payload };
		case AlertActions.HIDE_ALERT:
			return { ...state, visible: action.payload, message: '' };
		default:
			return { ...state };
	}
};
