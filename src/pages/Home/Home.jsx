import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import Main from './components/Main/Main';
import PriceTable from './components/PriceTable/PriceTable';
import ThemeProvider from '../../Provider/ThemeColorProvider';
import './home.scss';

function Home() {
	const priceList = useSelector(state => state.priceList);

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
