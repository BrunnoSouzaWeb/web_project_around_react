import favIcon from "../images/around.png";
import profile from "../images/profile.jpg";
import editAvatar from "../images/edit_avatar.png";
import editButtonProfile from "../images/editbuttonprofile.svg";
import addButtonProfile from "../images/addbuttonprofile.png";
import closeIcon from "../images/Close-icon.svg";
import PopupWithForm from "./PopupWithForm";

export default function Main({
  EditProfile,
  AddPlace,
  EditAvatar,
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  closeAllPopups,
  userName,
  userDescription,
  userAvatar,
}) {
  return (
    <main className="content">
      <section className="profile">
        <img src={userAvatar} alt="perfil" className="profile__image" />
        <img
          src={editAvatar}
          alt="editavatar"
          className="profile__edit-avatar"
          onClick={onEditAvatarClick}
        />
        <div className="profile__info">
          <div className="profile__name">
            <p className="profile__text"> {userName} </p>
            <img
              src={editButtonProfile}
              alt="editar"
              className="profile__edit-button"
              onClick={onEditProfileClick}
            />
          </div>
          <p className="profile__profession"> {userDescription} </p>
        </div>
        <img
          src={addButtonProfile}
          alt="adicionar"
          className="profile__add-button"
          onClick={onAddPlaceClick}
        />
      </section>
      <section className="elements" />
      <template className="template-card" />
      <PopupWithForm
        name={"form-perfil"}
        title={"Editar perfil"}
        isOpen={EditProfile}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="input-name"
          name="name"
          className="popup__name popup__input"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__error-visible input-name-error"> </span>
        <input
          type="text"
          id="input-description"
          name="about"
          className="popup__description popup__input"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__error-visible input-description-error"> </span>
      </PopupWithForm>
      <PopupWithForm
        name={"form-card"}
        title={"Novo Local"}
        isOpen={AddPlace}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="input-title"
          className="popup__card-title popup__input"
          defaultValue=""
          minLength={2}
          maxLength={30}
          placeholder="Título"
          required=""
        />
        <span className="popup__error-visible input-title-error" />
        <input
          type="url"
          id="input-url"
          className="popup__card-url popup__input"
          defaultValue=""
          minLength={2}
          placeholder="Link da imagem"
          required=""
        />
        <span className="popup__error-visible input-url-error"> </span>
      </PopupWithForm>
      <PopupWithForm
        name={"form-avatar"}
        title={"Alterar a foto do perfil"}
        isOpen={EditAvatar}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="input-link"
          name="avatarLink"
          className="popup__avatar-url popup__input"
          placeholder="Link da imagem"
          required=""
        />
        <span className="popup__error-visible input-link-error"> </span>
      </PopupWithForm>
      <div className="popup" id="popup-confirmation">
        <div className="popup__overlay" />
        <form
          id="form-confirmation"
          className="popup__confirmation-form popup__form"
        >
          <img
            src={closeIcon}
            alt="Botão Fechar"
            className="popup__confirmation-button-closed"
          />
          <h2 className="popup__confirmation-header">Tem certeza?</h2>
          <button
            type="submit"
            className="popup__confirmation-button-create popup__button"
          >
            Sim
          </button>
        </form>
      </div>
    </main>
  );
}
