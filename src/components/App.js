import React from 'react';
import UserDash from '../containers/UserDash';
import NavBar from './NavBar';
import { useAuth0 } from '../react-auth0-spa';
import { Router, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import history from '../utils/history';
import PrivateRoute from './PrivateRoute';

function App() {
  const { loading } = useAuth0();

  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <UserDash />
        <Switch>
          <Route path='/' exact />
          <PrivateRoute path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
