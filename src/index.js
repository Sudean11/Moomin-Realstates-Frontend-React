import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { AnimatePresence } from "framer-motion";
import PageRoutes from "./routes/PageRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AnimatePresence>
          <PageRoutes/>
        </AnimatePresence>
      </Provider>
    </Router>
  </React.StrictMode>
);
