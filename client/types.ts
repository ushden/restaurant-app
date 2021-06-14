export interface Dish {
	_id: string;
	image: string;
	name: string;
	weight: string;
	price: number;
	ingredients: string;
	type: string;
	rate: Number;
}

export interface OrderState {
	order: {
		[key: string]: Array<Dish>;
	};
	dishesCount: number;
	totalPrice: number;
}

export enum OrderActions {
	ADD_NEW_DISHES = 'ADD_NEW_DISHES',
}

interface addNewDishes {
	type: OrderActions.ADD_NEW_DISHES;
	payload: Dish;
}

export type OrderActionsTypes = addNewDishes;
