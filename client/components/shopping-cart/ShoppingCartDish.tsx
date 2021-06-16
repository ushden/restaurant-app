import Image from 'next/image';
import { FC } from 'react';
import {
	AiOutlineDelete,
	AiFillPlusCircle,
	AiFillMinusCircle,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import {
	addNewDishesAction,
	deleteDishes,
	minusOneDish,
} from '../../store/order/orderActions';
import { selectOrder } from '../../store/selectors';
import { Dish } from '../../types';

interface ShoppingCartDishProps {
	dish: Dish;
	dishCount: number;
}

export const ShoppingCartDish: FC<ShoppingCartDishProps> = ({
	dish,
	dishCount,
}) => {
	const dispatch = useDispatch();
	const order = useSelector(selectOrder);

	return (
		<article className='flex flex-col md:flex-row items-center justify-around shadow-lg mb-4 p-1 md:p-3 animate-showCart'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex items-center'>
					<Image
						src='/images/header-bg-img.png'
						alt='dish name'
						width={120}
						height={120}
					/>
					<div>
						<p className='font-semibold text-xl'>{dish?.name}</p>
						<p className='font-light'>{dish?.ingredients}</p>
					</div>
				</div>
				<div className='flex md:hidden items-center'>
					<button
						className='outline-none focus:outline-none text-yellow-500 text-3xl'
						onClick={() => dispatch(deleteDishes(order, dish?._id))}>
						<AiOutlineDelete />
					</button>
				</div>
			</div>
			<div className='flex items-center justify-between w-full p-2 md:justify-center space-x-10'>
				<div className='flex items-center space-x-2'>
					<button
						className='outline-none focus:outline-none text-yellow-500 text-3xl'
						onClick={() => dispatch(addNewDishesAction(dish))}>
						<AiFillPlusCircle />
					</button>
					<span className='font-semibold text-2xl'>{dishCount}</span>
					<button
						className='outline-none focus:outline-none text-yellow-500 text-3xl'
						onClick={() => dispatch(minusOneDish(order, dish?._id))}>
						<AiFillMinusCircle />
					</button>
				</div>
				<div className='font-semibold text-xl flex items-center'>
					<p>{`${dish?.price * dishCount} грн`}</p>
				</div>
			</div>
			<div className='hidden md:flex items-center'>
				<button
					className='outline-none focus:outline-none text-yellow-500 text-3xl'
					onClick={() => dispatch(deleteDishes(order, dish?._id))}>
					<AiOutlineDelete />
				</button>
			</div>
		</article>
	);
};
