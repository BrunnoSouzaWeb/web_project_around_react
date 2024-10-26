import React from "react";
import PopupWithForm from "./PopupWithForm";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  const [link, setLink] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  const [isPatching, setIsPatching] = React.useState(false);

  React.useEffect(() => {
    setLink(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPatching(true);
    console.log("vendo avatar");
    console.log(link);
    console.log("Valores do formulário:", link);
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    }).finally(() => {
      setIsPatching(false);
    });
  }

  return (
    <PopupWithForm
      title="Alterar a foto do perfil"
      name="form-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      textBtn={isPatching ? "Salvando..." : "Salvar"}
    >
      {/* <fieldset className="popup__fieldset"> */}
      <input
        className="popup__avatar-url popup__input"
        id="input-link"
        placeholder="Link da imagem"
        type="url"
        name="avatarLink"
        ref={avatarRef}
        defaultValue={link}
        required
      />
      <p className="popup__error-visible input-link-error"></p>
      {/* </fieldset> */}
    </PopupWithForm>
  );
}
