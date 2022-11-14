import React, { useState } from "react";

// import "../css-files/TripAddInput.css"

const LoginForm = () => {
    const [username, setUsername] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { username };
            console.log(body);
            

            const getResponse = await fetch(`http://localhost:8000/users/username/${username}`);
            const jsonData = await getResponse.json();

            console.log(jsonData);

            // const postResponse = await fetch("http://localhost:8000/users", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(body)
            // });

            // window.location = `/trips/${user_id}`;

            // console.log(response);
            // const data = await response.json();
            // console.log(data);
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <div>
            <h3 className="text mx-5">Signup</h3>
            <p style={{ visibility: true ? "visible" : "hidden" }}>Username taken</p>
            <form className="d-flex mx-5" onSubmit={onSubmitForm}>
                <input type="text" className="form form-control" value={username} placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                <button className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
};

export default LoginForm;