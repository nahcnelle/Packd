import React, { useState } from "react";

import "./css-files/SignupPage.css"

const SignupPage = () => {
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
                console.log("username taken");
                changeVisibility(true);

                console.log("user_id", user_id)
            } catch (err) {
                console.log("username available");
                console.log(body);
                changeVisibility(false);
                // isVisible = true;

                const postResponse = await fetch("http://localhost:8000/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });

                window.location = `/trips/${body.username}`;
            }

        } catch (err) {
            console.error(err.message);
        }
    };

    const changeVisibility = async (e) => {
        setVisibility(e);
    }

    return (
        <div className="signup-page text-center">
            <h1 className="text-center mt-5">Packd</h1>
            <h3 className="signup-header">Signup</h3>
            <div className="signup-messsage d-flex">
                <p className="enter-username-text">Enter a username.</p>
                <p className="user-taken-message" style={{ visibility: isVisible ? "visible" : "hidden" }}>Username taken! Please enter another username. 🥸</p>
            </div>
            <form className="username-form d-flex mx-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-input form-control" value={username} placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                <button className="form-btn btn btn-primary">Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;