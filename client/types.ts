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
	UPDATE_ORDER = 'UPDATE_ORDER',
}

interface addNewDishes {
	type: OrderActions.ADD_NEW_DISHES;
	payload: Dish;
}

interface updateOrder {
	type: OrderActions.UPDATE_ORDER;
	payload: OrderState;
}

export type OrderActionsTypes = addNewDishes | updateOrder;

export interface CartState {
	isOpen: boolean;
}

export enum CartActions {
	OPEN_CART = 'OPEN_CART',
	CLOSE_CART = 'CLOSE_CART',
}

interface openCart {
	type: CartActions.OPEN_CART;
}

interface closeCart {
	type: CartActions.CLOSE_CART;
}

export type CartActionsType = openCart | closeCart;
