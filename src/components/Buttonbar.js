import cards from "../img/icons8-bank-cards-96.png";
import current from "../img/icons8-check-book-96.png";
import deposites from "../img/icons8-investment-96.png";
import loans from "../img/icons8-stack-of-money-96.png";
import savings from "../img/icons8-wallet-96.png";

function Buttonbar() {
  return (
    <div className="buttonbar">
      <div className="buttonbar-button">
        <a href="/qr">
          <img src={savings} alt="Savings" />
          <span>Savings Accounts</span>
        </a>
      </div>

      <div className="buttonbar-button">
        <a href="/qr">
          <img src={deposites} alt="Deposites" />
          <span>Deposites</span>
        </a>
      </div>

      <div className="buttonbar-button">
        <a href="/qr">
          <img src={current} alt="Current Accounts" />
          <span>Current Accounts</span>
        </a>
      </div>

      <div className="buttonbar-button">
        <a href="/qr">
          <img src={cards} alt="Cards" />
          <span>Cards</span>
        </a>
      </div>

      <div className="buttonbar-button">
        <a href="/qr">
          <img src={loans} alt="Loans" />
          <span>Loans</span>
        </a>
      </div>
    </div>
  );
}

export default Buttonbar;
