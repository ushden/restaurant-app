import { DishesState, DishesActionsType, DishesActions } from '../../types';

const initialState: DishesState = {
	dish: {
		_id: '',
		image: '',
		ingredients: '',
		name: '',
		price: 0,
		type: '',
		weight: 0,
		rate: 5,
	},
	dishes: [],
	loading: false,
};

export const dishesReducer = (
	state = initialState,
	action: DishesActionsType
): DishesState => {
	switch (action.type) {
		case DishesActions.GET_ALL_DISHES:
			return { ...state, dishes: action.payload };
		case DishesActions.CREATE_DISH:
			return { ...state, dishes: [...state.dishes, action.payload] };
		case DishesActions.DELETE_DISH:
			return {
				...state,
				dishes: [...state.dishes.filter((dish) => dish._id !== action.payload)],
			};

		default:
			return { ...state };
	}
};
