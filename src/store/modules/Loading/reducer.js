import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		showLoading: (state, action) => {
			state.loading = action.payload;
		}
	}
});

export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
