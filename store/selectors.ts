import { RootState } from './rootReducer';

export const selectTotalPrice = (state: RootState) => state.order.totalPrice;
export const selectDishesCount = (state: RootState) => state.order.dishesCount;
export const selectOrder = (state: RootState) => state.order;

export const selectShoppingCartIsOpen = (state: RootState) =>
	state.shoppingCart.isOpen;

export const selectAlertState = (state: RootState) => state.alert;

export const selectIsAuth = (state: RootState) => state.user.isAuth;
