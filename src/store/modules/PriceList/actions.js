import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../../api/request';

const fetchData = createAsyncThunk('data/fetchData', async () => {
	const response = await instance.get();
	return response.data;
});

export default fetchData;
