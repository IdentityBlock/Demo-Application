import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IBlock from "../components/IBlock";
import Navbar from "../components/Navbar";
import QRcode from "../components/QRcode";
import Toolbar from "../components/Toolbar";
import qr from "../img/qr.png";

function QR(props) {
  const [qrcode, setQRcode] = useState(qr);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch("/iblock-qr-generate");
      const data = await response.json();
      // console.log(data);
      setQRcode(data.qr);
      let timeOut = 0;
      // check with backend whether token is received or not
      let listner = setInterval(async () => {
        // console.log(data.token);
        const responseQRVerified = await fetch(
          `/iblock-qr-verify?token=${encodeURIComponent(
            data.token
          )}`
        );
        const dataQRVerified = await responseQRVerified.json();
        if (dataQRVerified.status === "APPROVED") {
          // console.log(dataQRVerified.data);
          clearInterval(listner);
          props.setUserData(dataQRVerified.data);
          // stop timeInterval, and pass the data into next page (form)
          navigate("/verified");
        } else if (dataQRVerified.status === "REJECTED") {
          // console.log(dataQRVerified.status);
          clearInterval(listner);
          navigate("/rejected");
          // stop timeInterval, and navigate to rejected page
        } else {
          // console.log(dataQRVerified);
          timeOut += 1;
          // 2 mins for the token to expire
          if (timeOut >= 60) {
            // console.log("TOKEN EXPIRED");
            clearInterval(listner);
            navigate("/rejected");
            // stop timeInterval, and navigate to rejected page
          }
          // keep listening
        }
      }, 2000);
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
        <QRcode url={qrcode} />
      </div>
    </>
  );
}

export default QR;
