import { memo } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrder, selectShoppingCartIsOpen } from '../../store/selectors';
import { closeShoppingCartActions } from '../../store/shoppingCart/shoppingCartActions';

export const ShoppingCatrModal = memo(() => {
	const isOpen = useSelector(selectShoppingCartIsOpen);
	const dispatch = useDispatch();

	const { order, dishesCount, totalPrice } = useSelector(selectOrder);

	const dishes = Object.keys(order).map((id) => order[id][0]);

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
			onRequestClose={() => dispatch(closeShoppingCartActions())}
			shouldCloseOnOverlayClick={true}
			onAfterClose={onAfterClose}
			onAfterOpen={onAfterOpen}>
			<p>
				{dishes.map((dish) => (
					<p>{dish.name}</p>
				))}
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
				placeat perspiciatis voluptate sequi distinctio quos quasi consectetur,
				illo aspernatur ab earum commodi hic quibusdam perferendis, ut
				consequatur eos ex inventore!
			</p>
		</Modal>
	);
});
