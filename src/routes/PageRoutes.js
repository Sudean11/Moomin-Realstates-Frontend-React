import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import { Property } from "../pages";
import PropertyDetail from "../pages/PropertyDetail";
import PropertiesTable from "../components/dashboard/admin/PropertiesTable.jsx";
import Users from "../components/dashboard/admin/Users.jsx";
import AddProperty from "../components/dashboard/owner/addproperty/AddProperty.js";
import App from "../App.js";
import PanelLayout from "../components/dashboard/client/shared/PanelLayout.jsx";
import ClientDashboard from "../components/dashboard/client/ClientDashboard.jsx";

import OfferHistory from "../components/dashboard/client/OfferHistory.jsx";
import SavedList from "../components/dashboard/client/SavedList.jsx";

import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup.js";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard.jsx";
import AdminPanelLayout from "../components/dashboard/admin/shared/AdminPanelLayout.jsx";
import UserMessage from "../components/dashboard/owner/UserMessage.jsx";
import MessageBox from "../components/dashboard/owner/MessageBox.jsx";
import OwnerPanelLayout from "../components/dashboard/owner/shared/OwnerPanelLayout.jsx";
import OwnerHome from "../components/dashboard/owner/OwnerHome.jsx";
import Offers from "../components/dashboard/client/Offers.jsx";
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home />} />
          <Route path="/User" element={<Users />} />
          <Route path="/propertiesTable" element={<PropertiesTable />} />

          <Route path="/propertyDetail/:id" element={<PropertyDetail />} />
          <Route path="/message-user" element={<UserMessage />} />

          <Route path="/property" element={<Property />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/admin" element={<AdminPanelLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="user" element={<Users />} />
          <Route path="properties" element={<PropertiesTable />} />
        </Route>

        <Route path="/client" element={<PanelLayout />}>
          <Route index element={<ClientDashboard />} />
          <Route path="offerHistory" element={<OfferHistory />} />
          <Route path="savedList" element={<SavedList />} />
          <Route path="offers" element={<Offers/>} />

        </Route> 

        <Route path="/owner-dashboard" element={<OwnerPanelLayout/>}>
          <Route index element={<OwnerHome />} />
          <Route path="offerHIstory" element={<SavedList/>} />
          <Route path="addProperty" element={<AddProperty />} />
          <Route path="userMessage" element={<UserMessage />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
