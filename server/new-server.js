const api = require("iblock-verifier"); //API of the iBlock integration library
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const path = require('path');

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
  const qrObj = await api.getQR("ABC Bank");
  res.json(qrObj);

  //   res.send("QR code using iBlock API is being generated");
});

app.get("/iblock-qr-verify", async (req, res) => {
  const token = req.query.token;
  //   console.log(token);
  // get the token verified using the API and send

  const verified = await api.getTokenVerified(token, [
    "name",
    "Email",
    "DOB",
    "NIC",
    "mobile",
    "address",
  ]);

  res.json(verified);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

var PORT = process.env.PORT || 3001;

// open the server to the frontend
app.listen(PORT, () => {
  console.log(PORT);
});
