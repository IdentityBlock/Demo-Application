import qr from "../img/qr.png";

function QRcode() {
  return (
    <div className="code">
      <span>Scan the QR code to proceed</span>
      <div className="qr-div">
        <img src={qr} alt="QR CODE"></img>
      </div>
    </div>
  );
}

export default QRcode;
