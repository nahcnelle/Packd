import React, { Component } from "react";
// react router used throughout the project to route to different pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import TripPage from './components/trip-page-components/TripPage';
import HomePage from "./components/HomePage";
import ListPage from "./components/list-page-components/ListPage";
import GeneralLists from "./components/gen-list-components/GeneralLists";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import GenListAddToTrip from "./components/list-page-components/GenListAddToTrip";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                
                <Router>
                    <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/trips/user=:user_id" element={<TripPage/>} />
                    <Route path="/list/user=:user_id&trip=:trip_id" element={<ListPage/>}/>
                    <Route path="/gen-list/user=:user_id" element={<GeneralLists/>}/>
                    <Route path="/trip-add-gen/user=:user_id&trip=:trip_id" element={<GenListAddToTrip/>}/>
                    <Route path="/user-login" element={<LoginPage/>}/>
                    <Route path="/user-signup" element={<SignupPage/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }

}

