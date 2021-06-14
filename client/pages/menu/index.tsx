import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { MenuSection } from '../../components/sections/menu/MenuSection';
import { Dish } from '../../types';

interface MenuProps {
	dishes: Array<Dish>;
}

const Menu: FC<MenuProps> = ({ dishes }) => {
	return (
		<Layout title='Menu'>
			<MenuSection dishes={dishes} />
		</Layout>
	);
};

export default Menu;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	console.log(ctx.query);
	const res = await fetch('http://localhost:4848/api/dishes');
	const dishes = await res.json();

	return {
		props: { dishes },
	};
};
