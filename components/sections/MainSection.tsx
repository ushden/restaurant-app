import { A } from '../A';
import Image from 'next/image';

export const MainScreen = () => {
	return (
		<section className='flex justify-between items-center mb-10 px-2 lg:px-20 md:p-2'>
			<div>
				<div className='mb-10'>
					<h2 className='font-bold text-4xl mb-5 lg:text-5xl'>
						Доставка любимой кухни прямо к Вам домой
					</h2>
					<p className='text-lg'>
						Самое большое разнообразие различных блюд приготовленых лучшими
						поварами!
					</p>
				</div>
				<div className='flex justify-center lg:justify-start'>
					<A
						href='/menu'
						text='Посмотреть меню'
						className='px-10 py-5 hover:opacity-90 rounded-3xl text-white shadow-lg focus:ring focus:ring-yellow-600 hover:ring hover:ring-yellow-400 bg-yellow-500 transition-all'
					/>
				</div>
			</div>
			<div className='hidden md:flex'>
				<Image src='/images/header-bg-img.png' width={800} height={800} />
			</div>
		</section>
	);
};
