//import logo from "./logo.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="profile">
          <img
            src="<%=require('./images/profile.jpg')%>"
            alt="perfil"
            className="profile__image"
          />
          <img
            src="<%=require('./images/edit_avatar.png')%>"
            alt="editavatar"
            className="profile__edit-avatar"
          />
          <div className="profile__info">
            <div className="profile__name">
              <p className="profile__text" />
              <img
                src="<%=require('./images/editbuttonprofile.svg')%>"
                alt="editar"
                className="profile__edit-button"
              />
            </div>
            <p className="profile__profession" />
          </div>
          <img
            src="<%=require('./images/addbuttonprofile.png')%>"
            alt="adicionar"
            className="profile__add-button"
          />
        </section>
        <section className="elements" />
        <template className="template-card" />
        <div className="popup" id="popup-perfil">
          <div className="popup__overlay" />
          <form id="form-perfil" className="popup__form" noValidate="">
            <img
              src="<%=require('./images/Close-icon.svg')%>"
              alt="Botão Fechar"
              className="popup__button-closed"
            />
            <h3 className="popup__header">Editar perfil</h3>
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
            <span className="popup__error-visible input-description-error">
              {" "}
            </span>
            <button
              type="submit"
              className="popup__button-create popup__button"
            >
              Salvar
            </button>
          </form>
        </div>
        <div className="popup" id="popup-card">
          <div className="popup__overlay" />
          <form
            id="form-card"
            className="popup__card-form popup__form"
            noValidate=""
          >
            <img
              src="<%=require('./images/Close-icon.svg')%>"
              alt="Botão Fechar"
              className="popup__card-button-closed"
            />
            <h3 className="popup__card-header">Novo Local</h3>
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
            <button
              type="submit"
              className="popup__card-button-create popup__button"
            >
              Salvar
            </button>
          </form>
        </div>
        <div className="popup" id="popup-image">
          <div className="popup__overlay" />
          <div className="popup__image-content">
            <img
              src="<%=require('./images/Close-icon.svg')%>"
              alt="Botão Fechar"
              className="popup__image-button-closed"
            />
            <img src="" alt="" className="popup__image-photo" />
            <p className="popup__image-name" />
          </div>
        </div>
        <div className="popup" id="popup-confirmation">
          <div className="popup__overlay" />
          <form
            id="form-confirmation"
            className="popup__confirmation-form popup__form"
          >
            <img
              src="<%=require('./images/Close-icon.svg')%>"
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
        <div className="popup" id="popup-avatar">
          <div className="popup__overlay" />
          <form
            id="form-avatar"
            className="popup__avatar-form popup__form"
            noValidate=""
          >
            <img
              src="<%=require('./images/Close-icon.svg')%>"
              alt="Botão Fechar"
              className="popup__avatar-button-closed"
            />
            <h2 className="popup__avatar-header">Alterar a foto do perfil</h2>
            <input
              type="url"
              id="input-link"
              name="avatarLink"
              className="popup__avatar-url popup__input"
              placeholder="Link da imagem"
              required=""
            />
            <span className="popup__error-visible input-link-error"> </span>
            <button
              type="submit"
              className="popup__avatar-button-create popup__button"
            >
              Salvar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
