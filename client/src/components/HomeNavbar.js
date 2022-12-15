import React from "react";

const HomeNavbar = ( ) => {
    return (
        <nav className="navbar navbar-expand-sm bg-light fixed-top">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/user-login"}>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/user-signup"}>Signup</a>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default HomeNavbar;
