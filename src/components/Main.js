import React from "react";
import pencilSvg from "../images/pencil.svg";
import crossSvg from "../images/cross.svg";
import { api } from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.setLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    console.log(cards);
    api.deleteCard(card._id).then((res) => {
      console.log(cards);
      //После запроса в API, обновите стейт cards с помощью метода filter: создайте копию массива, исключив из него удалённую карточку.
      // setCards((state) => state.filter((c) => {

      // }))
    }).finally(()=> {
      console.log(cards);
    })
  }

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
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></button>
          <div className="profile__credentials">
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
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
            <p className="profile__title">{currentUser.about}</p>
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
            <Card card={card} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={onCardClick} key={card._id}/>
          );
        })}
      </section>
    </main>
  );
}
