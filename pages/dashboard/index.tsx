import { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dashboard } from '../../components/dashboard/Dashboard';
import { LoginForm } from '../../components/dashboard/LoginForm';
import { Loader } from '../../components/Loader';
import { showAlert } from '../../store/alert/alertActions';
import { selectIsAuth, selectUserLoading } from '../../store/selectors';
import { checkAuth, loginAdmin } from '../../store/user/userActions';
import { AlertTypes } from '../../types';

const AdminLogin = () => {
	const dispatch = useDispatch();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const isAuth = useSelector(selectIsAuth);
	const loading = useSelector(selectUserLoading);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(checkAuth());
		}
	}, []);

	const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.currentTarget.value);
	};

	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handleClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (login.trim() === '' || password.trim() === '') {
			return dispatch(showAlert(AlertTypes.error, 'Заполните все поля!'));
		}

		dispatch(loginAdmin(login, password));
	};

	if (loading) {
		return <Loader w={24} h={24} />;
	}

	return (
		<>
			{isAuth ? (
				<Dashboard />
			) : (
				<LoginForm
					handleChangeLogin={handleChangeLogin}
					handleChangePassword={handleChangePassword}
					handleClickSubmit={handleClickSubmit}
					login={login}
					password={password}
				/>
			)}
		</>
	);
};

export default AdminLogin;
