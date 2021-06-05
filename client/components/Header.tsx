export const Header = () => {
	return (
		<header className='grid grid-cols-2 pt-2'>
			<div>
				<p className='text-restOrange'>Logo</p>
			</div>
			<div className='flex justify-self-end'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-7 w-7 text-restOrange'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</div>
			<nav className='col-span-2'>
				<ul>
					<li>O нас</li>
					<li>Меню</li>
					<li>Доставка</li>
					<li>Отзывы</li>
					<li>Контакты</li>
				</ul>
			</nav>
		</header>
	);
};
