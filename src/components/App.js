import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import UserDash from '../containers/UserDash';
import Card from './Card';
import Home from './Home';
import '../reset.css';
import './App.css';
import DrawerDetail from '../containers/DrawerDetail';
import AuthPage from './auth/AuthPage';

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
          <Route path='/home' component={Home} />
          <Route path='/drawers' component={DrawerDetail} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
