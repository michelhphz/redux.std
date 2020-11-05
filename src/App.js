import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

import './index.css'
import Routes from './routes'
import Header from './components/Header'
import store from './store'
import history from './services/history'

function App() 
{
  return (
    <Provider store={store}>
      <Router store={history}>
        <Header/>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
