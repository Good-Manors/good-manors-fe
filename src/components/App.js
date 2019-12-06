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
import SignupUser from '../containers/SignupUser';
import LoginUser from '../containers/LoginUser';

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
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

function App() {

  return (
    <div className="App">
      <Router>
        <PrivateRoute exact path='/' component={UserDash} />
        <Switch>
          <Route path='/card' component={Card} />
          <Route path="/login" component={LoginUser} />
          <Route path="/signup" component={SignupUser} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
