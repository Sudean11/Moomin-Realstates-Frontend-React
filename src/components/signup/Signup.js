<<<<<<< HEAD
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moominlogo from '../Login/moominlogo.png';
import './signup.css'
import { postService } from '../../services/client-api/postService';
=======
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moominlogo from "../Login/moominlogo.png";
import "./signup.css";
>>>>>>> 4eb76af8075e656a6d0b15dc985b4540f34ba4fa

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const toggleUserType = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        };

        const userData = {
            firstName: Fistname,
            lastName: Lastname,
            email: Email,
            password: password,
            confirmPassword: confirmPassword,
            phoneNumber: phoneNumber,
            city: City,
            state: State,
            country: Country,
            zipCode: ZipCode,
            userType: userType
          };

          postService.createUser(userData);
          navigate("/login");
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address: {
        city,
        state,
        country,
        zipCode,
      },
      userType,
    };

    try {
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("User registered successfully!");
        navigate("/login");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="page-container">
      <div className="combined-container">
        <div className="logo-container">
          <img src={moominlogo} alt="Logo" className="signup-logo" />
          <br />
        </div>
        <div className="signup-box">
          <p className="signup-title">Sign Up</p>
          <div className="d-flex justify-content-around mb-4">
            <button
              type="button"
              className={`toggle-btn ${
                userType === "buyer"
                  ? "btn-primary active"
                  : "btn-outline-primary"
              }`}
              onClick={() => toggleUserType("buyer")}
            >
              Buyer
            </button>
            <button
              type="button"
              className={`toggle-btn ${
                userType === "seller"
                  ? "btn-primary active"
                  : "btn-outline-primary"
              }`}
              onClick={() => toggleUserType("seller")}
            >
              Seller
            </button>
          </div>
          {userType && (
            <form onSubmit={handleSubmit}>
              {/* Form inputs */}
              <button type="submit" className="btn btn-success w-100">
                Sign Up
              </button>
            </form>
          )}
          <div className="signup-links">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
