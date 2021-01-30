import dayjs from "dayjs";
import Observer from "../utils/observer.js";

export default class Films extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  set(updateType, films) {
    this._films = films.slice();
    this._notify(updateType);
  }

  get() {
    return this._films;
  }

  updateFilm(updateType, update) {
    const index = this._films.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting film`);
    }

    this._films = [
      ...this._films.slice(0, index),
      update,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  getFavouritesFilmsCount() {
    return this._films.slice().filter((film) => film.isFavourite).length;
  }

  getWatchListFilmsCount() {
    return this._films.slice().filter((film) => film.isWatchList).length;
  }

  getWatchedFilmsCount() {
    return this._films.slice().filter((film) => film.isWatched).length;
  }

  static adaptToClient(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          comments: film.comments,
          poster: film.film_info.poster,
          title: film.film_info.title,
          originalTitle: film.film_info.alternative_title,
          rating: film.film_info.total_rating,
          director: film.film_info.director,
          screenwriter: film.film_info.writers,
          cast: film.film_info.actors,
          productionYear: dayjs(film.film_info.release.date),
          duration: film.film_info.runtime,
          country: film.film_info.release.release_country,
          genre: film.film_info.genre,
          description: film.film_info.description,
          ageRating: film.film_info.age_rating,
          isWatchList: film.user_details.watchlist,
          isWatched: film.user_details.already_watched,
          isFavourite: film.user_details.favorite,
          watchedDate: film.user_details.watching_date === null ? null : dayjs(film.user_details.watching_date),
        }
    );

    delete adaptedFilm.user_details;
    delete adaptedFilm.film_info;

    return adaptedFilm;
  }

  static adaptToServer(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          "id": film.id,
          "comments": film.comments,
          "film_info": {
            "title": film.title,
            "alternative_title": film.originalTitle,
            "total_rating": film.rating,
            "poster": film.poster,
            "age_rating": film.ageRating,
            "director": film.director,
            "writers": film.screenwriter,
            "actors": film.cast,
            "release": {
              "date": film.productionYear.toISOString(),
              "release_country": film.country
            },
            "runtime": film.duration,
            "genre": film.genre,
            "description": film.description
          },
          "user_details": {
            "watchlist": film.isWatchList,
            "already_watched": film.isWatched,
            "watching_date": film.watchedDate === null ? null : film.watchedDate.toISOString(),
            "favorite": film.isFavourite
          }
        }
    );

    delete adaptedFilm.isWatched;
    delete adaptedFilm.isFavourite;
    delete adaptedFilm.watchedDate;
    delete adaptedFilm.isWatchList;
    delete adaptedFilm.title;
    delete adaptedFilm.originalTitle;
    delete adaptedFilm.rating;
    delete adaptedFilm.poster;
    delete adaptedFilm.ageRating;
    delete adaptedFilm.director;
    delete adaptedFilm.screenwriter;
    delete adaptedFilm.cast;
    delete adaptedFilm.productionYear;
    delete adaptedFilm.country;
    delete adaptedFilm.duration;
    delete adaptedFilm.genre;
    delete adaptedFilm.description;

    return adaptedFilm;
  }
}
