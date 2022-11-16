import { useEffect, useState } from "react";
import qr from "../img/qr.png";

function QRcode() {
  const [qrcode, setQRcode] = useState(qr);

  useEffect(() => {
    (async () => {
      const qrUrl = await fetch("http://localhost:3001/iblock-qr-generate");
      setQRcode(await qrUrl.json());
    })();
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
