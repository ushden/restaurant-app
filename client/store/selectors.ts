import { RootState } from './rootReducer';

export const selectTotalPrice = (state: RootState) => state.order.totalPrice;
export const selectDishesCount = (state: RootState) => state.order.dishesCount;
export const selectOrder = (state: RootState) => state.order;