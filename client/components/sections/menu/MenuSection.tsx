import { FilterButton } from './FilterButton';
import { MenuItem } from './MenuItem';
import { ShoppingCart } from './ShoppingCart';

export const MenuSection = () => {
	return (
		<section
			className='border-2 border-yellow-500 border-b-0 border-l-0 border-r-0 pt-10 mb-4'
			style={{
				borderTopLeftRadius: '100% 15%',
				borderTopRightRadius: '100% 15%',
			}}>
			<div className='flex items-center justify-between md:justify-center mb-4 px-2 lg:px-20'>
				<h2 className='text-3xl font-semibold text-left mb-5 md:text-4xl'>
					Меню
				</h2>
				<div className='md:hidden'>
					<ShoppingCart />
				</div>
			</div>
			<div className='flex justify-between mb-4'>
				<div className='flex max-w-full overflow-x-scroll py-2 space-x-3 md:space-x-4 rest-scroll-x-0 mb-4 px-2 lg:px-20'>
					<FilterButton />
					<FilterButton />
					<FilterButton />
					<FilterButton />
					<FilterButton />
					<FilterButton />
					<FilterButton />
				</div>
				<div className='hidden md:block md:ml-20'>
					<ShoppingCart />
				</div>
			</div>
			<div className='flex flex-row rest-scroll-x-0 max-w-full overflow-x-scroll space-x-6 px-2 lg:px-20 lg:flex-wrap'>
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
			</div>
			<div className='lg:hidden flex justify-center'>
				<button className='px-10 py-3 bg-yellow-500 rounded-2xl text-white shadow-xl focus:ring focus:ring-yellow-400 hover:ring'>
					Оформить заказ
				</button>
			</div>
		</section>
	);
};
