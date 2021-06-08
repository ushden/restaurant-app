import { FilterButton } from './FilterButton';
import { ShoppingCart } from './ShoppingCart';

export const MenuSection = () => {
	return (
		<section
			className='border-2 border-yellow-500 border-b-0 border-l-0 border-r-0 pt-7 px-2 lg:px-20'
			style={{
				borderTopLeftRadius: '100% 60%',
				borderTopRightRadius: '100% 60%',
			}}>
			<div className='flex items-center justify-between md:justify-center'>
				<h2 className='text-3xl font-semibold text-left mb-5 md:text-4xl'>
					Меню
				</h2>
				<div className='md:hidden'>
					<ShoppingCart />
				</div>
			</div>
			<div className='flex justify-between'>
				<div className='flex max-w-full overflow-x-scroll py-2 space-x-3 md:space-x-4 rest-scroll-x-0'>
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
			<div>menu item</div>
		</section>
	);
};
