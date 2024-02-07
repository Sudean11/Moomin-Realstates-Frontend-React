import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moominlogo from '../Login/moominlogo.png';
import './signup.css'

const Signup = () => {

    const [Fistname, setFistname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Country, setCountry] = useState('');
    const [ZipCode, setZipCode] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const toggleUserType = (type) => {
        setUserType(type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        };
    }

    return (
        <div className="page-container">
            <div className="combined-container">
                <div className="logo-container">
                    <img src={moominlogo} alt="Logo" className="signup-logo" />
                    <br/>
                </div>
                <div className="signup-box">
                    <p className="signup-title">Sign Up</p>
                    <div className="d-flex justify-content-around mb-4">
                        <button
                            type="button"
                            className={`toggle-btn ${userType === 'buyer' ? 'btn-primary active' : 'btn-outline-primary'}`}
                            onClick={() => toggleUserType('buyer')}
                        >
                            Buyer
                        </button>
                        <button
                            type="button"
                            className={`toggle-btn ${userType === 'seller' ? 'btn-primary active' : 'btn-outline-primary'}`}
                            onClick={() => toggleUserType('seller')}
                        >
                            Seller
                        </button>
                    </div>
                    {userType && (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Fistname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={Fistname}
                                    onChange={(e) => setFistname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Lastname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={Lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                                    <div className="row">
                                        <div className="form-group mb-3">
                                            <label className="form-label">City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={City}
                                                onChange={(e) => setCity(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">State</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={State}
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={Country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Zip</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={ZipCode}
                                                onChange={(e) => setZipCode(e.target.value)}
                                                required
                                            />
                                        </div>
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
