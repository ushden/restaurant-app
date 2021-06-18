import Image from 'next/image';
import { useState, MouseEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../store/alert/alertActions';
import { loginAdmin } from '../../store/user/userActions';
import { AlertTypes } from '../../types';

const AdminLogin = () => {
	const dispatch = useDispatch();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.currentTarget.value);
	};

	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handleClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (login.trim() === '' || password.trim() === '') {
			return dispatch(showAlert(AlertTypes.error, 'Заполните все поля!'));
		}

		dispatch(loginAdmin(login, password));
	};

	return (
		<section className='flex flex-col justify-start items-center h-screen w-full'>
			<div>
				<Image src='/images/logo.png' alt='rest' width={250} height={250} />
			</div>
			<form
				name='admin-login'
				className='flex flex-col space-y-4 items-center justify-center text-center'>
				<label htmlFor='login' className='font-light text-gray-500'>
					Введите ваш логин
					<input
						type='text'
						id='login'
						placeholder='Логин'
						autoComplete='username'
						value={login}
						onChange={handleChangeLogin}
						className='px-4 py-2 border border-yellow-500 rounded-xl shadow-md focus:outline-none focus:ring-2 ring-yellow-400'
					/>
				</label>
				<label htmlFor='pass' className='font-light text-gray-500'>
					Введите ваш пароль
					<input
						type='password'
						id='pass'
						autoComplete='current-password'
						placeholder='Пароль'
						value={password}
						onChange={handleChangePassword}
						className='px-4 py-2 border border-yellow-500 rounded-xl shadow-md focus:outline-none focus:ring-2 ring-yellow-400'
					/>
				</label>
				<button
					type='submit'
					onClick={handleClickSubmit}
					className='bg-yellow-500 rounded-xl px-6 py-2 text-white ring-2 ring-yellow-400 mb-2 focus:outline-none'>
					Войти
				</button>
			</form>
			<p className='font-light text-sm text-gray-300'>
				Страница только для администрации
			</p>
		</section>
	);
};

export default AdminLogin;
