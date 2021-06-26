import { FC, memo, MouseEvent } from 'react';
import { RiHomeSmileLine } from 'react-icons/ri';
import { IoFastFoodOutline } from 'react-icons/io5';
import { IoIosClose } from 'react-icons/io';
import { FiFilter } from 'react-icons/fi';

import { A } from '../A';
import Image from 'next/image';

interface NavigationProps {
	isOpen: boolean;
	closeMenu: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const DashboardNavigation: FC<NavigationProps> = memo(
	({ isOpen, closeMenu }) => {
		return (
			<>
				<nav
					className={`${
						isOpen ? 'translate-x-0' : '-translate-x-full'
					} h-screen absolute top-0 bottom-0 left-0 bg-white transform transition-all ease-in-out p-4 pt-0 z-50`}>
					<div className='w-full flex items-center justify-between pt-2 mb-4'>
						<div className='flex items-center'>
							<Image
								src='/images/logo.png'
								alt='Ресторан Любой'
								width={50}
								height={50}
							/>
							<h2 className='font-semibold font-mono'>Ресторан Любой</h2>
						</div>
						<button
							className='focus:outline-none text-red-500 text-4xl'
							onClick={closeMenu}>
							<IoIosClose />
						</button>
					</div>
					<div className='flex flex-col justify-center items-center border-b mb-4'>
						<h2 className='text-left w-full font-light'>Панель управления</h2>
					</div>
					<ul className='flex flex-col items-center space-y-4'>
						<li className='flex flex-row items-center justify-end space-x-2 text-xl w-full pr-32 border-b pb-2'>
							<RiHomeSmileLine className='text-blue-500' />
							<span>
								<A href='/dashboard' text='Главная' />
							</span>
						</li>
						<li className='flex flex-row items-center space-x-2 text-xl w-full border-b pb-2'>
							<IoFastFoodOutline className='text-blue-500' />
							<span>
								<A href='/dashboard/dishes' text='Блюда' />
							</span>
						</li>
						<li className='flex flex-row items-center space-x-2 text-xl w-full border-b pb-2'>
							<FiFilter className='text-blue-500' />
							<span>
								<A href='/dashboard/category' text='Категории' />
							</span>
						</li>
					</ul>
				</nav>
				<span
					className={`${
						isOpen ? 'translate-x-0' : '-translate-x-full'
					} fixed top-0 bottom-0 left-0 right-0 bg-yellow-100 w-screen h-screen opacity-60 z-10 transform transition-all ease-in-out`}
					onClick={closeMenu}></span>
			</>
		);
	}
);
