import { UserActions, UserActionsType, UserState } from '../../types';

const initialState: UserState = {
	user: {
		_id: '',
		name: '',
		roles: [],
	},
	token: '',
	isAuth: false,
	loading: true,
};

export const userReducer = (
	state = initialState,
	action: UserActionsType
): UserState => {
	switch (action.type) {
		case UserActions.ADMIN_LOGIN:
			return {
				...state,
				user: {
					...action.payload.user,
					roles: [...action.payload.user.roles],
				},
				token: action.payload.token,
				isAuth: true,
			};
		case UserActions.SHOW_USER_LOADING:
			return { ...state, loading: true };
		case UserActions.HIDE_USER_LOADING:
			return { ...state, loading: false };
		default:
			return { ...state };
	}
};
