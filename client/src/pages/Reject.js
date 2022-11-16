import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";
import IBlock from "../components/IBlock";
import { Link, useNavigate } from "react-router-dom";

function Rejected(props) {
  const navigate = useNavigate();

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
        <div className="code">
          <span>Sorry! </span>
          <span>The token expired</span>
          <span>or </span>
          <span>The user rejected </span>
          <span>to share his personal information </span>
          <span>to this website.</span>
          <button
            className="rejectBtn"
            onClick={() => {
              navigate("/");
            }}
            role="link"
          >
            Try Again
          </button>
        </div>

        {/* <QRcode url={qrcode} /> */}
      </div>
    </>
  );
}
export default Rejected;
