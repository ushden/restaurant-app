import { FC } from 'react';
import Link from 'next/link';

type AProps = {
	href: string;
	text: string;
};

export const A: FC<AProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<a>{text}</a>
		</Link>
	);
};
