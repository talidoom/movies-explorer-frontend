import "./InfoToolTip.css";
import Button from "../Button/Button";

function InfoTooltip({ tooltipState, setTooltipState }) {
  const { isVisible, isSuccessful, text } = tooltipState;

  const closePopup = () => {
    setTooltipState({
      isVisible: false,
      isSuccessful: isSuccessful,
      text: text,
    });
  };

  return (
    <div className={`infotooltip ${isVisible && "infotooltip_opened"}`}>
      <div className="infotooltip__container">
        <Button onClick={closePopup} type={"close-popup"} />
        <h3 className="infotooltip__title">{text}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
