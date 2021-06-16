import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { clearOrederAction } from '../../store/order/orderActions';
import { closeShoppingCartAction } from '../../store/shoppingCart/shoppingCartActions';
import { selectDishesCount, selectTotalPrice } from '../../store/selectors';

export const ShoppingCartModalHeader = () => {
	const dispatch = useDispatch();
	const dishesCount = useSelector(selectDishesCount);
	const totalPrice = useSelector(selectTotalPrice);

	return (
		<div>
			<div className='flex items-center justify-between mb-4 border-b border-gray-200 pb-4'>
				<h3 className='font-semibold text-xl md:text-4xl flex items-center'>
					<FiShoppingCart className='mr-2' /> Корзина
				</h3>
				<button
					className='outline-none focus:outline-none text-3xl text-red-500'
					onClick={() => dispatch(closeShoppingCartAction())}>
					<AiOutlineClose />
				</button>
			</div>
			<div className='flex justify-between mb-2'>
				<div>
					<p>
						Всего позиций: <span className='font-semibold'>{dishesCount}</span>
					</p>
					<p className='break-words'>
						Общая сумма:{' '}
						<span className='font-semibold text-yellow-500 block'>
							{totalPrice + ' грн'}
						</span>
					</p>
				</div>
				<button
					className='outline-none focus:outline-none font-light flex items-center'
					onClick={() => dispatch(clearOrederAction())}>
					<AiOutlineDelete className='mr-1' /> Очистить корзину
				</button>
			</div>
		</div>
	);
};
