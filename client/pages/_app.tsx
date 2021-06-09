import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNprogress
				color='blue'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</>
	);
}
