export default class Store {
  constructor(key, storage) {
    this._storage = storage;
    this._storeKey = key;
  }

  getItems() {
    try {
      return JSON.parse(this._storage.getItem(this._storeKey)) || {};
    } catch (err) {
      return {};
    }
  }

  setItems(items) {
    this._storage.setItem(
        this._storeKey,
        JSON.stringify(items)
    );
  }

  setItem(key, value) {
    const store = this.getItems();

    this._storage.setItem(
        this._storeKey,
        JSON.stringify(
            Object.assign({}, store, {
              [key]: value
            })
        )
    );
  }

  removeCommentItem(filmId, commentId) {
    const store = this.getItems();

    delete store[filmId][commentId];

    this.setItem(
        filmId,
        store[filmId]
    );
  }

  removeCommentItemFromFilms(filmId, commentId) {
    const store = this.getItems();

    delete store[filmId].comments[commentId];

    store[filmId].comments = store[filmId].comments.filter((item) => item !== commentId);

    this.setItem(
        filmId,
        store[filmId]
    );
  }
}
