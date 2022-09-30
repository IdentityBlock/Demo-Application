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
        <AutofillForm
          name="A.B.C. Perera"
          dob="19/09/1992"
          nic="199226599V"
          address="No. 34/B, Main Street, Mt. Lavinia"
          phone="+94 75 123 1556"
          email="abcperera@gmail.com"
        />
      </div>
    </>
  );
}

export default Verified;
