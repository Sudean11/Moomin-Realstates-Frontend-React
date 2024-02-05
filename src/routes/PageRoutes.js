import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
