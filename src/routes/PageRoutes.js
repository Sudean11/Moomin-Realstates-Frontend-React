import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import { Property } from "../pages";
import PropertyDetail from "../pages/PropertyDetail";
import Login from "../components/Login/Login"
import Signup from "../components/signup/Signup.js"
import AddProperty from "../components/dashboard/owner/addproperty/AddProperty.js";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard.jsx";
import OwnerDashboard from "../components/dashboard/owner/OwnerDashboard.jsx";
import PropertiesTable from "../components/dashboard/admin/PropertiesTable.jsx";
import Offers from "../components/dashboard/owner/Offers.jsx";
import Users from "../components/dashboard/admin/Users.jsx";



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
        <Route path="/propertiesTable" element ={<PropertiesTable/>}/>
        <Route path="/offers" element ={<Offers/>}/>
        <Route path="/User" element={<Users/>}/>
      </Routes>
    </>
  );
};

export default PageRoutes;
