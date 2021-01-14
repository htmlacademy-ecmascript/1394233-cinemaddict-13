import dayjs from "dayjs";
import AbstractView from "./abstract.js";
import {MAX_SYMBOLS_DESCRIPTION} from "../consts.js";
import {limitDescription} from "../utils/common.js";

const createCardFilmTemplate = (film, comments) => {
  const {poster, title, rating, genre, description, productionYear, duration, isWatchList, isWatched, isFavourite} = film;

  const year = dayjs(productionYear).format(`YYYY`);
  const durationFilm = dayjs(duration).format(`H[h] m[m]`);

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${durationFilm}</span>
    <span class="film-card__genre">${genre[0]}</span>
  </p>
  <img src="./images/posters/${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${limitDescription(description.join(` `), MAX_SYMBOLS_DESCRIPTION)}</p>
  <a class="film-card__comments">${comments.length} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchList ? `film-card__controls-item--active` : ``}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? `film-card__controls-item--active` : ``}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavourite ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export default class CardFilm extends AbstractView {
  constructor(film, comments) {
    super();
    this._film = film;
    this._comments = comments;
    this._openPopupHandler = this._openPopupHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favouriteClickHandler = this._favouriteClickHandler.bind(this);
  }

  getTemplate() {
    return createCardFilmTemplate(this._film, this._comments);
  }

  _openPopupHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _watchListClickHandler() {
    this._callback.watchListClick();
  }

  _watchedClickHandler() {
    this._callback.watchedClick();
  }

  _favouriteClickHandler() {
    this._callback.favouriteClick();
  }

  setPosterClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._openPopupHandler);
  }

  setCommentsClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._openPopupHandler);
  }

  setTitleClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._openPopupHandler);
  }

  setWatchListClickHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchListClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavouriteClickHandler(callback) {
    this._callback.favouriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favouriteClickHandler);
  }
}
