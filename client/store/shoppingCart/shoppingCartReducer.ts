import { CartActions, CartActionsType, CartState } from '../../types';

const initialState: CartState = {
	isOpen: false,
};

export const shoppingCartReducer = (
	state = initialState,
	action: CartActionsType
): CartState => {
	switch (action.type) {
		case CartActions.OPEN_CART:
			return {
				isOpen: true,
			};
		case CartActions.CLOSE_CART:
			return { isOpen: false };
		default:
			return state;
	}
};
