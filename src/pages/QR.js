import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";
import IBlock from "../components/IBlock";
import QRcode from "../components/QRcode";

function QR() {
  return (
    <>
      <Navbar />
      <div style={{ height: 20 }}></div>
      <Toolbar />
      <div style={{ height: 20 }}></div>
      <div className="qr-body">
        <IBlock iblock="Powered By:" option="Personal Banking" />
        <QRcode />
      </div>
    </>
  );
}

export default QR;
