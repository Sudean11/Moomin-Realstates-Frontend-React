import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import { Property } from "../pages";
import PropertyDetail from "../pages/PropertyDetail";
import Login from "../components/Login/Login"
import Signup from "../components/signup/Signup.js"
import AddProperty from "../components/addproperty/AddProperty.js";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard.jsx";
import OwnerDashboard from "../components/dashboard/owner/OwnerDashboard.jsx";



const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path ="/propertyDetail/:id"element ={<PropertyDetail/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={ <Signup/>} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/admin-dashboard" element ={ <AdminDashboard/>}/>
        <Route path="/owner-dashboard" element ={ <OwnerDashboard/>}/>
      </Routes>
    </>
  );
};

export default PageRoutes;
