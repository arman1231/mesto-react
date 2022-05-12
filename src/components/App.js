import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }
  return (
    <div className="wrap">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
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
          <PopupWithForm
            name="add-new-place"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
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
          <PopupWithForm
            name="confirm-delete"
            title="Вы уверены?"
            buttonText="Да"
          ></PopupWithForm>
          <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
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
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
