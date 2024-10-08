import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import api from "../utils/api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const onEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const onAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const onEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

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

  return (
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
        userName={userName} // Passando os dados do usuário como props
        userDescription={userDescription}
        userAvatar={userAvatar}
      />
      <Footer />
    </div>
  );
}

export default App;
