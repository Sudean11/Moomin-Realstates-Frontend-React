import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./App.css"

import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import NewsLetter from "./components/common/NewsLetter";
import Loader from "./components/common/Loader";
import PageRoutes from "./routes/PageRoutes";


import AdminDashboard from "./components/dashboard/admin/AdminDashboard.jsx";
import Sidebar from "./components/dashboard/admin/Sidebar.jsx";
import Header from "./components/dashboard/Header.jsx";
import OwnerDashboard from "./components/dashboard/owner/OwnerDashboard.jsx";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);


  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });


  
  return (
    <div>

      {showLoader && <Loader />}
      <Navbar />
      <Dropdown />
      <div
        className="min-h-screen pb-40"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <PageRoutes />
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <NewsLetter />
        <div className="mt-20">
          <Footer />
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );

}

export default App;
