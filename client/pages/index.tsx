import { FC } from 'react';
import { Layout } from '../components/Layout';
import { MainScreen } from '../components/sections/MainScreen';

const Home: FC = () => {
	return (
		<Layout title='Home Page'>
			<MainScreen />
		</Layout>
	);
};

export default Home;
