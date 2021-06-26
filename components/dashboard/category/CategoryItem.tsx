import { FC } from 'react';
import { A } from '../../A';

interface CategoryItemProps {
	name: string | undefined;
	_id: string | undefined;
}

export const CategoryItem: FC<CategoryItemProps> = ({ name, _id }) => {
	return (
		<article className='border-b p-2'>
			<div>
				<h3 className='font-medium text-xl mb-2'>{name}</h3>
			</div>
			<div className='flex items-center space-x-4'>
				<A
					href={`/dashboard/category/update/${_id}`}
					text='Редактировать'
					className='text-blue-500'
				/>
				<button className='focus:outline-none text-red-500'>Удалить</button>
			</div>
		</article>
	);
};
