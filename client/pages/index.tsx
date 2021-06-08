import { FC } from 'react';
import { Layout } from '../components/Layout';
import { MainScreen } from '../components/sections/MainSection';
import { MenuSection } from '../components/sections/menu/MenuSection';
import { WhyAs } from '../components/sections/WhyAsSection';

const Home: FC = () => {
	return (
		<Layout title='Home Page'>
			<MainScreen />
			<WhyAs />
			<MenuSection />
		</Layout>
	);
};

export default Home;
