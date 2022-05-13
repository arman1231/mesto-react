import React from "react";
import closeSvg from "../images/close.svg";

export default function EditProfilePopup({isOpen, onClose}) {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  return (
    <div>
      <div className={`modal modal_edit-profile ${isOpen ? 'modal_opened' : ""}`}>
        <div className="modal__container">
          <button className="modal__close-btn" type="button" onClick={onClose}>
            <img
              className="modal__close-icon"
              src={closeSvg}
              alt="кнопка закрыть"
            />
          </button>
          <h2 className="modal__heading">Редактировать профиль</h2>
          <form className="modal__form" name="edit-profile" action="#" noValidate>
          <fieldset className="modal__user-data">
              <input
                className="modal__input"
                id="modal__name"
                type="text"
                name="user-name"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="modal__input-error user-name-error"></span>
              <input
                className="modal__input"
                id="modal__title"
                type="text"
                name="user-title"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="modal__input-error user-title-error"></span>
            </fieldset>
            <fieldset className="modal__handlers">
            <button className="modal__submit" type="submit">
            Сохранить
            </button>
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
