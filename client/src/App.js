import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import TripPage from './components/trip-page-components/TripPage';
import HomePage from "./components/HomePage";
import ListPage from "./components/list-page-components/ListPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/trips" element={<TripPage/>} />
          <Route path="/list/:trip_id" element={<ListPage/>}/>
        </Routes>
      </Router>
    );
  }

}

