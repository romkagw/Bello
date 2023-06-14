import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PriceState {
	priceList: any | null;
	ascendingPrice: boolean;
	active: boolean;
}

const initialState: PriceState = {
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
		addPriceList: (state, action: PayloadAction<any>) => {
			state.priceList = action.payload;
		}
	}
});

export const { setActive, addPriceList, setAscendingPrice } =
	PriceSlice.actions;
export default PriceSlice.reducer;
