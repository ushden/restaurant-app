import api from '../http/index';
import { CategoryState } from '../types';

export const addCategory = async (value: string): Promise<CategoryState> => {
	try {
		const response = await api.post<CategoryState>('/api/dishes/addType', {
			value,
		});

		return response.data;
	} catch (error) {
		return {
			message: error.response.data.message,
		};
	}
};
