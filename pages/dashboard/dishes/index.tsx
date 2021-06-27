import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { FC, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DishesItem } from '../../../components/dashboard/dishes/DishesItem';
import { LayoutDashboard } from '../../../components/LayoutDashboard';
import { selectDishes, selectIsAuth } from '../../../store/selectors';
import { checkAuth } from '../../../store/user/userActions';
import { Dish } from '../../../types';
import { A } from '../../../components/A';
import {
	deleteDish,
	getAllDishesAction,
} from '../../../store/dishes/dishesActions';

interface DishesProps {
	dishes: Dish[];
}

const Dishes: FC<DishesProps> = ({ dishes }) => {
	const isAuth = useSelector(selectIsAuth);
	const allDishes = useSelector(selectDishes);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllDishesAction(dishes));
	}, [dishes]);

	useEffect(() => {
		if (!isAuth && localStorage.getItem('token')) {
			dispatch(checkAuth());
		}
	}, []);

	const handleClickDeleteDish = (
		e: MouseEvent<HTMLButtonElement>,
		id: string | undefined
	) => {
		e.preventDefault();

		const isOk = confirm('Вы уверены, что хотите удалить блюдо?');

		if (!isOk) return;

		dispatch(deleteDish(id));
	};

	return (
		<LayoutDashboard title='Блюда'>
			<div className='p-4 md:w-2/4 md:mx-auto'>
				<A
					href='/dashboard/dishes/add'
					text='Добавить блюдо'
					className='py-2 px-4 border border-green-500 bg-green-500 text-white rounded-lg'
				/>
			</div>
			{allDishes.length === 0 && (
				<p className='text-lg text-center font-light py-4'>
					Добавьте ваше первое блюдо
				</p>
			)}
			{allDishes.map((dish) => (
				<DishesItem
					dish={dish}
					key={dish._id}
					onDelete={handleClickDeleteDish}
				/>
			))}
		</LayoutDashboard>
	);
};

export default Dishes;

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/api/dishes`);
	const dishes = await res.json();

	return {
		props: { dishes },
	};
};
