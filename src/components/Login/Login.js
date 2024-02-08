import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moominlogo from './moominlogo.png';


import './Login.css'
import { postService } from '../../services/client-api/postService';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email:userName, password };
        console.log(user);
        let result =await postService.login(user);
        if(result.data){
            const [header, payloadBase64, signature] = result.data.accessToken.split('.');
            const decodedPayload = atob(payloadBase64);
            const payload = JSON.parse(decodedPayload);
            console.log(payload)
            debugger
            if(payload.roles[0].authority == "ROLE_CUSTOMER"){
                alert("You are customer");
            }else if(payload.roles[0].authority == "ROLE_ADMIN"){
                alert("You are Admin")
            }else{
                alert('You are Owner');
            }
        }else{
            alert("wrong credentials");
        }
    };

    return (
        <div className="page-container">
            <div className="combined-container">
            <div className="logo-container">
            <img src={moominlogo} alt="Logo" className="login-logo" /> 
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
