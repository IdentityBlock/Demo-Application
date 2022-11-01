const axios = require("axios");
const express = require('express');
const {request} = require('./library/api');

const app = express();

app.use(express.json());

app.get("/qr-code", function(req, res){
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
});