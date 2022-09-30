import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import QR from "../pages/QR";
import Verified from "../pages/Verified";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="savings/qr" element={<QR acc_type="Savings Account" />} />
        <Route path="deposites/qr" element={<QR acc_type="Deposites" />} />
        <Route path="currents/qr" element={<QR acc_type="Current Account" />} />
        <Route path="cards/qr" element={<QR acc_type="Cards" />} />
        <Route path="loans/qr" element={<QR acc_type="Loans" />} />

        <Route path="verified" element={<Verified />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
