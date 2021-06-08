import { FC } from 'react';
import Head from 'next/head';
import { Header } from './Header';

type LayoutProps = {
	title: string;
};

export const Layout: FC<LayoutProps> = ({ children, title }) => {
	return (
		<div className='bg-rest bg-contain bg-repeat max-w-7xl'>
			<Head>
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/icons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/icons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/icons/favicon-16x16.png'
				/>
				<meta name='msapplication-TileColor' content='#00aba9' />
				<meta name='theme-color' content='#f6f6f6' />
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>{title}</title>
			</Head>
			<Header />
			<main>{children}</main>
		</div>
	);
};
