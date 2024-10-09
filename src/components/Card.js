import trash from "../images/Trash.svg";
import like from "../images/like.png";

export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  //console.log(card);
  //console.log(card.name);
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

    /*
    <template class="template-card">
      <article class="elements__card">
        <img src="." alt="" class="elements__image" />
        <img
          src="./images/Trash.svg"
          alt="Botão de lixeira"
          class="elements__image-trash"
        />
        <div class="elements__text">
          <h1 class="elements__title"></h1>
          <div class="elements_info">
            <img
              src="./images/like.png"
              alt="Botão de curtir"
              class="elements__image-like"
            />
            <p class="elements__count-like"></p>
          </div>
        </div>
      </article>
    </template>
    */
  );
}
