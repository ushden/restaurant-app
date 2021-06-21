import { AlertActions, AlertState, AlertTypes } from './../../types';

export const showAlert = (type: AlertTypes, message: string) => {
	const payload: AlertState = {
		visible: true,
		type,
		message,
	};
	return {
		type: AlertActions.SHOW_ALERT,
		payload,
	};
};

export const hideAlert = () => {
	return {
		type: AlertActions.HIDE_ALERT,
		payload: false,
	};
};
