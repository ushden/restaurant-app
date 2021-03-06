import { Dish, OrderActions, OrderState } from '../../types';

export const addNewDishesAction = (dish: Dish) => ({
	type: OrderActions.ADD_NEW_DISHES,
	payload: dish,
});

export const updateOrderStateOfLocalStorage = (order: OrderState) => ({
	type: OrderActions.UPDATE_ORDER,
	payload: order,
});

export const clearOrederAction = () => ({ type: OrderActions.CLEAR_ORDER });

const deleteDishesAction = (order: OrderState) => ({
	type: OrderActions.DELETE_DESHES,
	payload: order,
});

export const deleteDishes = (order: OrderState, key: string | undefined) => {
	const newOrder = { ...order.order };
	const deleteDishesCount = newOrder[key as string].length;
	const deletePrice = newOrder[key as string].reduce(
		(acc, el) => acc + el.price,
		0
	);

	const isDelete = delete newOrder[key as string];

	if (isDelete) {
		const payload: OrderState = {
			order: newOrder,
			dishesCount: order.dishesCount - deleteDishesCount,
			totalPrice: order.totalPrice - deletePrice,
		};

		return deleteDishesAction(payload);
	}
};

export const minusOneDish = (order: OrderState, key: string | undefined) => {
	const newOrder = { ...order.order };
	let payload: OrderState;

	if (newOrder[key as string].length === 1) {
		const deleteDishesCount = newOrder[key as string].length;
		const deletePrice = newOrder[key as string].reduce(
			(acc, el) => acc + el.price,
			0
		);

		const isDelete = delete newOrder[key as string];

		if (isDelete) {
			payload = {
				order: newOrder,
				dishesCount: order.dishesCount - deleteDishesCount,
				totalPrice: order.totalPrice - deletePrice,
			};
			return { type: OrderActions.MINUS_ONE_DISHES, payload };
		}
		return new Error('Что-то явно не учтено');
	}

	const deletedEl = newOrder[key as string].pop();

	if (deletedEl) {
		payload = {
			order: newOrder,
			dishesCount: order.dishesCount - 1,
			totalPrice: order.totalPrice - deletedEl.price,
		};
		return { type: OrderActions.MINUS_ONE_DISHES, payload };
	}
};
