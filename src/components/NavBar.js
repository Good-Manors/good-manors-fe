import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <span>
          <Link to='/'>Home</Link>&nbsp;
          <Link to='/profile'>Profile</Link>&nbsp;
          <button onClick={() => logout()}>Log out</button>
        </span>
      )}
    </div>
  );
};

export default NavBar;


// const PrivateRoute = ({ component: Component, path, ...rest }) => {
//   const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

//   useEffect(() => {
//     if (loading || isAuthenticated) {
//       return;
//     }
//     const fn = async () => {
//       await loginWithRedirect({
//         appState: { targetUrl: path }
//       });
//     };
//     fn();
//   }, [loading, isAuthenticated, loginWithRedirect, path]);

//   const render = props =>
//     isAuthenticated === true ? <Component {...props} /> : null;

//   return <Route path={path} render={render} {...rest} />;
// };
