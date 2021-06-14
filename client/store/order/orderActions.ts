import { Dish, OrderActions } from '../../types';

export const addNewDishesAction = (dish: Dish) => ({
	type: OrderActions.ADD_NEW_DISHES,
	payload: dish,
});
