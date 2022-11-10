import { useState, useEffect } from "react";
import qr from "../img/qr.png";

import io from 'socket.io-client';

function QRcode() {
  const axios = require('axios');
  const [qrcode, setQRcode] = useState(qr);

  console.log("abc");

  /*useEffect(() => {  
    axios.get('/qr-code').then(async function(data) {
      //console.log(data);
      setQRcode(data.data);

      for (let i = 1; i < 10; i++) {
        //let rec = false;
        console.log(i);

        let data =  await axios.get("http://localhost:3000/data");

        console.log(data);
        if (! (data === undefined)) {
          break;
        }

        //console.log(rec);
        //if (rec) {
          //break;
        //}

        console.log(i);
        //alert(i);

        let myPromise = new Promise(function(resolve) {
          setTimeout(function() {resolve();}, 5000 * i);
        });
  
        await myPromise;
      

    });
  }, [])*/

  useEffect(() => {
    //axios.get('/reqst').then((data) =>)
    //var socket = io();
    const socket = io("http://localhost:3001/");

    console.log(socket);

    socket.emit("request", "A");
  }, []);

  return (
    <div className="code">
      <span>Scan the QR code to proceed</span>
      <div className="qr-div">
      <img
        src={qrcode}
        alt="QR CODE TEXT : 
      {'information' : {'Name', 'Email', 'Phone'},
      'Source' : 'ABC Bank',
      'Token': 'rAndOmlY geNeRATed t0KeN'}"
      ></img>
      </div>
    </div>
  );
}

export default QRcode;
