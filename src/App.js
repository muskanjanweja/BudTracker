import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Routes,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Profile from './Components/Pages/Profile/Profile';
import Project from './Components/Pages/Project/Project';
import Notification from './Components/Pages/Notification/Notification';
import Navbar from './Components/Navbar/Navbar'

import Login from './Components/Login/Login';
function App() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/Home"><Home/></Route>
        <Route  path="/Profile"><Profile/></Route>
        <Route  path="/Project"><Project/></Route>
        <Route  path="/Notification"><Notification/></Route>
      <Route path="/Login"  >
      <Login/> 
      </Route>

      </Switch>
      
    </Routes>
      
  )
}

export default App;
