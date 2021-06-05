import { A } from './A';
import Image from 'next/image';
import { FC, useState } from 'react';
import { MenuBurger } from './svg/MenuBurger';
import { Close } from './svg/Close';

export const Header: FC = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	return (
		<header className='flex flex-wrap flex-row justify-between items-center md:space-x-4 relative md:p-2 mb-3'>
			<div className='flex items-center'>
				<Image
					width={70}
					height={70}
					src='/images/logo.png'
					alt='Themes.dev Logo'
				/>
				<span className='text-xl font-medium text-restDark font-serif'>
					Ресторан Веранда
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
				} md:relative top-16 left-0 md:top-0 z-99 bg-restWhite md:bg-restBg md:flex flex-col font-semibold w-full bg-white shadow-md rounded-lg p-3 md:w-auto md:rounded-none md:shadow-none md:p-0`}>
				<ul className='text-center md:flex md:flex-row md:space-x-6'>
					<li className='pb-2'>
						<A href='/' text='О нас' />
					</li>
					<li className='pb-2'>
						<A href='/' text='Меню' />
					</li>
					<li className='pb-2'>
						<A href='/' text='Доставка' />
					</li>
					<li className='pb-2'>
						<A href='/' text='Отзывы' />
					</li>
					<li className='pb-2'>
						<A href='/' text='Контакты' />
					</li>
				</ul>
			</nav>
		</header>
	);
};
