import Navbar from "../components/Navbar";
import AutofillForm from "../components/AutofillForm";
import IBlock from "../components/IBlock";

function Verified(props) {
  return (
    <>
      <Navbar />
      <div style={{ height: 20 }}></div>
      <div className="form-body">
        <IBlock
          iblock="Verified By:"
          option="Personal Banking"
          acc_type={props.acc_type}
        />
        <AutofillForm userData={props.userData} />
      </div>
    </>
  );
}

export default Verified;
