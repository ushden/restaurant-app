import { memo } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { selectOrder, selectShoppingCartIsOpen } from '../../store/selectors';
import { closeShoppingCartAction } from '../../store/shoppingCart/shoppingCartActions';
import { ShoppingCartDish } from './ShoppingCartDish';
import { ShoppingCartModalHeader } from './ShoppingCartModalHeader';

export const ShoppingCatrModal = memo(() => {
	const isOpen = useSelector(selectShoppingCartIsOpen);
	const dispatch = useDispatch();

	const { order } = useSelector(selectOrder);

	const dishes = Object.keys(order).map((id) => order[id]);

	const onAfterClose = () => {
		window.document.body.style.overflow = 'auto';
	};

	const onAfterOpen = () => {
		window.document.body.style.overflow = 'hidden';
	};

	return (
		<Modal
			ariaHideApp={false}
			isOpen={isOpen}
			shouldCloseOnEsc={true}
			onRequestClose={() => dispatch(closeShoppingCartAction())}
			shouldCloseOnOverlayClick={true}
			className='absolute top-0 bottom-0 left-auto right-auto z-50 md:-translate-x-2/4 md:-translate-y-2/4 bg-white p-2 overflow-y-auto w-full md:w-3/5 animate-showCart'
			onAfterClose={onAfterClose}
			onAfterOpen={onAfterOpen}>
			<ShoppingCartModalHeader />
			{dishes.length === 0 && (
				<p className='w-full text-center my-4'>Корзина пуста</p>
			)}
			{dishes.map((dish) => (
				<ShoppingCartDish
					dish={dish[0]}
					dishCount={dish.length}
					key={dish[0]?._id}
				/>
			))}
			{dishes.length === 0 ? null : (
				<div className='flex justify-center'>
					<button className='px-10 py-3 bg-yellow-500 rounded-2xl text-white shadow-xl focus:ring focus:ring-yellow-400 hover:ring'>
						Оформить заказ
					</button>
				</div>
			)}
		</Modal>
	);
});
