const api = require("./library/api.js");
const express = require("express");
const app = express();

const http = require("http").Server(app);

const cors = require("cors");
const { request } = require("http");

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//const io = require('socket.io') (http);

//app.use(express.urlencoded({extended : true}));
app.use(cors());
//app.use(express.json());

/*const reqst = io.of("/reqst");

reqst.on("request", (data) => {
    console.log("Connected");
    console.log(data);
});*/

app.get("/reqst", (req, res) => {
  console.log("reqst");
  res.send("reqst");
});

app.get("/", (req, res) => {
  console.log("Home");
  res.send("Home");
});

io.on("connection", (socket) => {
  console.log("connected-reqst");
  socket.on("request", (info) => {
    api
      .request(info[0], info[1], (err, qr) => {
        console.log(qr);
        socket.emit("qr", qr);
      })
      .then((data) => {
        socket.emit("data", data);
        console.log(data);
      });
    console.log(info);
  });
});

/*io.on("request", (socket) => {
    console.log("connected-reqst");
})*/

// getting the Verifier contract loaded to the server using the api
contract = api.loadContract();

contract.then((c) => {
  const contractAddress = c["contract-address"];
  console.log(contractAddress);
});

http.listen(3001, "localhost", () => {
  console.log(3001);
});

//const axios = require("axios");
//const express = require('express');
//const {request} = require('./library/api');

//const app = express();

//app.use(express.json());

/*app.get("/qr-code", function(req, res){
    request("ABC-Bank_qr-code-request", ["Name", "Address"], function(err, data) {
        //console.log(data);
        console.log("a");
        //console.log(res)
        res.send(data);
    }).then(function(data) {
        console.log("bc");
        //axios.get("http://localhost:3000/savings/verified", data);
        //axios.get("http://localhost:3000", data);
        //res.send(data);
        app.get("/data", function(req, res) {
            console.log("c");
            console.log(data);
            res.send(data);
        });
    })
});

const PORT = 3001;
app.listen(PORT, function(req, res){
    console.log("listen on : http://localhost:" + PORT);
});*/
