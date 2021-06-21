import { CartActions } from '../../types';

export const openShoppingCartAction = () => ({ type: CartActions.OPEN_CART });
export const closeShoppingCartAction = () => ({
	type: CartActions.CLOSE_CART,
});
