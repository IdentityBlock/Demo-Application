import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import Home from "../pages/Home";
import QR from "../pages/QR";
import Verified from "../pages/Verified";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="qr" element={<QR />} />
        <Route path="verified" element={<Verified />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
