import $api from '../http';

export const uploadImage = async (image: File) => {
	try {
		const formData = new FormData();

		formData.set('image', image, image.name);

		const response = await $api.post('/api/dishes/uploadImage', formData);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
