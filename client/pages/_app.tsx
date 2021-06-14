import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
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
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
