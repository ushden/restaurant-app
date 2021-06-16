import { useEffect } from 'react';
import { FC, memo, useMemo, useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { FILTER_ALL } from '../../../constants';
import {
	addNewDishesAction,
	updateOrderStateOfLocalStorage,
} from '../../../store/order/orderActions';
import { selectOrder } from '../../../store/selectors';
import { AlertTypes, Dish, OrderState } from '../../../types';
import { FilterButton } from './FilterButton';
import { MenuItem } from './MenuItem';
import { ShoppingCart } from '../../shopping-cart/ShoppingCart';
import { showAlert } from '../../../store/alert/alertActions';

interface MenuSectionProps {
	dishes: Array<Dish>;
}

export const MenuSection: FC<MenuSectionProps> = memo(({ dishes }) => {
	const [selectItem, setSelectItem] = useState<string | null>(FILTER_ALL);
	const [filterDishes, setFilterDishes] = useState<Array<Dish>>(dishes);
	const [order, setOrder] = useLocalStorage<OrderState>('order', {
		order: {},
		dishesCount: 0,
		totalPrice: 0,
	});

	const orderState = useSelector(selectOrder);
	const dispatch = useDispatch();

	useEffect(() => {
		if (order.dishesCount) {
			dispatch(updateOrderStateOfLocalStorage(order));
		}
	}, []);

	useEffect(() => {
		setOrder(orderState);
	}, [orderState]);

	const dishesTypes = useMemo(() => {
		return dishes?.reduce(
			(acc, el) => {
				if (!acc.includes(el.type)) {
					acc.push(el.type);
					return acc;
				}

				return acc;
			},
			[FILTER_ALL]
		);
	}, []);

	const handleClickOnFilterButton = (e: MouseEvent<HTMLButtonElement>) => {
		const currType = e.currentTarget.textContent;

		e.preventDefault();

		setSelectItem(currType);
		if (currType === FILTER_ALL) {
			return setFilterDishes(dishes);
		}
		setFilterDishes(dishes.filter((el) => el.type === currType));
	};

	const handleClickToShopingCartButton = (dish: Dish) => {
		dispatch(addNewDishesAction(dish));
		dispatch(showAlert(AlertTypes.success, 'Товар успешно добавлен!'));
	};

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
				<div className='flex max-w-full overflow-x-scroll outline-none py-2 space-x-3 md:space-x-4 rest-scroll-x-0 mb-4 px-2 lg:px-20'>
					{dishesTypes?.map((text) => (
						<FilterButton
							text={text}
							key={text}
							selectItem={selectItem}
							onClick={handleClickOnFilterButton}
						/>
					))}
				</div>
				<div className='hidden md:block md:ml-20'>
					<ShoppingCart />
				</div>
			</div>
			<div className='flex flex-row rest-scroll-x-0 max-w-full overflow-x-scroll space-x-6 px-2 lg:px-20 lg:flex-wrap'>
				{filterDishes?.map((dish) => (
					<MenuItem
						key={dish._id}
						dish={dish}
						addToShopingCart={handleClickToShopingCartButton}
					/>
				))}
			</div>
			<div className='lg:hidden flex justify-center'>
				<button className='px-10 py-3 bg-yellow-500 rounded-2xl text-white shadow-xl focus:ring focus:ring-yellow-400 hover:ring'>
					Оформить заказ
				</button>
			</div>
		</section>
	);
});
