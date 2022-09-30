const express = require('express');
const {request} = require('./library/api');

const app = express();

app.use(express.json());

app.get("/qr-code", function(req, res){
    request("ABC-Bank_qr-code-request", ["Name", "Email", "Phone"]).then((data)=>{
        res.send(data);
    })
});

const PORT = 3001;
app.listen(PORT, function(req, res){
    console.log("listen on : http://localhost:" + PORT);
});