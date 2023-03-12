import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://afternoon-sierra-63099.herokuapp.com/'
});

export default instance;
