import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
// import Youraccount from './Authentication/Youraccount';
// import HomePage from './Authentication/HomePage';
// import RegisterAccount from './Authentication/RegisterAccount';
import Inbox from './Inbox/Inbox';

ReactDOM.render(
  <Inbox/>,
  document.getElementById('root')
);
{/* <BrowserRouter>
    <Route path="/home">
      <HomePage/>
    </Route>
    <Route path="/login">
      <Youraccount/>
    </Route>
    <Route path="/register">
      <RegisterAccount/>
    </Route>
  </BrowserRouter>, */}