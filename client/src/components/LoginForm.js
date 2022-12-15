import React, { useState } from "react";

import HomeNavbar from "./HomeNavbar";

import "./css-files/LoginForm.css"

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [isVisible, setVisibility] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { username };
            console.log("body", body);
            
            const getResponse = await fetch(`http://localhost:8000/users/username/${username}`);
            console.log("get", getResponse);

            // const user_id = "";
            try {
                const user_id = await getResponse.json();
                console.log("valid username");
                changeVisibility(false);

                console.log("user_id", user_id)
                console.log(typeof(user_id))

                window.location = `/trips/${user_id.user_id}`;
            } catch (err) {
                console.log("invalid username");
                console.log(body);
                changeVisibility(true);
                // isVisible = true;

                // const postResponse = await fetch("http://localhost:8000/users", {
                //     method: "POST",
                //     headers: { "Content-Type": "application/json" },
                //     body: JSON.stringify(body)
                // });
            }

        } catch (err) {
            console.error(err.message);
        }
    };

    const changeVisibility = async (e) => {
        setVisibility(e);
    }

    return (
        <div>
            <HomeNavbar />
            <div className="login-form">
                <h3 className="text-center login-header">Login</h3>
                <div className="login-messsage d-flex">
                    <p className="enter-username-text">Enter a username.</p>
                    <p className="user-taken-message" style={{ visibility: isVisible ? "visible" : "hidden" }}>User does not exist 😳</p>
                </div>
                <form className="username-form  d-flex mx-5" onSubmit={onSubmitForm}>
                    <input type="text" className="form-input form-control" value={username} placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                    <button className="form-btn btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;