import React, { Component } from 'react';

import './home.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

class Home extends Component {
	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
			</>
		);
	}
}

export default Home;
