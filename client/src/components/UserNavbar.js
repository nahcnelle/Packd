import React from "react";

const UserNavbar = ( {user_id} ) => {
    return (
        <nav className="navbar navbar-expand-sm bg-light fixed-top">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={`/trips/user=${user_id}`}>Trips</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={`/gen-list/user=${user_id}`}>General Lists</a>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default UserNavbar;
