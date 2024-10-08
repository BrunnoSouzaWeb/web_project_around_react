import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

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
      />
      <Footer />
    </div>
  );
}

export default App;
