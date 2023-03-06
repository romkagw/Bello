import React, { Component } from 'react';

import './home.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import Main from './components/Main/Main';
import PriceTable from './components/PriceTable/PriceTable';

class Home extends Component {
	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
				<Modal>
					<PriceTable />
				</Modal>
			</>
		);
	}
}

export default Home;
