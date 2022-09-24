import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";
import QRbody from "../components/QRbody";

function QR() {
  return (
    <>
      <Navbar />
      <div style={{ height: 20 }}></div>
      <Toolbar />
      <div style={{ height: 20 }}></div>
      <QRbody />
    </>
  );
}

export default QR;
