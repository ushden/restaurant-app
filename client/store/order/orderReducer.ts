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

		default:
			return { ...state };
	}
};
