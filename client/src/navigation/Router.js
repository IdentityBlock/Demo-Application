import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import QR from "../pages/QR";
import Verified from "../pages/Verified";

const Router = () => {
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="savings/qr"
          element={<QR acc_type="Savings Account" setUserData={setUserData} />}
        />
        <Route
          path="deposites/qr"
          element={<QR acc_type="Deposites" setUserData={setUserData} />}
        />
        <Route
          path="currents/qr"
          element={<QR acc_type="Current Account" setUserData={setUserData} />}
        />
        <Route
          path="cards/qr"
          element={<QR acc_type="Cards" setUserData={setUserData} />}
        />
        <Route
          path="loans/qr"
          element={<QR acc_type="Loans" setUserData={setUserData} />}
        />

        <Route
          path="/verified"
          element={<Verified acc_type="Savings Account" userData={userData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
