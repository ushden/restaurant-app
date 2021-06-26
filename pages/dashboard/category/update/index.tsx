import { LayoutDashboard } from '../../../../components/LayoutDashboard';
import { CategoryInput } from '../../../../components/dashboard/category/CategoryInput';
import { FC, useState } from 'react';
import { ChangeEvent } from 'react';

interface UpdateProps {
	value: string;
}

const UpdateDishesTypePage: FC<UpdateProps> = ({ value }) => {
	const [category, setCategory] = useState(value);

	const handleChangeCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
		setCategory(e.currentTarget.value);
	};

	const handleClickUpdateCategory = () => {};

	return (
		<LayoutDashboard title='Редактировать категорию'>
			<section className='px-4 text-center'>
				<h2 className='text-2xl font-medium mb-4'>
					Редактировать название категории
				</h2>
				<CategoryInput
					value={category}
					onChange={handleChangeCategoryName}
					onClick={handleClickUpdateCategory}
				/>
			</section>
		</LayoutDashboard>
	);
};

export default UpdateDishesTypePage;
