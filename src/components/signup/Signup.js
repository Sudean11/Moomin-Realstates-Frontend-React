import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moominlogo from '../Login/moominlogo.png';
import './signup.css'

const Signup = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation checks here
        // If all checks pass, proceed with the signup process
    };

    return (
        <div className="page-container">
            <div className="combined-container">
            <div className="logo-container">
                    <img src={moominlogo} alt="Logo" className="signup-logo" />
                    <p><Link to="/" className="home-page-link">Back to home page</Link></p>
                </div>
                <div className="signup-box">
                <p className="signup-title">Sign Up</p>
                    <div className="d-flex justify-content-around mb-4">
                                <button
                                    type="button"
                                    className={`btn ${userType === 'buyer' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setUserType('buyer')}
                                >
                                    Buyer
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${userType === 'seller' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setUserType('seller')}
                                >
                                    Seller
                                </button>
                    </div>
                    {userType && (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {userType === 'buyer' && (
                                        <>
                                            <div className="mb-3">
                                                <label className="form-label">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </>
                                    )}
                                    <button type="submit" className="btn btn-success w-100">
                                        Sign Up
                                    </button>
                                </form>
                            )}
                    <div className="signup-links">
                        <p>Already have an account? <Link to="/login" className="login-link">Log in</Link></p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Signup;
