import CardFilmView from "../view/card.js";
import PopupView from "../view/popup.js";

import {KeyboardKeys} from "../utils/common.js";
import {render, RenderPosition, addElement, removeElement} from "../utils/render.js";

export default class Film {
  constructor(filmListContainer, siteBody) {
    this._filmListContainer = filmListContainer;
    this._siteBody = siteBody;

    this._filmComponent = null;
    this._popupComponent = null;

    this._handleClick = this._handleClick.bind(this);
    this._onPopupEscPress = this._onPopupEscPress.bind(this);
  }

  init(film) {
    this._film = film;

    this._filmComponent = new CardFilmView(this._film);
    this._popupComponent = new PopupView(this._film);

    this._filmComponent.setPosterClickHandler(this._handleClick);
    this._filmComponent.setCommentsClickHandler(this._handleClick);
    this._filmComponent.setTitleClickHandler(this._handleClick);

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
      evt.preventDefault();
      this._closePopup();
    }
  }

  _handleClick() {
    this._openPopup();
  }
}
