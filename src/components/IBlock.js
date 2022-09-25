import iblock from "../img/iblock.png";
import savings from "../img/icons8-wallet-96.png";

function IBlock(props) {
  return (
    <div className="icons">
      <div className="option">
        <span>{props.option}</span>
        <img src={savings} alt="option-icon"></img>
      </div>

      <div className="iblock">
        <span>{props.iblock}</span>
        <img src={iblock} alt="iBlock-icon"></img>
      </div>
    </div>
  );
}

export default IBlock;
