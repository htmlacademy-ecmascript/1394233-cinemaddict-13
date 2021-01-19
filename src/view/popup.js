import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import he from "he";

import SmartView from "./smart.js";
import {nanoid} from "nanoid";
import {KeyboardKeys} from "../utils/common.js";
import {AMOUNT_GENRES_FOR_SINGLE_NUMBER} from "../consts.js";
import {createElement} from "../utils/render.js";

dayjs.extend(relativeTime);

const createCommentTemplate = ({emoji, text, author, date, id}) => {
  return `<li class="film-details__comment" data-id="">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">
  </span>
  <div>
    <p class="film-details__comment-text">${he.encode(text)}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${dayjs(date).fromNow()}</span>
      <button class="film-details__comment-delete" data-id="${id}">Delete</button>
    </p>
  </div>
</li>`;
};

const createEmojiLableTemplate = (emoji) => `<img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">`;

const createGenreTemplate = (element) => `<span class="film-details__genre">${element}</span>`;

const createGenresTemplate = (genres) => genres.map(createGenreTemplate).join(` `);

const createCommentsTemplate = (comments) => comments.map(createCommentTemplate).join(` `);

const createPopupTemplate = (film, comments) => {
  const {poster, title, rating, genre, description, productionYear, duration, director, cast, screenwriter, country, ageRating, isWatchList, isWatched, isFavourite} = film;

  const productionDate = dayjs(productionYear).format(`D MMMM YYYY`);
  const durationFilm = dayjs(duration).format(`H[h] m[m]`);

  const commentsNodeTemplate = createCommentsTemplate(comments);
  const genresNodeTemplate = createGenresTemplate(genre);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
          <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: The Great Flamarion</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${screenwriter.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${cast.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${productionDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${durationFilm}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genre.length > AMOUNT_GENRES_FOR_SINGLE_NUMBER ? `Genres` : `Genre`} </td>
              <td class="film-details__cell">
                ${genresNodeTemplate}</td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${description.join(` `)}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isWatchList ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavourite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
          ${commentsNodeTemplate}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

export default class Popup extends SmartView {
  constructor(film, comments) {
    super();
    this._film = film;
    this._data = Popup.parseFilmToData(this._film);
    this._comments = comments;
    this._clickHandler = this._clickHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favouriteClickHandler = this._favouriteClickHandler.bind(this);
    this._deleteCommentClickHandler = this._deleteCommentClickHandler.bind(this);
    this._newCommentInputHandler = this._newCommentInputHandler.bind(this);
    this._emojiChangeHandler = this._emojiChangeHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createPopupTemplate(this._data, this._comments.getComments());
  }

  reset(film) {
    this.updateData(
        Popup.parseFilmToData(film)
    );
  }

  restoreHandlers() {
    this.setCloseButtonClickHandler(this._callback.click);
    this.setWatchListClickHandler(this._callback.watchListClick);
    this.setWatchedClickHandler(this._callback.watchedClick);
    this.setFavouriteClickHandler(this._callback.favouriteClick);
    this.setDeleteCommentClickHandler(this._callback.deleteCommentClick);
    this.setFormSubmitHandler(this._callback.formSubmit);
    this._setInnerHandlers();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _watchListClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchListClick();
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favouriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favouriteClick();
  }

  _newCommentInputHandler(evt) {
    evt.preventDefault();

    this.updateData({
      newComment: evt.target.value
    }, true);
  }

  _emojiChangeHandler(evt) {
    evt.preventDefault();

    const popupScrollTop = this.getElement().scrollTop;

    if (evt.target.classList.contains(`film-details__emoji-item`)) {
      if (this._data.emojiLabel === evt.target.value) {
        return;
      }

      this.updateData({
        emojiLabel: evt.target.value,
      }, true);

      const placeForEmojiNode = this.getElement().querySelector(`.film-details__add-emoji-label`);
      const emojiLabel = createElement(createEmojiLableTemplate(evt.target.value));
      const currentEmojiLabel = placeForEmojiNode.querySelector(`img`);

      if (currentEmojiLabel) {
        placeForEmojiNode.removeChild(currentEmojiLabel);
      }
      placeForEmojiNode.appendChild(emojiLabel);

      this.getElement().scrollTo(0, popupScrollTop);
    }
  }

  _deleteCommentClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteCommentClick(evt.target.getAttribute(`data-id`));
  }

  _formSubmitHandler(evt) {
    if (evt.ctrlKey && evt.key === KeyboardKeys.ENTER) {
      const newComment = {
        emoji: this._data.emojiLabel,
        text: this._data.newComment
      };

      if (newComment.emoji === `` || newComment.text === `` || newComment.emoji === null || newComment.text === null) {
        return;
      }

      newComment.date = new Date();
      newComment.author = `Artem Vafin`;
      newComment.id = nanoid();

      this._callback.formSubmit(newComment);

      this._data.emojiLabel = null;
      this._data.newComment = null;
    }
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.film-details__emoji-list`)
      .addEventListener(`change`, this._emojiChangeHandler);
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._newCommentInputHandler);
  }

  setCloseButtonClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickHandler);
  }

  setWatchListClickHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchListClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavouriteClickHandler(callback) {
    this._callback.favouriteClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favouriteClickHandler);
  }

  setDeleteCommentClickHandler(callback) {
    this._callback.deleteCommentClick = callback;
    const commentsElement = this.getElement().querySelectorAll(`.film-details__comment`);
    commentsElement.forEach((element) => {
      element.querySelector(`.film-details__comment-delete`).addEventListener(`click`, this._deleteCommentClickHandler);
    });
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    document.addEventListener(`keydown`, this._formSubmitHandler);
  }

  static parseFilmToData(film) {
    return Object.assign(
        {},
        film,
        {
          emojiLabel: null,
          newComment: null
        }
    );
  }
}

