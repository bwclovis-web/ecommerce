import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import HomePage from './pages/Hompage';
import ShopPage from './pages/Shop';
import Login from './pages/Login'
import {auth} from './firebase/firebase.config';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log('%c [user]', 'color:purple',user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div>
        <Header user={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
