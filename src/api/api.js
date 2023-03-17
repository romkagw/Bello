import instance from './request';

const fetchData = async () => {
	try {
		const response = await instance.get();
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export default fetchData;
