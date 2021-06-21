import { FC, useCallback, useEffect } from 'react';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlertState } from '../store/selectors';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { RiErrorWarningLine } from 'react-icons/ri';
import { hideAlert } from '../store/alert/alertActions';

export const Alert: FC = memo(() => {
	const { visible, type, message } = useSelector(selectAlertState);
	const dispatch = useDispatch();

	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				dispatch(hideAlert());
			}, 4000);
		}
	}, [visible]);

	const handleClickOnAlert = useCallback(() => {
		dispatch(hideAlert());
	}, []);

	return (
		<div
			onClick={handleClickOnAlert}
			className={` ${
				visible ? 'flex animate-showAlert' : 'hidden animate-hideAlert'
			} ${
				type === 'success' ? 'bg-green-500' : 'bg-red-500'
			} fixed right-4 top-4 z-50 text-white flex items-center space-x-1 p-4 rounded-2xl`}>
			<p>
				{type === 'success' ? (
					<IoCheckmarkDoneCircleOutline className='text-xl' />
				) : (
					<RiErrorWarningLine className='text-xl' />
				)}
			</p>
			<p>{message || 'Proverka svyazi? kek'}</p>
		</div>
	);
});
