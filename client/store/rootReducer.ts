import { alertReducer } from './alert/alertReducer';
import { orderReducer } from './order/orderReducer';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shoppingCartReducer } from './shoppingCart/shoppingCartReducer';

const rootReducer = combineReducers({
	order: orderReducer,
	shoppingCart: shoppingCartReducer,
	alert: alertReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
