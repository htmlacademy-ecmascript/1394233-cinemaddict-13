import AbstractView from "./abstract.js";
import {FilterType} from "../consts.js";

export default class Navigation extends AbstractView {
  constructor() {
    super();

    this._navigationClickHandler = this._navigationClickHandler.bind(this);
  }

  getTemplate() {
    return `<nav class="main-navigation">
    <a href="#${FilterType.STATS}" class="main-navigation__additional" data-filter-type="${FilterType.STATS}">Stats</a></nav>`;
  }

  _removeActiveClass() {
    this.getElement().querySelectorAll(`.main-navigation__item`).forEach((element) => {
      if (element.classList.contains(`main-navigation__item--active`)) {
        element.classList.remove(`main-navigation__item--active`);
      }
    });
  }

  _navigationClickHandler(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    const statsButtonElement = this.getElement().querySelector(`[data-filter-type="${FilterType.STATS}"]`);
    const isActive = statsButtonElement.classList.contains(`main-navigation__additional--active`);

    if (evt.target.dataset.filterType !== FilterType.STATS && !isActive) {
      return;
    }

    if (evt.target.dataset.filterType !== FilterType.STATS && isActive) {
      evt.target.classList.add(`main-navigation__item--active`);
      statsButtonElement.classList.remove(`main-navigation__additional--active`);
      this._callback.navigationClick(evt.target.dataset.filterType);
      return;
    }

    this._removeActiveClass();

    statsButtonElement.classList.add(`main-navigation__additional--active`);

    this._callback.navigationClick(evt.target.dataset.filterType);
  }

  setNavigationClickHandler(callback) {
    this._callback.navigationClick = callback;
    this.getElement().addEventListener(`click`, this._navigationClickHandler);
  }
}
