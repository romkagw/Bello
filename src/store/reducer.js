import { combineReducers } from 'redux';
import modalReducer from './modules/Modal/reducer';
import priceReducer from './modules/PriceList/reducer';
import loadingReducer from './modules/Loading/reducer';

export default combineReducers({
	modal: modalReducer,
	price: priceReducer,
	loading: loadingReducer
});
