import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import { Property } from "../pages";
import PropertyDetail from "../pages/PropertyDetail";
import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup.js";
import AddProperty from "../components/addproperty/AddProperty.js";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard.js";
import ClientDashboard from "../components/dashboard/client/ClientDashboard.jsx";
import PanelLayout from "../components/dashboard/client/shared/PanelLayout.jsx"
import OfferList from "../components/dashboard/client/OfferList.jsx";
import OfferHistory from "../components/dashboard/client/OfferHistory.jsx";
import SavedList from "../components/dashboard/client/SavedList.jsx";
import App from "../App.js";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<App />}>
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
