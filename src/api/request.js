import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://afternoon-sierra-63099.herokuapp.com/'
});

instance.interceptors.request.use(config => {
	return config;
});

instance.interceptors.response.use(response => {
	return response;
});

export default instance;
