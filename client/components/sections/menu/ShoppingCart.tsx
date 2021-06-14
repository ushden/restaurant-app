import { GiShoppingCart } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { selectDishesCount, selectTotalPrice } from '../../../store/selectors';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const ShoppingCart: FC = memo(() => {
	const totalPrice = useSelector(selectTotalPrice);
	const dishesCount = useSelector(selectDishesCount);
	const [order] = useLocalStorage('order', {});

	return (
		<div className='flex flex-col items-center cursor-pointer'>
			<IconContext.Provider value={{ className: 'text-yellow-500 text-2xl' }}>
				<div className='flex font-semibold'>
					<GiShoppingCart />
					<p className='md:ml-1'>{totalPrice + ' грн'}</p>
				</div>
				<div className='flex'>
					<p className='whitespace-nowrap'>Товаров: {dishesCount}</p>
					<span>
						<IoMdArrowDropdown />
					</span>
				</div>
			</IconContext.Provider>
		</div>
	);
});
