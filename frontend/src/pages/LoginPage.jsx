import React from "react";
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="login-page">
            <h1>Login to CivicLoop</h1>
            <LoginForm />
            <p>No account? <Link to="/register">Register here</Link></p>
        </div>
    );
};
export default LoginPage;