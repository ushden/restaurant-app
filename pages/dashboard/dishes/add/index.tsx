import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { LayoutDashboard } from '../../../../components/LayoutDashboard';
import { showAlert } from '../../../../store/alert/alertActions';
import { createDish } from '../../../../store/dishes/dishesActions';
import { checkAuth } from '../../../../store/user/userActions';
import { AlertTypes, Category, Dish } from '../../../../types';

interface AddDishProps {
	categorys: Array<Category>;
}

const AddDish: FC<AddDishProps> = ({ categorys }) => {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [price, setPrice] = useState(0);
	const [weight, setWieght] = useState(0);
	const [type, setType] = useState('');

	const [file, setFile] = useState({} as File);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(checkAuth());
		}
	}, []);

	const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.currentTarget?.files as FileList;

		const reader = new FileReader();

		reader.addEventListener('load', () => {
			setImage(reader.result as string);
		});

		reader.readAsDataURL(files[0]);

		setFile(files[0]);
	};

	const handleClickSaveDish = () => {
		// Сделать попозже адекватную валидацию
		if (name === '' || image === '' || ingredients === '') {
			return dispatch(showAlert(AlertTypes.error, 'Заполните все поля'));
		}

		if (!price || !weight) {
			return dispatch(showAlert(AlertTypes.error, 'Заполните все поля'));
		}

		if (type === '' || type === 'default') {
			return dispatch(showAlert(AlertTypes.error, 'Заполните все поля'));
		}

		const dish: Dish = {
			image,
			ingredients,
			name,
			price,
			type,
			weight,
		};

		dispatch(createDish(file, dish));

		setName('');
		setImage('');
		setIngredients('');
		setWieght(0);
		setPrice(0);
	};

	return (
		<LayoutDashboard title='Добавить новое блюдо'>
			<div className='px-4 mb-4 md:w-7/12 md:mx-auto'>
				<h2 className='font-medium text-xl text-center mb-4'>Добавить блюдо</h2>
				<div className='flex flex-col space-y-5'>
					<div className='flex flex-col items-start'>
						<label htmlFor='dish-title' className='mb-2'>
							Название блюда
						</label>
						<input
							type='text'
							name='title'
							id='dish-title'
							placeholder='Введите сюда название блюда'
							className='border border-gray-300 shadow-lg rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all delay-75 w-full'
							onChange={(e) => setName(e.currentTarget.value)}
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label htmlFor='dish-ingredients' className='mb-2'>
							Перечислите ингридиенты через запятую
						</label>
						<input
							type='text'
							name='ingredients'
							id='dish-ingredients'
							placeholder='Свинина, соль, перец, соевый соус'
							value={ingredients}
							onChange={(e) => setIngredients(e.currentTarget.value)}
							className='border border-gray-300 shadow-lg rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all delay-75 w-full'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label htmlFor='dish-price' className='mb-2'>
							Стоимость блюда
						</label>
						<input
							type='text'
							name='price'
							id='dish-price'
							placeholder='48'
							value={price}
							onChange={(e) => setPrice(+e.currentTarget.value)}
							className='border border-gray-300 shadow-lg rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all delay-75 w-full'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label htmlFor='dish-wieght' className='mb-2'>
							Вес
						</label>
						<input
							type='text'
							name='wieght'
							id='dish-wieght'
							placeholder='48'
							value={weight}
							onChange={(e) => setWieght(+e.currentTarget.value)}
							className='border border-gray-300 shadow-lg rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all delay-75 w-full'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label htmlFor='dish-type' className='mb-2'>
							Категория блюда
						</label>
						<select
							name='type'
							id='dish-type'
							value={type}
							defaultChecked={false}
							onChange={(e) => setType(e.currentTarget.value)}
							className='border-gray-300 border w-full py-2 px-2 rounded-lg shadow-lg focus:outline-none focus:ring-blue-300 focus:ring-2'>
							<option defaultChecked value='default'>
								--Выбрать категорию--
							</option>

							{categorys.map((c) => (
								<option value={c.value} className='text-black' key={c._id}>
									{c.value}
								</option>
							))}
						</select>
					</div>
					<div className='flex flex-col items-center'>
						<label htmlFor='dish-image'>
							<Image
								src={image || '/images/header-bg-img.png'}
								alt={name}
								width={300}
								height={300}
							/>
						</label>
						<input
							type='file'
							name='dish-image'
							id='dish-image'
							className='hidden'
							onChange={handleChangeImage}
						/>
					</div>
					<div className='flex items-center justify-center space-x-4'>
						<button className='focus:outline-none border border-blue-500 rounded-lg py-2 px-4'>
							Назад
						</button>
						<button
							onClick={handleClickSaveDish}
							className='focus:outline-none border border-green-500 bg-green-500 text-white rounded-lg py-2 px-4'>
							Сохранить
						</button>
					</div>
				</div>
			</div>
		</LayoutDashboard>
	);
};

export default AddDish;

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/api/dishes/getTypes`);
		const categorys: Array<Category> = await res.json();

		return {
			props: { categorys },
		};
	} catch (error) {
		return {
			props: { error: error.response.data.message },
		};
	}
};
