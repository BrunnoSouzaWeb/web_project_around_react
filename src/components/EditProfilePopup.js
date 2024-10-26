import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPatching, setIsPatching] = React.useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    console.log("dentro do effect");
    console.log(currentUser);
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPatching(true);
    console.log("vendo");
    console.log(name);
    console.log("Valores do formulário:", { name, description });
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="form-perfil"
      title="Editar perfil"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      textBtn={isPatching ? "Salvando..." : "Salvar"}
    >
      {/* <fieldset className="popup__fieldset"> */}
      <input
        type="text"
        name="name"
        className="popup__name popup__input"
        minLength="2"
        maxLength="40"
        placeholder="Nome"
        required
        defaultValue={name}
        onChange={handleChangeName}
      />
      <span className="popup__error-visible input-name-error"> </span>
      <input
        type="text"
        name="about"
        className="popup__description popup__input"
        minLength="2"
        maxLength="200"
        placeholder="Sobre"
        required
        defaultValue={description}
        onChange={handleChangeDescription}
      />
      <span className="popup__error-visible input-description-error"> </span>
      {/* </fieldset> */}
    </PopupWithForm>
  );
}
