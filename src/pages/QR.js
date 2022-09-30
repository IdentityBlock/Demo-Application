import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";
import IBlock from "../components/IBlock";
import QRcode from "../components/QRcode";

function QR(props) {
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
        <QRcode />
      </div>
    </>
  );
}

export default QR;
