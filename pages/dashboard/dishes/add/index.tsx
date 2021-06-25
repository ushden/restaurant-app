import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { LayoutDashboard } from '../../../../components/LayoutDashboard';

const AddDish = () => {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');

	const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.currentTarget?.files as FileList;

		const reader = new FileReader();

		reader.addEventListener('load', () => {
			setImage(reader.result as string);
		});

		reader.readAsDataURL(files[0]);
	};

	const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value);
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
							onChange={handleChangeName}
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
							className='border border-gray-300 shadow-lg rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all delay-75 w-full'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label htmlFor='dish-price' className='mb-2'>
							Стоимость блюда
						</label>
						<input
							type='number'
							name='price'
							id='dish-price'
							placeholder='48'
							className='border border-gray-300 shadow-lg rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all delay-75 w-full'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label htmlFor='dish-wieght' className='mb-2'>
							Вес
						</label>
						<input
							type='number'
							name='wieght'
							id='dish-wieght'
							placeholder='48'
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
							className='border-gray-300 border w-full py-2 px-2 rounded-lg shadow-lg focus:outline-none focus:ring-blue-300 focus:ring-2'>
							<option value='Закуски' className='text-black'>
								Закуски
							</option>
							<option value='Салаты' className='text-black'>
								Салаты
							</option>
							<option value='Пиццы' className='text-black'>
								Пиццы
							</option>
							<option value='Десерты' className='text-black'>
								Десерты
							</option>
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
						<button className='focus:outline-none border border-green-500 bg-green-500 text-white rounded-lg py-2 px-4'>
							Сохранить
						</button>
					</div>
				</div>
			</div>
		</LayoutDashboard>
	);
};

export default AddDish;
