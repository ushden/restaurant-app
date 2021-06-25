import { FC } from 'react';
import { GetServerSideProps } from 'next';

import { Layout } from '../components/Layout';
import { MainScreen } from '../components/sections/MainSection';
import { MenuSection } from '../components/sections/menu/MenuSection';
import { WhyAs } from '../components/sections/WhyAsSection';
import { Dish } from '../types';

interface HomeProps {
	dishes: Array<Dish>;
}

const Home: FC<HomeProps> = ({ dishes }) => {
	return (
		<Layout title='Home Page'>
			<MainScreen />
			<WhyAs />
			<MenuSection dishes={dishes} />
		</Layout>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/api/dishes`);
	const dishes = await res.json();

	return {
		props: { dishes },
	};
};
