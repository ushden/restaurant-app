import { GiShoppingCart } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { IoMdArrowDropdown } from 'react-icons/io';

export const ShoppingCart = () => {
	return (
		<div className='flex flex-col items-center cursor-pointer'>
			<IconContext.Provider value={{ className: 'text-yellow-500 text-2xl' }}>
				<div className='flex font-semibold'>
					<GiShoppingCart />
					<p className='md:ml-1'>48 грн</p>
				</div>
				<div className='flex'>
					<p className='whitespace-nowrap'>Товаров: 5</p>
					<span>
						<IoMdArrowDropdown />
					</span>
				</div>
			</IconContext.Provider>
		</div>
	);
};
