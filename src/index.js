import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Convertisseur from "./components/convertisseur";
import NotFound from "./components/404";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Convertisseur />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </>
);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
