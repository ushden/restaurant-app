import { OrderActions, OrderActionsTypes, OrderState } from '../../types';

const defaultState: OrderState = {
	order: {},
	dishesCount: 0,
	totalPrice: 0,
};

export const orderReducer = (
	state = defaultState,
	action: OrderActionsTypes
): OrderState => {
	switch (action.type) {
		case OrderActions.ADD_NEW_DISHES:
			return {
				...state,
				order: {
					...state.order,
					[action.payload._id]: state.order[action.payload._id]
						? [...state.order[action.payload._id], action.payload]
						: [action.payload],
				},
				dishesCount: (state.dishesCount += 1),
				totalPrice: state.totalPrice + action.payload.price,
			};
		case OrderActions.MINUS_ONE_DISHES:
			return {
				...state,
				order: { ...action.payload.order },
				totalPrice: action.payload.totalPrice,
				dishesCount: action.payload.dishesCount,
			};
		case OrderActions.DELETE_DESHES:
			return {
				...state,
				order: {
					...action.payload.order,
				},
				totalPrice: action.payload.totalPrice,
				dishesCount: action.payload.dishesCount,
			};
		case OrderActions.UPDATE_ORDER:
			return {
				...action.payload,
				order: { ...action.payload.order },
			};

		case OrderActions.CLEAR_ORDER:
			return defaultState;

		default:
			return { ...state };
	}
};
