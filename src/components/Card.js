import trash from "../images/Trash.svg";
import like from "../images/like.png";

export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="elements__card" key={card._id}>
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <img className="elements__image-trash" src={trash} alt={""} />

      <div className="elements__text">
        <h1 className="elements__title">{card.name}</h1>
        <div className="elements__info">
          <img className="elements__image-like" src={like} alt={""} />

          <p className="elements__count-like">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
