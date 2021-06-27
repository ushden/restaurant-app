import Image from 'next/image';
import { FC, MouseEvent } from 'react';
import { Dish } from '../../../types';

import { A } from '../../A';

interface DishesItemProps {
	dish: Dish;
	onDelete: (e: MouseEvent<HTMLButtonElement>, id: string | undefined) => void;
}

export const DishesItem: FC<DishesItemProps> = ({ dish, onDelete }) => {
	return (
		<article className='flex flex-col items-center justify-around shadow-lg mb-4 p-1 md:p-3 animate-showCart md:w-2/4 md:mx-auto'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex items-center'>
					<Image
						src={`${dish.image}`}
						alt='dish name'
						width={120}
						height={120}
					/>
					<div>
						<p className='font-semibold text-xl'>{dish.name}</p>
						<p className='font-light'>{dish.ingredients}</p>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-between md:justify-start md:space-x-4 w-full p-2'>
				<A
					href={`/dashboard/dishes/update/${dish._id}`}
					text='Редактировать'
					className='text-blue-500'
				/>
				<button
					className='focus:outline-none text-red-500'
					onClick={(e) => onDelete(e, dish._id)}>
					Удалить
				</button>
			</div>
		</article>
	);
};
