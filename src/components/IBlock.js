import { useState, useEffect } from "react";
import iblock from "../img/iblock.png";
import cards from "../img/icons8-bank-cards-96.png";
import current from "../img/icons8-check-book-96.png";
import deposites from "../img/icons8-investment-96.png";
import loans from "../img/icons8-stack-of-money-96.png";
import savings from "../img/icons8-wallet-96.png";

function IBlock(props) {
  const [imgsrc, setimgsrc] = useState(null);

  useEffect(() => {
    switch (props.acc_type) {
      case "Savings Account":
        setimgsrc(savings);
        break;
      case "Deposites":
        setimgsrc(deposites);
        break;
      case "Current Account":
        setimgsrc(current);
        break;
      case "Cards":
        setimgsrc(cards);
        break;
      case "Loans":
        setimgsrc(loans);
        break;
      default:
        setimgsrc(null);
        break;
    }
  }, [props.acc_type]);

  return (
    <div className="icons">
      <div className="option">
        <span>{props.option}</span>
        <img src={imgsrc} alt="option-icon"></img>
        <span>{props.acc_type}</span>
      </div>

      <div className="iblock">
        <span>{props.iblock}</span>
        <img src={iblock} alt="iBlock-icon"></img>
      </div>
    </div>
  );
}

export default IBlock;
