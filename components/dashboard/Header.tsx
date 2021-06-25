import Image from 'next/image';
import { useState, MouseEvent } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { DashboardNavigation } from './Navigation';

export const DashboardHeader = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setIsOpen((visible) => !visible);
	};

	return (
		<header className='p-2 bg-blue-700 flex justify-between items-center relative'>
			<div>
				<button
					className='focus:outline-none text-white text-3xl'
					onClick={handleClickMenu}>
					<AiOutlineMenuUnfold />
				</button>
			</div>
			<div>
				<Image
					src='/images/default-avatar.png'
					alt='user name'
					width={40}
					height={40}
				/>
			</div>
			<DashboardNavigation isOpen={isOpen} closeMenu={handleClickMenu} />
		</header>
	);
};
