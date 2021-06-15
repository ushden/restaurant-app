import { Dish, OrderActions, OrderState } from '../../types';

export const addNewDishesAction = (dish: Dish) => ({
	type: OrderActions.ADD_NEW_DISHES,
	payload: dish,
});

export const updateOrderStateOfLocalStorage = (order: OrderState) => ({
	type: OrderActions.UPDATE_ORDER,
	payload: order,
});
