import { FC, memo, MouseEvent } from 'react';

interface FilterButtonProps {
	text: String;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
	selectItem: string | null;
}

export const FilterButton: FC<FilterButtonProps> = memo(
	({ text, onClick, selectItem }) => {
		return (
			<button
				onClick={(e) => onClick(e)}
				className={`py-1 px-5 border border-yellow-500 bg-yellow-50 rounded-xl outline-none focus:outline-none ${
					text === selectItem ? 'bg-yellow-500 text-white' : ''
				}`}>
				{text}
			</button>
		);
	}
);
