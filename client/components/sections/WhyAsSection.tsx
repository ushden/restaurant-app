import { GiDeliveryDrone, GiFoodChain, GiCook } from 'react-icons/gi';
import { FaShoppingBag } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const WhyAs = () => {
	return (
		<IconContext.Provider
			value={{ className: 'text-5xl text-yellow-500 mb-2' }}>
			<section className='grid grid-cols-2 gap-5 text-center md:grid-cols-4 mb-7 px-2 lg:px-20 md:p-2'>
				<div className='flex flex-col items-center'>
					<GiDeliveryDrone />
					<p>Бесплатная доставка от 499 грн</p>
				</div>
				<div className='flex flex-col items-center'>
					<FaShoppingBag />
					<p>Заберите самовывозом с ресторана</p>
				</div>
				<div className='flex flex-col items-center'>
					<GiCook />
					<p>Лучшие повара города</p>
				</div>
				<div className='flex flex-col items-center'>
					<GiFoodChain />
					<p>Всегда свежайшие продукты</p>
				</div>
			</section>
		</IconContext.Provider>
	);
};
