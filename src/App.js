import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import HomePage from './pages/Hompage';
import ShopPage from './pages/Shop';
import Login from './pages/Login'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
