import { UserState, UserActions } from './../../types';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

import $api from '../../http';
import { RootState } from './../rootReducer';
import { showAlert } from '../alert/alertActions';
import { AlertTypes } from '../../types';

const setUserActionCreator = (user: UserState) => ({
	type: UserActions.ADMIN_LOGIN,
	payload: user,
});
const showUserLoadingActionCreator = () => ({
	type: UserActions.SHOW_USER_LOADING,
});
const hideUserLoadingActionCreator = () => ({
	type: UserActions.HIDE_USER_LOADING,
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

			dispatch(setUserActionCreator(user));
			dispatch(
				showAlert(AlertTypes.success, `Добро пожаловать ${user.user.name}!`)
			);
		} catch (error) {
			const err = error?.response?.data?.message;
			dispatch(showAlert(AlertTypes.error, err));
		}
	};
};

export const checkAuth = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch) => {
		try {
			dispatch(showUserLoadingActionCreator());

			const res = await axios.get<UserState>(
				`${process.env.SERVER_URL}/api/user/refresh`,
				{
					withCredentials: true,
				}
			);

			const user: UserState = res.data;

			localStorage.setItem('token', user.token);

			dispatch(setUserActionCreator(user));
			dispatch(hideUserLoadingActionCreator());
		} catch (error) {
			console.log(error);
			dispatch(hideUserLoadingActionCreator());
		}
	};
};
