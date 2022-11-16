const api = require("./library/api.js"); //API of the iBlock integration library
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// getting the Verifier contract loaded to the server using the api
api.loadContract().then((response) => {
  console.log("smart contract is loaded");
  console.log(response);
});
// console.log(contract["contract-address"]);

app.get("/", (req, res) => {
  res.send("ABC bank server root.");
});

app.get("/iblock-qr-generate", async (req, res) => {
  // get the QR code using the API and send to frontend
  const qr = await api.getQR("ABC Bank");
  res.json(qr);

  //   res.send("QR code using iBlock API is being generated");
});

app.get("/iblock-qr-verify", async (req, res) => {
  const token = req.query.token;
  //   console.log(token);
  // get the token verified using the API and send

  //   const possibilites = [
  //     "REJECTED",
  //     "PENDING",
  //     "{name:Akila, email:akila@iblock.com,...}",
  //   ];
  //   const verified =
  //     possibilites[Math.floor(Math.random() * possibilites.length)];

  const verified = await api.getTokenVerified(token, [
    "name",
    "Email",
    "DOB",
    "Country",
    "mobile",
    "status",
  ]);

  if (verified === "REJECTED") {
    res.send("user rejected the token " + token);
  } else if (verified === "PENDING") {
    res.send("still pending the token " + token);
  } else {
    res.json(verified);
  }
});

// open the server to the frontend
app.listen(3001, "localhost", () => {
  console.log(3001);
});
