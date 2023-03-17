import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	priceList: null,
	ascendingPrice: true,
	active: false
};

const PriseSlice = createSlice({
	name: 'prise',
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
	PriseSlice.actions;
export default PriseSlice.reducer;
