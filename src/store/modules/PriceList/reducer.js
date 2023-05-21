import { createSlice } from '@reduxjs/toolkit';

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
	}
});

export const { setActive, addPriceList, setAscendingPrice } =
	PriceSlice.actions;
export default PriceSlice.reducer;
