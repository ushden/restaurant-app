import { CartActions } from '../../types';

export const openShoppingCartActions = () => ({ type: CartActions.OPEN_CART });
export const closeShoppingCartActions = () => ({
	type: CartActions.CLOSE_CART,
});
