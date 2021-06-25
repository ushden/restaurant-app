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
	MINUS_ONE_DISHES = 'MINUS_ONE_DISHES',
	UPDATE_ORDER = 'UPDATE_ORDER',
	CLEAR_ORDER = 'CLEAR_ORDER',
	DELETE_DESHES = 'DELETE_DESHES',
}

interface addNewDishes {
	type: OrderActions.ADD_NEW_DISHES;
	payload: Dish;
}

interface minusOnewDishes {
	type: OrderActions.MINUS_ONE_DISHES;
	payload: OrderState;
}

interface deleteDishes {
	type: OrderActions.DELETE_DESHES;
	payload: OrderState;
}

interface updateOrder {
	type: OrderActions.UPDATE_ORDER;
	payload: OrderState;
}

interface clearOreder {
	type: OrderActions.CLEAR_ORDER;
}

export type OrderActionsTypes =
	| addNewDishes
	| updateOrder
	| clearOreder
	| deleteDishes
	| minusOnewDishes;

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

export enum AlertTypes {
	success = 'success',
	error = 'error',
}

export enum AlertActions {
	SHOW_ALERT = 'SHOW_ALERT',
	HIDE_ALERT = 'HIDE_ALERT',
}
export interface AlertState {
	visible: boolean;
	type: AlertTypes;
	message: string;
}

interface showAlert {
	type: AlertActions.SHOW_ALERT;
	payload: AlertState;
}

interface hideAlert {
	type: AlertActions.HIDE_ALERT;
	payload: boolean;
}

export type AlertActionTypes = showAlert | hideAlert;

export interface User {
	_id: string;
	name: string;
	roles: Array<string>;
}
export interface UserState {
	user: User;
	token: string;
	isAuth: boolean;
	loading: boolean;
}

export enum UserActions {
	ADMIN_LOGIN = 'ADMIN_LOGIN',
	SHOW_USER_LOADING = 'SHOW_USER_LOADING',
	HIDE_USER_LOADING = 'HIDE_USER_LOADING',
}

interface showUserLoading {
	type: UserActions.SHOW_USER_LOADING;
}

interface hideUserLoading {
	type: UserActions.HIDE_USER_LOADING;
}

interface login {
	type: UserActions.ADMIN_LOGIN;
	payload: UserState;
}

export type UserActionsType = login | showUserLoading | hideUserLoading;
