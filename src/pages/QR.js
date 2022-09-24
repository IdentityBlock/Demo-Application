import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";
import QRbody from "../components/QRbody";

function QR() {
  return (
    <>
      <Navbar />
      <div style={{ height: 20 }}></div>
      <Toolbar />
      <QRbody />
    </>
  );
}

export default QR;
