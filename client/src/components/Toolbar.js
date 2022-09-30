import calculator from "../img/icons8-calculator-96.png";
import tariffs from "../img/icons8-combo-chart-96.png";
import exchange from "../img/icons8-exchange-96.png";
import promo from "../img/icons8-increase-discount-96.png";
import notices from "../img/icons8-note-96.png";
import apps from "../img/icons8-project-management-96.png";

function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar-button">
        <a href="#">
          <img src={calculator} alt="Calculator" />
          <span>Financial</span>
          <span>Calculator</span>
        </a>
      </div>

      <div className="toolbar-button">
        <a href="#">
          <img src={promo} alt="Promotions" />
          <span>Promotions</span>
        </a>
      </div>

      <div className="toolbar-button">
        <a href="#">
          <img src={tariffs} alt="Tariffs" />
          <span>Tariffs</span>
        </a>
      </div>

      <div className="toolbar-button">
        <a href="#">
          <img src={exchange} alt="Exchange" />
          <span>Exchange</span>
          <span>Rates</span>
        </a>
      </div>

      <div className="toolbar-button">
        <a href="#">
          <img src={apps} alt="Applications" />
          <span>Applications</span>
        </a>
      </div>

      <div className="toolbar-button">
        <a href="#">
          <img src={notices} alt="Notices" />
          <span>Notices</span>
        </a>
      </div>
    </div>
  );
}

export default Toolbar;
