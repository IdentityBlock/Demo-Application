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

        <Route
          path="savings/qr"
          element={<QR acc_type="Savings Account" refe="/savings/verified" />}
        />
        <Route
          path="deposites/qr"
          element={<QR acc_type="Deposites" refe="/deposites/verified" />}
        />
        <Route
          path="currents/qr"
          element={<QR acc_type="Current Account" refe="/currents/verified" />}
        />
        <Route
          path="cards/qr"
          element={<QR acc_type="Cards" refe="/cards/verified" />}
        />
        <Route
          path="loans/qr"
          element={<QR acc_type="Loans" refe="/loans/verified" />}
        />

        <Route
          path="savings/verified"
          element={<Verified acc_type="Savings Account" />}
        />
        <Route
          path="deposites/verified"
          element={<Verified acc_type="Deposites" />}
        />
        <Route
          path="currents/verified"
          element={<Verified acc_type="Current Account" />}
        />
        <Route path="cards/verified" element={<Verified acc_type="Cards" />} />
        <Route path="loans/verified" element={<Verified acc_type="Loans" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
