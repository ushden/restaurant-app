import { UserState, UserActions } from './../../types';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import $api from '../../http';
import { RootState } from './../rootReducer';
import { showAlert } from '../alert/alertActions';
import { AlertTypes } from '../../types';

const loginAdminActionCreator = (user: UserState) => ({
	type: UserActions.ADMIN_LOGIN,
	payload: user,
});

export const loginAdmin = (
	name: string,
	password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch) => {
		try {
			const res = await $api.post<UserState>('/api/user/adminLogin', {
				name,
				password,
			});

			const user: UserState = res.data;
			localStorage.setItem('token', user.token);

			dispatch(loginAdminActionCreator(user));
			dispatch(
				showAlert(AlertTypes.success, `Добро пожаловать ${user.user.name}!`)
			);
		} catch (error) {
			const err = error?.response?.data?.message;
			dispatch(showAlert(AlertTypes.error, err));
		}
	};
};
