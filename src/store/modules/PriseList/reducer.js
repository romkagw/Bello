import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	priseList: null,
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
		addPriseList: (state, actions) => {
			state.priseList = actions.payload;
		}
	}
});

export const { setActive, addPriseList, setAscendingPrice } =
	PriseSlice.actions;
export default PriseSlice.reducer;
