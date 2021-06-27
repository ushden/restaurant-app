import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../../../api/createCategory';
import { CategoryInput } from '../../../../components/dashboard/category/CategoryInput';
import { LayoutDashboard } from '../../../../components/LayoutDashboard';
import { showAlert } from '../../../../store/alert/alertActions';
import { AlertTypes } from '../../../../types';

const AddDishesTypePage = () => {
	const dispatch = useDispatch();
	const [category, setCategory] = useState('');

	const handleChangeCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
		setCategory(e.currentTarget.value);
	};

	const handleClickAddCategory = async () => {
		if (category === '') {
			return dispatch(showAlert(AlertTypes.error, 'Поле не может быть пустым'));
		}

		const { message, type } = await createCategory(category);

		if (type) {
			return dispatch(showAlert(AlertTypes.success, message));
		}

		dispatch(showAlert(AlertTypes.error, message));
	};

	return (
		<LayoutDashboard title='Добавить категорию'>
			<section className='px-4 text-center'>
				<h2 className='text-2xl font-medium mb-4'>
					Введите название категирии
				</h2>
				<CategoryInput
					value={category}
					onChange={handleChangeCategoryName}
					onClick={handleClickAddCategory}
				/>
			</section>
		</LayoutDashboard>
	);
};

export default AddDishesTypePage;
