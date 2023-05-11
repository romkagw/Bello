import axios from 'axios';
import setLoading from '../store/modules/Loading/actions';

const instance = axios.create({
	baseURL: 'https://afternoon-sierra-63099.herokuapp.com/'
});

instance.interceptors.request.use(config => {
	setLoading(true);
	return config;
});

instance.interceptors.response.use(response => {
	setLoading(false);
	return response;
});

export default instance;
