import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import $api from '../../http/index';
import { DishesActions, AlertTypes } from './../../types';
import { Dish } from '../../types';
import { RootState } from '../rootReducer';
import { showAlert } from '../alert/alertActions';
import { uploadImage } from '../../api/uploadImage';

interface UploadImageData {
	message: string;
	name: string;
}

const createDishAction = (dish: Dish) => ({
	type: DishesActions.CREATE_DISH,
	payload: dish,
});
const deleteDishAction = (id: string | undefined) => ({
	type: DishesActions.DELETE_DISH,
	payload: id,
});

export const getAllDishesAction = (dishes: Array<Dish>) => ({
	type: DishesActions.GET_ALL_DISHES,
	payload: dishes,
});

export const deleteDish = (
	id: string | undefined
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch) => {
		try {
			await $api.delete('/api/dishes/deleteDish', {
				data: { id },
			});

			dispatch(deleteDishAction(id));
			dispatch(showAlert(AlertTypes.success, 'Блюдо успешно удалено'));
		} catch (error) {
			dispatch(showAlert(AlertTypes.error, error.response.body.message));
		}
	};
};

export const createDish = (
	image: File,
	dish: Dish
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch) => {
		try {
			const data: UploadImageData = await uploadImage(image);

			const payload: Dish = {
				...dish,
				image: `${process.env.SERVER_URL}/${data.name}`,
			};

			const response = await $api.post('/api/dishes/addDish', payload);

			dispatch(createDishAction(response.data.dish));
			dispatch(showAlert(AlertTypes.success, 'Блюдо успешно создано'));
		} catch (error) {
			console.log(error);
			dispatch(showAlert(AlertTypes.error, error?.response?.body?.message));
		}
	};
};
