import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from './components/Main/Main';
import ThemeProvider from '../../Provider/ThemeColorProvider';
import './home.scss';

function Home() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
