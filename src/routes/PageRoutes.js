import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import { Property } from "../pages";
import PropertyDetail from "../pages/PropertyDetail";
import OwnerDashboard from "../components/dashboard/owner/OwnerDashboard.jsx";
import PropertiesTable from "../components/dashboard/admin/PropertiesTable.jsx";
import Offers from "../components/dashboard/owner/Offers.jsx";
import Users from "../components/dashboard/admin/Users.jsx";


import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup.js";
import AddProperty from "../components/addproperty/AddProperty.js";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard.js";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<App />}>
        <Route path="/User" element={<Users/>}/>
        <Route path="/offers" element ={<Offers/>}/>
        <Route path="/propertiesTable" element ={<PropertiesTable/>}/>
        <Route path="/owner-dashboard" element ={ <OwnerDashboard/>}/>
        <Route path ="/propertyDetail/:id"element ={<PropertyDetail/>} />


          <Route index element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/propertyDetail" element={<PropertyDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/client" element={<PanelLayout />}>
          <Route index element={<ClientDashboard />}/>
          <Route path="offerList" element={<OfferList />}/>
          <Route path="offerHistory" element={<OfferHistory />}/>
          <Route path="savedList" element={<SavedList />}/>
        </Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
