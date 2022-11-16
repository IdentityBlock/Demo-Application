import { useEffect, useState } from "react";
import IBlock from "../components/IBlock";
import Navbar from "../components/Navbar";
import QRcode from "../components/QRcode";
import Toolbar from "../components/Toolbar";
import qr from "../img/qr.png";

function QR(props) {
  const [qrcode, setQRcode] = useState(qr);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/iblock-qr-generate");
      const data = await response.json();
      console.log(data);
      setQRcode(data.qr);

      // check with backend whether token is received or not
      let listner = setInterval(async () => {
        // console.log(data.token);
        const responseQRVerified = await fetch(
          `http://localhost:3001/iblock-qr-verify?token=${encodeURIComponent(
            data.token
          )}`
        );
        const dataQRVerified = await responseQRVerified.json();
        if (dataQRVerified.status === "APPROVED") {
          console.log(dataQRVerified.data);
          clearInterval(listner);

          // stop timeInterval, and pass the data into next page (form)
        } else if (dataQRVerified.status === "REJECTED") {
          console.log(dataQRVerified.status);
          clearInterval(listner);

          // stop timeInterval, and navigate to rejected page
        } else {
          console.log(dataQRVerified);
          // keep listening
        }
      }, 5000);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ height: 20 }}></div>
      <Toolbar />
      <div style={{ height: 20 }}></div>
      <div className="qr-body">
        <IBlock
          iblock="Powered By:"
          option="Personal Banking"
          acc_type={props.acc_type}
        />
        <a href={props.refe}>
          <QRcode url={qrcode} />
        </a>
      </div>
    </>
  );
}

export default QR;
