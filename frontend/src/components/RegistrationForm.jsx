import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate = useNavigate();

    const submitRegistration = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <form className="registration-form">
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit" onClick={submitRegistration}>Register</button>
        </form>
    );
};

export default RegistrationForm;