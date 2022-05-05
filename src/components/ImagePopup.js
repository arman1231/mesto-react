import React from "react";
import closeSvg from "../images/close.svg";

export default function ImagePopup() {
  return (
    <div className="modal image-modal">
      <div className="image-modal__wrapper">
        <button className="modal__close-btn" type="button">
          <img
            className="modal__close-icon"
            src={closeSvg}
            alt="кнопка закрыть"
          />
        </button>
        <img className="image-modal__img" />
        <p className="image-modal__caption"></p>
      </div>
    </div>
  );
}
