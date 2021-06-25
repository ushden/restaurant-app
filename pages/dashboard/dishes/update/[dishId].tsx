import { GetServerSideProps } from 'next';
import { FC, memo } from 'react';
import { Dish } from '../../../../types';
import { LayoutDashboard } from '../../../../components/LayoutDashboard';
import { useRouter } from 'next/dist/client/router';

interface DishProps {
	dish: Dish;
}

const DishItem: FC<DishProps> = memo(({ dish }) => {
	const router = useRouter();

	return (
		<LayoutDashboard title={`Редактировать | ${dish.name}`}>
			<div className='shadow-sm p-4 font-semibold text-2xl'>
				<h2>Редактировать блюдо</h2>
			</div>
			<div className='p-4 flex items-center justify-between'>
				<button
					className='focus:outline-none border border-blue-500 px-4 py-2 rounded-lg'
					onClick={() => router.back()}>
					Назад
				</button>
				<button className='focus:outline-none border border-green-500 bg-green-500 text-white px-4 py-2 rounded-lg'>
					Сохранить
				</button>
			</div>
		</LayoutDashboard>
	);
});

export default DishItem;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const dishId = ctx.params?.dishId;

	console.log(ctx);
	const res = await fetch(`${process.env.SERVER_URL}/api/dishes/${dishId}`);
	const { dish } = await res.json();
	return {
		props: { dish },
	};
};
