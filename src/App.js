import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import Header from './components/Header';
import HomePage from './pages/Hompage';
import ShopPage from './pages/Shop';
import Login from './pages/Login'
import {auth, createUserProfile} from './firebase/firebase.config';
import {setCurrentUser} from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/login' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Login/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
   return {
    currentUser: user.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
