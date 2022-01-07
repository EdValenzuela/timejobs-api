import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'

import Beer from './components/Main';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Beer />
      <Footer/>
    </Provider>
  );
}

export default App;
