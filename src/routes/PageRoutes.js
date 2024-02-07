import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import { Property } from "../pages";
import PropertyDetail from "../pages/PropertyDetail";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path ="/propertyDetail"element ={<PropertyDetail/>} />
      </Routes>
    </>
  );
};

export default PageRoutes;
