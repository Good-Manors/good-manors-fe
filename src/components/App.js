/* eslint-disable no-console */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import UserDash from '../containers/UserDash';
import Card from './Card/Card';
import '../reset.css';
import './App.css';
import HomePage from '../containers/HomePage';
import AuthPage from './auth/AuthPage';
import DrawerPage from '../containers/DrawerPage';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  if(loading) {
    return <h1>Loading...</h1>;
  }

  if(!loading && !sessionId) {
    console.log('loading: ', loading);
    console.log('sessionId:', sessionId);
    console.log('redirect');
    return <Redirect to="/auth" />;
  }

  return <Route {...rest} />;
};

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={UserDash} />
          <Route path='/card' component={Card} />
          <Route path='/auth' component={AuthPage} />
          <Route path='/cards/:homeId/:drawerId' component={DrawerPage} />
          <Route path='/home' component={HomePage} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
