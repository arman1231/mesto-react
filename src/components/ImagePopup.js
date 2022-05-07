import React from "react";
import closeSvg from "../images/close.svg";

export default function ImagePopup({card, onClose}) {
  return (
    <div className={`modal image-modal ${card && 'modal_opened'}`}>
      <div className="image-modal__wrapper">
        <button className="modal__close-btn" type="button" onClick={onClose}>
          <img
            className="modal__close-icon"
            src={closeSvg}
            alt="кнопка закрыть"
          />
        </button>
        <img className="image-modal__img" src={card ? card.link : `#`} />
        <p className="image-modal__caption"></p>
      </div>
    </div>
  );
}
