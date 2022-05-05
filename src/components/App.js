import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";




function App() {
  return (
    <div className="wrap">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="edit-profile" title="Редактировать профиль" />
        <PopupWithForm name="add-new-place" title="Новое место" />
        <PopupWithForm name="confirm-delete" title="Вы уверены?" />
        <PopupWithForm name="edit-avatar" title="Обновить аватар" />
        <ImagePopup />
      </div>
    </div>
  );
}

export default App;
