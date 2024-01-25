import "./InfoToolTip.css";
import Button from "../Button/Button";

function InfoToolTip({ closePopup, text, isVisible }) {

  return (
    <div className={`infotooltip ${isVisible && "infotooltip_opened"}`}>
      <div className="infotooltip__container">
        <Button onClick={closePopup} type={"close-popup"} />
        <h3 className="infotooltip__title">{text}</h3>
      </div>
    </div>
  );
}

export default InfoToolTip;
