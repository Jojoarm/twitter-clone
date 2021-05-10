import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/login/Login';
import Home from './components/home/Home';
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/login/SignupPage'
import { login, logout, selectUser } from './features/userSlice';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //User is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          {!user ? ( 
            <Route exact path='/'>
              <Login />
            </Route>
          ) : (
            <Route exact path='/'>
              <Home />
            </Route>
          )}
            <Route path='/login-page'>
              <LoginPage />
            </Route>
            <Route path='/signup-page'>
              <SignupPage />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
