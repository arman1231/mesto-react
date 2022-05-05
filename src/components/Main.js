import React from "react";
import pencilSvg from "../images/pencil.svg";
import crossSvg from "../images/cross.svg";
import trashbinSvg from "../images/trashbin.svg";
import heartSvg from "../images/heart.svg";
import { api } from "../utils/api";

function handleEditAvatarClick() {
  const modalEditAvatar = document.querySelector(".modal_edit-avatar");
  modalEditAvatar.classList.add("modal_opened");
}
function handleEditProfileClick() {
  const modalEditProfile = document.querySelector(".modal_edit-profile");
  modalEditProfile.classList.add("modal_opened");
}
function handleAddPlaceClick() {
  const modalAddPlace = document.querySelector(".modal_add-new-place");
  modalAddPlace.classList.add("modal_opened");
}

export default function Main() {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState();

  React.useEffect(
    () => {
      api.getUserInfo().then((res) => {
        console.log(res);
        setUserName(res.name);
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      }).catch((error) => console.log(error))
    }
  );
  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__general">
          <button
            className="profile__edit-user-image-button"
            type="button"
            onClick={handleEditAvatarClick}
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></button>
          <div className="profile__credentials">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                onClick={handleEditProfileClick}
              >
                <img
                  className="profile__edit-icon"
                  src={pencilSvg}
                  alt="Редактировать профиль"
                />
              </button>
            </div>
            <p className="profile__title">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={handleAddPlaceClick}
        >
          <img
            className="profile__add-icon"
            src={crossSvg}
            alt="Добавить фото"
          />
        </button>
      </section>
      <section className="gallery page__gallery">
        <template id="gallery__item">
          <div className="gallery__item">
            <button className="gallery__delete-button">
              <img
                className="gallery__delete-icon"
                src={trashbinSvg}
                alt="Удалить карточку"
              />
            </button>
            <img className="gallery__image" />
            <div className="gallery__info">
              <p className="gallery__image-title"></p>
              <div className="gallery__like-section">
                <button className="gallery__button" type="button">
                  <img className="gallery__icon" src={heartSvg} alt="Лайк" />
                </button>
                <span className="gallery__like-counter"></span>
              </div>
            </div>
          </div>
        </template>
      </section>
    </main>
  );
}
