import { combineReducers } from 'redux';
import modalReducer from './modules/Modal/reducer';
import priceReducer from './modules/PriceList/reducer';

export default combineReducers({
	modal: modalReducer,
	prise: priceReducer
});
