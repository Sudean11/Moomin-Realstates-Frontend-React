import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moominlogo from './moominlogo.png';


import './Login.css'

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { userName, password };
        // Implementation to authenticate the user and navigate
    };

    return (
        <div className="page-container">
            <div className="combined-container">
            <div className="logo-container">
            <img src={moominlogo} alt="Logo" className="login-logo" /> 
            <Link to="signup-link" className="home-page-link">Back to home page</Link>
            </div>
            <div className="login-box">
            <p className="login-title">Log In</p>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username" // Changed htmlFor value to match id for accessibility
                        placeholder="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    {/* This div could be shown conditionally based on validation */}
                    <div className="invalid-feedback">Username is required.</div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control"
                        id="password" // Changed htmlFor value to match id for accessibility
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">Password is required.</div>
                    <Link to="/forget-password"><label className="forgot-password-link">Forget password?</label></Link>
                </div>
                
                <button onClick={handleSubmit}>
                    Sign In
                </button>
                <div className="login-links">
                <p >First time? <Link to="/signup" className="signup-link" >Create an account</Link></p>
                </div>
                
            </div>
            
            </div>
        </div>
    );
};

export default Login;
