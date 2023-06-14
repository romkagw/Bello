import { RootState } from '../../reducer';

export const selectPriceList = (state: RootState) => state.price.priceList;
export const selectActive = (state: RootState) => state.price.active;
export const selectAscendingPrice = (state: RootState) =>
	state.price.ascendingPrice;
