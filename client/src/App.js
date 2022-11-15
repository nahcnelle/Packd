import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import TripPage from './components/trip-page-components/TripPage';
import HomePage from "./components/HomePage";
import ListPage from "./components/list-page-components/ListPage";
import LoginForm from "./components/LoginForm";
import SignupPage from "./components/SignupPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/trips/:user_id" element={<TripPage/>} />
          <Route path="/list/:trip_id" element={<ListPage/>}/>
          <Route path="/user-login" element={<LoginForm/>}/>
          <Route path="/user-signup" element={<SignupPage/>}/>
        </Routes>
      </Router>
    );
  }

}

