
import './App.css';
import Home from './components/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewsInfo from './components/NewsInfo/NewsInfo';
import Admin from './components/Admin/Admin';
import AddNews from './components/AddNews/AddNews';
import Signin from './components/Signin/Signin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});
  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/newsInfo/:id">
            <NewsInfo></NewsInfo>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addNews">
            <AddNews></AddNews>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
