import CardFilmView from "../view/card.js";
import PopupView from "../view/popup.js";

import {KeyboardKeys} from "../utils/common.js";
import {render, RenderPosition, addElement, removeElement} from "../utils/render.js";

export default class Film {
  contructor(filmListContainer, siteBody) {
    this._filmListContainer = filmListContainer;
    this._siteBody = siteBody;

    this._filmComponent = null;
    this._popupComponent = null;
  }

  init(film) {
    this._film = film;

    this._filmComponent = new CardFilmView(this._film);
    this._popupComponent = new PopupView(this._film);
    console.log(this._filmComponent);
    console.log(this._filmListContainer);
    this._handlePosterClick = this._handlePosterClick.bind(this);
    this._handleCommentsClick = this._handleCommentsClick.bind(this);
    this._handleTitleClick = this._handleTitleClick.bind(this);

    render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
  }

  _closePopup() {
    removeElement(this._siteBody, this._popupComponent);
    this._siteBody.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onPopupEscPress);
  }

  _openPopup() {
    addElement(this._siteBody, this._popupComponent);
    this._siteBody.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this._onPopupEscPress);
    this._popupComponent.setCloseButtonClickHandler(this._closePopup);
  }

  _onPopupEscPress(evt) {
    if (evt.key === KeyboardKeys.ESCAPE) {
      this._closePopup();
    }
  }

  _handlePosterClick() {
    this._openPopup();
  }

  _handleCommentsClick() {
    this._openPopup();
  }

  _handleTitleClick() {
    this._openPopup();
  }
}
