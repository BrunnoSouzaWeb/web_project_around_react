import closeIcon from "../images/Close-icon.svg";

export default function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  formClass,
  headerClass,
  buttonClass,
  onSubmit,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup__open" : ""}`}
      id="popup-perfil"
    >
      <div className="popup__overlay" />
      <form
        id={name}
        className={`${formClass} popup__form `}
        noValidate=""
        onSubmit={(e) => {
          e.preventDefault(); // Evita envio padrão do navegador
          onSubmit && onSubmit(e); // Garante chamada do onSubmit
        }}
      >
        <img
          src={closeIcon}
          alt="Botão Fechar"
          className="popup__button-closed"
          onClick={onClose}
        />
        <h2 className={`${headerClass} popup__header`}>{title}</h2>
        {children}
        <button
          type="submit"
          className={`${buttonClass} popup__button-create popup__button`}
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
