import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Createaccount from '../src/Authentication/CreateNewAccount.jsx'
import Youraccount from './Authentication/Youraccount';
import HomePage from './Authentication/HomePage';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/home">
      <HomePage/>
    </Route>
    <Route path="/login">
      <Youraccount/>
    </Route>
    <Route path="/register">
      <Createaccount />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);
