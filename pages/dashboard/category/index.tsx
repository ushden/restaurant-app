import { GetServerSideProps } from 'next';

import { LayoutDashboard } from '../../../components/LayoutDashboard';
import { A } from '../../../components/A';
import { CategoryItem } from '../../../components/dashboard/category/CategoryItem';
import { FC } from 'react';
import { Category } from '../../../types';

interface CategoryPageProps {
	categorys: Array<Category>;
}

const CategoryPage: FC<CategoryPageProps> = ({ categorys }) => {
	return (
		<LayoutDashboard title='Категории'>
			<section className='px-4'>
				<div className='mb-4 pt-4'>
					<A
						className='bg-green-500 px-4 py-2 border border-green-500 rounded-lg shadow-sm text-white'
						href='/dashboard/category/add'
						text='Добавить категорию'
					/>
				</div>
				<div>
					{categorys.length === 0 ? (
						<p className='text-center font-light py-4'>Добавьте категорию</p>
					) : (
						categorys.map((c) => (
							<CategoryItem key={c._id} name={c.value} _id={c._id} />
						))
					)}
				</div>
			</section>
		</LayoutDashboard>
	);
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/api/dishes/getTypes`);
		const categorys: Array<Category> = await res.json();

		return {
			props: { categorys },
		};
	} catch (error) {
		return {
			props: { error: error.response.data.message },
		};
	}
};
