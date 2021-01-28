import FilmsModel from "../model/films.js";
import CommentsModel from "../model/comments.js";
import {isOnline} from "../utils/common.js";

const getSyncedFilms = (items) => {
  return items.filter(({success}) => success)
    .map(({payload}) => payload.film);
};

const createStoreStructure = (items) => {
  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};

export default class Provider {
  constructor(api, filmsStore, commentsStore) {
    this._api = api;
    this._filmsStore = filmsStore;
    this._commentsStore = commentsStore;
  }

  getFilms() {
    if (isOnline()) {
      return this._api.getFilms()
        .then((films) => {
          const items = createStoreStructure(films.map(FilmsModel.adaptToServer));
          this._filmsStore.setItems(items);
          return films;
        });
    }

    const storeFilms = Object.values(this._filmsStore.getItems());

    return Promise.resolve(storeFilms.map(FilmsModel.adaptToClient));
  }

  getComments(filmID) {
    if (isOnline()) {
      return this._api.getComments(filmID)
        .then((comments) => {
          const items = createStoreStructure(comments.map(CommentsModel.adaptToServer));
          this._commentsStore.setItem(filmID, items);
          return comments;
        });
    }

    const storeComments = Object.values(this._commentsStore.getItems()[filmID]);

    return Promise.resolve(storeComments.map(CommentsModel.adaptToClient));
  }

  updateFilm(film) {
    if (isOnline()) {
      return this._api.updateFilm(film)
        .then((updatedFilm) => {
          this._filmsStore.setItem(updatedFilm.id, FilmsModel.adaptToServer(updatedFilm));
          return updatedFilm;
        });
    }

    this._filmsStore.setItem(film.id, FilmsModel.adaptToServer(Object.assign({}, film)));

    return Promise.resolve(film);
  }

  addComment(newComment, filmID) {
    if (isOnline()) {
      return this._api.addComment(newComment, filmID)
        .then((response) => {
          this._commentsStore.setItem(filmID, response.comments);
          this._filmsStore.setItem(response.movie.id, response.movie);
          return response;
        });
    }

    return Promise.reject(new Error(`Add comment failed`));
  }

  deleteComment(commentId, filmID) {
    if (isOnline()) {

      return this._api.deleteComment(commentId)
        .then(() => {
          this._commentsStore.removeCommentItem(filmID, commentId);
          this._filmsStore.removeCommentItemFromFilms(filmID, commentId);
        });
    }

    return Promise.reject(new Error(`Delete comment failed`));
  }

  sync() {
    if (isOnline()) {
      const storeFilms = Object.values(this._filmsStore.getItems());

      return this._api.sync(storeFilms)
        .then((response) => {
          const updatedFilms = getSyncedFilms(response.updated);

          const items = createStoreStructure([...updatedFilms]);

          this._filmsStore.setItems(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }

}
