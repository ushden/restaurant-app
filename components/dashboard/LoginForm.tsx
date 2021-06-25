import Image from 'next/image';
import { ChangeEvent, FC, MouseEvent } from 'react';

import { Layout } from '../../components/Layout';

interface LoginFormProps {
	login: string;
	password: string;
	handleChangeLogin: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	handleClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const LoginForm: FC<LoginFormProps> = ({
	handleChangeLogin,
	handleChangePassword,
	handleClickSubmit,
	login,
	password,
}) => {
	return (
		<Layout title='Войти'>
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
		</Layout>
	);
};
