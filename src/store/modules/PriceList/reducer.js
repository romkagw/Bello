import { createSlice } from '@reduxjs/toolkit';
import fetchData from './actions';

const initialState = {
	priceList: null,
	ascendingPrice: true,
	active: false
};

const PriceSlice = createSlice({
	name: 'price',
	initialState,
	reducers: {
		setActive: state => {
			state.active = !state.active;
		},

		setAscendingPrice: state => {
			state.ascendingPrice = !state.ascendingPrice;
		},
		addPriceList: (state, actions) => {
			state.priceList = actions.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchData.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.loading = false;
				state.priceList = action.payload;
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
				console.log(state.error);
			});
	}
});

export const { setActive, addPriceList, setAscendingPrice } =
	PriceSlice.actions;
export default PriceSlice.reducer;
