import { combineReducers } from 'redux';
import modalReducer from './modules/Modal/reducer';
import priceReducer from './modules/PriceList/reducer';
import { belloApi } from './api/belloApi';

export default combineReducers({
	modal: modalReducer,
	price: priceReducer,
	[belloApi.reducerPath]: belloApi.reducer
});
