import qr from "../img/qr.png";
import iblock from "../img/iblock.png";
import savings from "../img/icons8-wallet-96.png";

function QRbody() {
  return (
    <div className="qr-body">
      <div className="icons">
        <div className="option">
          <span>Personal Banking</span>
          <img src={savings} alt="option-icon"></img>
        </div>

        <div className="iblock">
          <span>Powered By:</span>
          <img src={iblock} alt="iBlock-icon"></img>
        </div>
      </div>

      <div className="code">
        <span>Scan the QR code to proceed</span>
        <img src={qr} alt="QR CODE"></img>
      </div>
    </div>
  );
}

export default QRbody;
