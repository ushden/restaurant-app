import { FC } from 'react';
import Link from 'next/link';

type AProps = {
	href: string;
	text?: string;
	className?: string;
};

export const A: FC<AProps> = ({ href, text, children, className }) => {
	return (
		<Link href={href}>
			<a className={className}>{text || children}</a>
		</Link>
	);
};
