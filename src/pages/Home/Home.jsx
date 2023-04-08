import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPriceList } from '../../store/modules/PriceList/reducer';
import fetchData from '../../api/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import Main from './components/Main/Main';
import PriceTable from './components/PriceTable/PriceTable';
import ThemeProvider from '../../Provider/ThemeColorProvider';
import './home.scss';

function Home() {
	const priceList = useSelector(state => state.priceList);
	const dispatch = useDispatch();

	async function fetchPriceList() {
		const data = await fetchData();
		dispatch(addPriceList(data));
	}

	useEffect(() => {
		fetchPriceList();
	}, []);

	return (
		<ThemeProvider>
			<Header />
			<Main />
			<Footer />
			<Modal>
				<PriceTable priceList={priceList} />
			</Modal>
		</ThemeProvider>
	);
}

export default Home;
