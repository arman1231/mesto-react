import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeleteCard from "./ConfirmDeleteCard";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isConfirmDeleteCardOpen, setIsConfirmDeleteCardOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [card, setCard] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }
  React.useEffect(() => {
    if (
      isAddPlacePopupOpen ||
      isEditAvatarPopupOpen ||
      isEditProfilePopupOpen ||
      isImagePopupOpen
    ) {
      document.addEventListener("keydown", handleEscClose);
    }
  }, [
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isEditProfilePopupOpen,
    isImagePopupOpen,
  ]);
  React.useEffect(() => {
    setIsLoading(true);
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false)
      });
  }, []);
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // ?????????? ??????????????????, ???????? ???? ?????? ???????? ???? ???????? ????????????????
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // ???????????????????? ???????????? ?? API ?? ???????????????? ?????????????????????? ???????????? ????????????????
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCardDelete(card) {
    setIsConfirmDeleteCardOpen(true);
    setCard(card);
  }
  function handleConfirmDeleteCardSubmit() {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then((newCardList) => {
        //?????????? ?????????????? ?? API, ???????????????? ?????????? cards ?? ?????????????? ???????????? filter: ???????????????? ?????????? ??????????????, ???????????????? ???? ???????? ?????????????????? ????????????????.
        setCards((cardList) =>
          cardList.filter((c) => {
            return c._id !== card._id;
          })
        );
      })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  }
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
    setIsImagePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeleteCardOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
    document.removeEventListener("keydown", handleEscClose);
  }
  function handleUpdateUser({ name, about: description }) {
    setIsLoading(true);
    api
      .setUserInfo({
        name,
        about: description,
      })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  }
  function handleUpdateAvatar(link) {
    setIsLoading(true);
    api
      .updateAvatar(link)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  }
  function handleAddPlaceSubmit(name, link) {
    setIsLoading(true);
    api
      .addNewCard({ name, link })
      .then((res) => {
        setCards([res, ...cards]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
            isLoading={isLoading}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            isLoading={isLoading}
          />
          <ConfirmDeleteCard
            isOpen={isConfirmDeleteCardOpen}
            onClose={closeAllPopups}
            onConfirmDeleteCard={handleConfirmDeleteCardSubmit}
            isLoading={isLoading}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
