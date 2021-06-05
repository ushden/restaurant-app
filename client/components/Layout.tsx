import { FC } from 'react';
import Head from 'next/head';
import { Header } from './Header';

type LayoutProps = {
	title: string;
};

export const Layout: FC<LayoutProps> = ({ children, title }) => {
	return (
		<div className='px-2 bg-restGray'>
			<Head>
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
