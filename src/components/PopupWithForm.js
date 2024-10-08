import closeIcon from "../images/Close-icon.svg";

export default function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup__open" : ""}`}
      id="popup-perfil"
    >
      <div className="popup__overlay" />
      <form id={name} className="popup__form" noValidate="">
        <img
          src={closeIcon}
          alt="Botão Fechar"
          className="popup__button-closed"
          onClick={onClose}
        />
        <h3 className="popup__header">{title}</h3>
        {children}
        <button type="submit" className="popup__button-create popup__button">
          Salvar
        </button>
      </form>
    </div>
  );
}
