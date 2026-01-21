import React  from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const submitLogin = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <form className="login-form">
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" onClick={submitLogin}>Login</button>
        </form>
    );
};
export default LoginForm;