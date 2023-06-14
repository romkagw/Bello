import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
	isModalVisible: boolean;
}

const initialState: ModalState = {
	isModalVisible: false
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: state => {
			state.isModalVisible = true;
		},
		hideModal: state => {
			state.isModalVisible = false;
		}
	}
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
