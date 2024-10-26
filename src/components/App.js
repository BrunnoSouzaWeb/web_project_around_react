//import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from "react";
import api from "../utils/api";

import EditProfilePopup from "./EditProfilePopup";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});

  const onEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  function handleUpdateUser({ name, about }) {
    console.log("handleUpdateUser");
    console.log({ name, about });
    api
      .updateEditPerfil(name, about)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Erro ao atualizar o perfil: ${err}`); // Se há um erro, será exibido no console;
      });
  }

  const onAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const onEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  /*
  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log("Erro ao carregar dados do usuário: ", err);
      });
  }, []);
  */

  useEffect(() => {
    api
      .getUserInfo()
      .then((ApiUserInfo) => {
        console.log("dentro xxx");
        console.log(ApiUserInfo);
        setCurrentUser(ApiUserInfo);
      })
      .catch((err) => {
        console.log("Erro ao carregar dados do usuário: ", err);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then(setCards)
      .catch((err) => console.log("Erro ao obter dados dos cartões :", err));
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  function handleCardDelete(card) {
    console.log("dentro");
    console.log(card);

    if (!card) {
      console.log("SAINDO");
      return;
    }

    //// return;

    api
      .deleteCard(card._id)
      .then(() => {
        // Atualiza o estados dos cards
        setCards((state) => state.filter((c) => c._id !== card._id));
        console.log("Cartao eliminado corretamente");
        ///closeAllPopups(); // Fechas os popups
      })
      .catch((err) => console.error(`Erro ao eliminar o cartao: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <Header />
        <Main
          AddPlace={isAddPlacePopupOpen}
          EditAvatar={isEditAvatarPopupOpen}
          onEditProfileClick={onEditProfileClick}
          onAddPlaceClick={onAddPlaceClick}
          onEditAvatarClick={onEditAvatarClick}
          closeAllPopups={closeAllPopups}
          // userName={userName} // Passando os dados do usuário como props
          // userDescription={userDescription} // agora é variável global
          // userAvatar={userAvatar}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        {selectedCard && (
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        )}
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
