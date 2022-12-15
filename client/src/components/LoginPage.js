import React, { useState } from "react";

import HomeNavbar from "./HomeNavbar";
import LoginForm from "./LoginForm";

import "./css-files/LoginPage.css"

const LoginPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="login-page">
                <h1 className="header text-center mt-5">Packd</h1>
                <LoginForm/>
            </div>
        </div>
    );
};

export default LoginPage;