import store from '../../store';
import { showLoading } from './reducer';

const setLoading = bool => {
	store.dispatch(showLoading(bool));
};

export default setLoading;
