import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, SetIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, SetIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, SetIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, SetSelectedCard] = React.useState();

    function handleEditProfileClick() {
      SetIsEditProfilePopupOpen(true)
    }
    function handleAddPlaceClick() {
      SetIsAddPlacePopupOpen(true)
    }
    function handleEditAvatarClick() {
      SetIsEditAvatarPopupOpen(true)
    }
    function handleCardClick(card) {
      SetSelectedCard(card)
    }
    function closeAllPopups() {
      SetIsEditProfilePopupOpen(false)
      SetIsAddPlacePopupOpen(false)
      SetIsEditAvatarPopupOpen(false)
      SetSelectedCard(false)
    }
  return (
    <div className="wrap">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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

        </PopupWithForm>
        <PopupWithForm name="add-new-place" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
        </PopupWithForm>
        <PopupWithForm name="confirm-delete" title="Вы уверены?" buttonText="Да">
        </PopupWithForm>
        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
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
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
