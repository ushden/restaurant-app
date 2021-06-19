import { A } from './A';
import Image from 'next/image';
import { FC, useState } from 'react';
import { MenuBurger } from './svg/MenuBurger';
import { Close } from './svg/Close';
import { IconContext } from 'react-icons';
import { HiPhoneOutgoing } from 'react-icons/hi';
import { ShoppingCart } from './shopping-cart/ShoppingCart';

export const Header: FC = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	return (
		<header className='flex flex-wrap flex-row justify-between items-center md:space-x-4 relative px-2 lg:px-20 md:p-2 mb-3'>
			<div className='flex items-center'>
				<Image
					width={70}
					height={70}
					src='/images/logo.png'
					alt='Themes.dev Logo'
				/>
				<span className='text-xl font-medium text-restDark font-serif'>
					Ресторан Любой
				</span>
			</div>
			<button
				className='inline-block md:hidden w-8 h-8 outline-none focus:outline-none'
				onClick={() => setMenuVisible((visible) => !visible)}>
				{menuVisible ? <Close /> : <MenuBurger />}
			</button>
			<nav
				className={`absolute ${
					menuVisible ? 'flex' : 'hidden'
				} md:relative top-16 left-0 md:top-0 z-50 bg-restWhite md:bg-restBg md:flex flex-col md:flex-row md:justify-between md:items-center font-semibold w-full bg-white shadow-md rounded-lg p-3 md:w-auto md:rounded-none md:shadow-none md:p-0`}>
				<ul className='text-center md:flex md:flex-row md:space-x-6'>
					<li className='pb-2 hover:text-yellow-500 transition'>
						<A
							href='/'
							text='О нас'
							className='hover:text-yellow-500 transition'
						/>
					</li>
					<li className='pb-2'>
						<A
							href='/menu'
							text='Меню'
							className='hover:text-yellow-500 transition'
						/>
					</li>
					<li className='pb-2'>
						<A
							href='/'
							text='Доставка'
							className='hover:text-yellow-500 transition'
						/>
					</li>
					<li className='pb-2'>
						<A
							href='/'
							text='Отзывы'
							className='hover:text-yellow-500 transition'
						/>
					</li>
					<li className='pb-2'>
						<A
							href='/'
							text='Контакты'
							className='hover:text-yellow-500 transition'
						/>
					</li>
				</ul>
			</nav>
			<div className='hidden md:block'>
				<ShoppingCart />
			</div>
			<div className='hidden md:block'>
				<div className='flex items-center'>
					<IconContext.Provider
						value={{ className: 'text-yellow-500 text-xl' }}>
						<HiPhoneOutgoing />
					</IconContext.Provider>
					<a href='tel:0977637155' className='font-semibold ml-1'>
						+38 097 763 71 55
					</a>
				</div>
				<p className='text-right'>Позвони нам</p>
			</div>
		</header>
	);
};
