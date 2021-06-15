import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css'

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import { FriendForm } from './components/FriendForm';
import { FriendList } from './components/FriendList';
//import axiosWithAuth from './utility/axiosWithAuth';

function App(props) {
  const logout = () => {
    // const token = localStorage.getItem("token")
    /*  No logout function on server */
    localStorage.removeItem("token");
    window.location.href = "/login";
    // axiosWithAuth()
    //   .post("/api/logout")
    //   .then(res => {
    //     localStorage.removeItem("token");
    //     window.location.href = "/login";
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
  };

  const isAuth = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <ul className="nav-list">
          {!isAuth ? <li><Link to="/login">Login</Link></li> : <span></span>}

          {isAuth ? <li><Link to="/friendform">Add Friend</Link></li> : <div></div>}
          
          {isAuth ? <li><Link to="/friendlist">Friends List</Link></li> : <div></div>}
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/friendform" component={FriendForm} />
          <PrivateRoute exact path="/friendlist" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
