import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Dish } from '../../../types';
import { FC } from 'react';

interface MenuItemProps {
	dish: Dish;
}

export const MenuItem: FC<MenuItemProps> = ({ dish }) => {
	return (
		<article className='bg-white p-2 shadow-xl min-w-max mb-5 relative'>
			<div className='flex justify-center items-center'>
				<Image
					src='/images/header-bg-img.png'
					alt='food name'
					width={250}
					height={250}
				/>
			</div>
			<div className='flex items-center justify-between space-x-5 mb-2'>
				<p className='font-semibold text-lg'>{dish.name}</p>
				<p>{dish.weight}</p>
			</div>
			<div className='w-48 mb-2'>
				<p className='font-light'>{dish.ingredients}</p>
			</div>
			<div className='flex items-center justify-between mb-8'>
				<div>
					<StarRatings
						rating={dish.rate}
						starRatedColor='orange'
						starHoverColor='orange'
						changeRating={() => console.log('change rating')}
						numberOfStars={5}
						starDimension='18px'
						starSpacing='4px'
					/>
				</div>
				<div className='font-semibold'>{dish.price}</div>
			</div>
			<div className='absolute -right-3 -bottom-3 cursor-pointer text-yellow-500 text-5xl'>
				<BsPlusCircleFill />
			</div>
		</article>
	);
};
