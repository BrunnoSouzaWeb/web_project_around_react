import trash from "../images/Trash.svg";
import like from "../images/like.png";

import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike }) {
  const { link, likes, name, owner } = card;
  const currentUser = useContext(CurrentUserContext);

  const isOwn = owner._id === currentUser._id;

  const cardDeleteButtonClassName = `elements__image-trash ${
    isOwn ? "element__button_trash_visible" : "element__button_trash_hidden"
  }`;

  const isLiked = likes.some((user) => user._id === currentUser._id);

  const cardLikeButtonClassName = `elements__image-like ${
    isLiked ? "elements__image-like_active" : ""
  }`;

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

      {isOwn && (
        <img className={cardDeleteButtonClassName} src={trash} alt={""} />
      )}

      {/* <img className="elements__image-trash" src={trash} alt={""} /> */}

      <div className="elements__text">
        <h1 className="elements__title">{card.name}</h1>
        <div className="elements__info">
          {/* <img className="elements__image-like" src={like} alt={""} /> */}

          <img className={cardLikeButtonClassName} src={like} alt={""} />
          <p className="elements__count-like">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
