import { A } from '../A';

export const MainScreen = () => {
	return (
		<section>
			<div className='mb-10'>
				<h2 className='font-bold text-4xl mb-5'>
					Доставка любимой кухни прямо к Вам домой
				</h2>
				<p className='text-lg'>
					Самое большое разнообразие различных блюд приготовленых лучшими
					поварами!
				</p>
			</div>
			<div className='flex justify-center'>
				<A
					href='/menu'
					text='Посмотреть меню'
					className='px-10 py-5 rounded-3xl border border-restOrange bg-restOrange text-restWhite shadow-rest focus:ring focus:ring-restOrange'
				/>
			</div>
		</section>
	);
};
