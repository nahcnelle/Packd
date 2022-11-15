import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

import "./css-files/HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="text-center mt-5">Packd</h1>
            <div className="text-center">
                <LoginForm></LoginForm>
                <hr className="solid" />
                <button className="btn btn-outline-secondary text-center" size="lg">
                    <Link to="/user-signup">Create new user</Link>
                </button>
            </div>
        </div>
    );
}

export default HomePage;