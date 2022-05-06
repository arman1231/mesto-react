import React from "react";
import pencilSvg from "../images/pencil.svg";
import crossSvg from "../images/cross.svg";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => console.log(error));
  });

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__general">
          <button
            className="profile__edit-user-image-button"
            type="button"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></button>
          <div className="profile__credentials">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                onClick={onEditProfile}
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
          onClick={onAddPlace}
        >
          <img
            className="profile__add-icon"
            src={crossSvg}
            alt="Добавить фото"
          />
        </button>
      </section>
      <section className="gallery page__gallery">
        {cards.map((card) => {
          return (
            <Card card={card} onCardClick={onCardClick} />
          );
        })}
      </section>
    </main>
  );
}
