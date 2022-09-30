import { useState, useEffect } from "react";
import qr from "../img/qr.png";


function QRcode() {
  const axios = require('axios');
  const [qrcode, setQRcode] = useState(qr);

  useEffect(() => {  
    axios.get('/qr-code').then((data)=>{
      console.log(data);
      setQRcode(data.data);
    });
  }, [])
  

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
