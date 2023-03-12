import { combineReducers } from 'redux';
import modalReducer from './modules/Modal/reducer';
import priceReducer from './modules/PriseList/reducer';

export default combineReducers({
	modal: modalReducer,
	prise: priceReducer
});
