import { ChangeEvent, FC } from 'react';

interface CategoryInputProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onClick: () => void;
	value: string;
}

export const CategoryInput: FC<CategoryInputProps> = ({
	onChange,
	value,
	onClick,
}) => {
	return (
		<>
			<input
				type='text'
				className='focus:outline-none focus:ring-2 focus:ring-blue-200 border border-gray-300 shadow-lg px-4 py-2 w-full rounded-lg mb-4'
				placeholder='Например: Закуски'
				value={value}
				onChange={onChange}
			/>
			<button
				className='focus:outline-none px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:opacity-70 transition-all delay-100'
				onClick={onClick}>
				Сохранить
			</button>
		</>
	);
};
