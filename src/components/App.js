import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from "react";
import api from "../utils/api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          EditProfile={isEditProfilePopupOpen}
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
