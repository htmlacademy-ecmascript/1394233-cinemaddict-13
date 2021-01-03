import CardFilmView from "../view/card.js";
import PopupView from "../view/popup.js";

import {KeyboardKeys} from "../utils/common.js";
import {render, RenderPosition, addElement, removeElement, replace, remove} from "../utils/render.js";

const Mode = {
  POPUP_CLOSED: `CLOSED`,
  POPUP_OPEN: `OPEN`
};

export default class Film {
  constructor(filmListContainer, siteBody, changeData, changeMode) {
    this._filmListContainer = filmListContainer;
    this._siteBody = siteBody;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._filmComponent = null;
    this._popupComponent = null;
    this._mode = Mode.POPUP_CLOSED;

    this._handleOpenClick = this._handleOpenClick.bind(this);
    this._onPopupEscPress = this._onPopupEscPress.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._handleWatchListClick = this._handleWatchListClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavouriteClick = this._handleFavouriteClick.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new CardFilmView(this._film);
    this._popupComponent = new PopupView(this._film);

    this._filmComponent.setPosterClickHandler(this._handleOpenClick);
    this._filmComponent.setCommentsClickHandler(this._handleOpenClick);
    this._filmComponent.setTitleClickHandler(this._handleOpenClick);
    this._filmComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._filmComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmComponent.setFavouriteClickHandler(this._handleFavouriteClick);
    this._popupComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._popupComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._popupComponent.setFavouriteClickHandler(this._handleFavouriteClick);

    if (prevFilmComponent === null || prevPopupComponent === null) {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._filmListContainer.getElement().contains(prevFilmComponent.getElement())) {
      replace(this._filmComponent, prevFilmComponent);
    }

    if (this._mode === Mode.POPUP_OPEN) {
      replace(this._popupComponent, prevPopupComponent);
      this._popupComponent.setCloseButtonClickHandler(this._handleCloseClick);
    }

    remove(prevFilmComponent);
    remove(prevPopupComponent);
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._popupComponent);
  }

  resetView() {
    if (this._mode !== Mode.POPUP_CLOSED) {
      this._closePopup();
      this._siteBody.classList.add(`hide-overflow`);
    }
  }

  _closePopup() {
    this._popupComponent.reset(this._film);
    removeElement(this._siteBody, this._popupComponent);
    this._siteBody.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onPopupEscPress);
    this._mode = Mode.POPUP_CLOSED;
  }

  _openPopup() {
    this._changeMode();
    addElement(this._siteBody, this._popupComponent);
    this._siteBody.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this._onPopupEscPress);
    this._popupComponent.setCloseButtonClickHandler(this._handleCloseClick);
    this._mode = Mode.POPUP_OPEN;
  }

  _onPopupEscPress(evt) {
    if (evt.key === KeyboardKeys.ESCAPE) {
      evt.preventDefault();
      this._closePopup();
    }
  }

  _handleOpenClick() {
    this._openPopup();
  }

  _handleCloseClick() {
    this._closePopup();
  }

  _handleWatchListClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              isWatchList: !this._film.isWatchList
            }
        )
    );
  }

  _handleWatchedClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              isWatched: !this._film.isWatched
            }
        )
    );
  }

  _handleFavouriteClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              isFavourite: !this._film.isFavourite
            }
        )
    );
  }
}
