import React from "react";
import closeSvg from "../images/close.svg";

export default function PopupWithForm(props) {
  return (
    <div>
      <div className={`modal modal_${props.name}`}>
        <div className="modal__container">
          <button className="modal__close-btn" type="button">
            <img
              className="modal__close-icon"
              src={closeSvg}
              alt="кнопка закрыть"
            />
          </button>
          <h2 className="modal__heading">{props.title}</h2>
          <form className="modal__form" name={props.name} action="#" noValidate>
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

      {/* <div className="modal modal_add-new-place">
        <div className="modal__container">
          <button className="modal__close-btn" type="button">
            <img
              className="modal__close-icon"
              src={closeSvg}
              alt="кнопка закрыть"
            />
          </button>
          <h2 className="modal__heading">Новое место</h2>
          <form className="modal__form" name="add-form" action="#" noValidate>
            <fieldset className="modal__user-data">
              <input
                className="modal__input"
                id="modal__place-name"
                type="text"
                name="place-name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="modal__input-error place-name-error"></span>
              <input
                className="modal__input"
                id="modal__place-img-link"
                type="url"
                name="place-img-link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="modal__input-error place-img-link-error"></span>
            </fieldset>
            <fieldset className="modal__handlers">
              <button className="modal__submit" type="submit">
                Создать
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="modal modal_confirm-delete">
        <div className="modal__container">
          <button className="modal__close-btn" type="button">
            <img
              className="modal__close-icon"
              src={closeSvg}
              alt="кнопка закрыть"
            />
          </button>
          <h2 className="modal__heading">Вы уверены?</h2>
          <form
            className="modal__form"
            name="delete-form"
            action="#"
            noValidate
          >
            <fieldset className="modal__handlers">
              <button className="modal__submit" type="submit">
                Да
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="modal modal_edit-avatar">
        <div className="modal__container">
          <button className="modal__close-btn" type="button">
            <img
              className="modal__close-icon"
              src={closeSvg}
              alt="кнопка закрыть"
            />
          </button>
          <h2 className="modal__heading">Обновить аватар</h2>
          <form
            className="modal__form"
            name="update-avatar-form"
            action="#"
            noValidate
          >
            <fieldset className="modal__user-data">
              <input
                className="modal__input"
                id="modal__avatar"
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="modal__input-error avatar-error"></span>
            </fieldset>
            <fieldset className="modal__handlers">
              <button className="modal__submit" type="submit">
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div> */}
    </div>
  );
}
