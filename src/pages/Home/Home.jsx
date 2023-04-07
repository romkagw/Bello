/* eslint-disable react/jsx-no-constructed-context-values */
import React, { Component } from 'react';
import './home.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import Main from './components/Main/Main';
import PriceTable from './components/PriceTable/PriceTable';
import { addPriceList } from '../../store/modules/PriceList/reducer';
import fetchData from '../../api/api';
import ThemeProvider from '../../Provider/ThemeColorProvider';

class Home extends Component {
	async componentDidMount() {
		const { getPriceList } = this.props;
		const data = await fetchData();
		getPriceList(data);
	}

	render() {
		return (
			<ThemeProvider>
				<Header />
				<Main />
				<Footer />
				<Modal>
					<PriceTable />
				</Modal>
			</ThemeProvider>
		);
	}
}

Home.propTypes = {
	getPriceList: PropTypes.func.isRequired
};
const mapDispatchToProps = {
	getPriceList: addPriceList
};

export default connect(null, mapDispatchToProps)(Home);
