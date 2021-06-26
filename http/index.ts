import axios from 'axios';
import { UserState } from '../types';

const $api = axios.create({
	withCredentials: true,
	baseURL: process.env.SERVER_URL,
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (err) => {
		const originalRequest = err.config;
		try {
			originalRequest._isRetry = true;

			if (err.response.status === 401 && err.config && !err.config._isRetry) {
				const res = await axios.get<UserState>(
					`${process.env.SERVER_URL}/api/user/refresh`,
					{
						withCredentials: true,
					}
				);

				localStorage.setItem('token', res.data.token);

				return $api.request(originalRequest);
			}
		} catch (error) {
			console.log('Пользователь не авторизован');
		}

		throw err;
	}
);

export default $api;
