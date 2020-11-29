import dayjs from "dayjs";
import {MAX_SYMBOLS_DESCRIPTION} from "../consts.js";
import {limitDescription} from "../utils.js";

export const createCardFilmTemplate = (film) => {
  const {poster, title, rating, genre, description, productionYear, duration, comments, isWatchList, isWatched, isFavourite} = film;

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
