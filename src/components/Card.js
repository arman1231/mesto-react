import React from 'react'
import trashbinSvg from "../images/trashbin.svg";
import heartSvg from "../images/heart.svg";

export default function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="gallery__item" key={card._id}>
    <button className="gallery__delete-button">
      <img
        className="gallery__delete-icon"
        src={trashbinSvg}
        alt="Удалить карточку"
      />
    </button>
    <img className="gallery__image" src={card.link} alt={card.name} onClick={handleClick} />
    <div className="gallery__info">
      <p className="gallery__image-title">{card.name}</p>
      <div className="gallery__like-section">
        <button className="gallery__button" type="button">
          <img className="gallery__icon" src={heartSvg} alt="Лайк" />
        </button>
        <span className="gallery__like-counter">{card.likes.length}</span>
      </div>
    </div>
  </div>
  )
}
