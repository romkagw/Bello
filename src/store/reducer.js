import { combineReducers } from 'redux';
import modalReducer from './modules/Modal/reducer';

export default combineReducers({
	modal: modalReducer
});
