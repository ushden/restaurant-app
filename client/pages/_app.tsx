import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { Alert } from '../components/Alert';
import { ShoppingCatrModal } from '../components/shopping-cart/ShoppingCatrModal';
import store from '../store/rootReducer';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNprogress
				color='orange'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<Alert />
				<ShoppingCatrModal />
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
