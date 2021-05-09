import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/login/Login';
import Home from './components/home/Home';
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/login/SignupPage'
import { login, logout, selectUser } from './features/userSlice';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <Router>
      <div className="app">
        <Switch>
          {!user ? ( 
            <Route exact path='/'>
              <Login />
            </Route>
          ) : (
            <Route path='/home'>
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
