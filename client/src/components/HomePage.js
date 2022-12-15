import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import HomeNavbar from "./HomeNavbar";

import "./css-files/HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <HomeNavbar />
            <div className="header"><h1 className="text-center mt-5">Packd</h1></div>
            
            <div className="image">
                <div className="home">
                    {/* <div className="text-center"> */}
                    <div>
                        <LoginForm />
                        <hr className="solid" />
                        <div className="signup-button text-center">
                            <button className="form-btn btn btn-light">
                                <Link to="/user-signup">Create new user</Link>
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
        
    );
}

export default HomePage;