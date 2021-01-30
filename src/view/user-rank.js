import AbstractView from "./abstract.js";

import {getUserRank} from "../utils/stats.js";


const createUserRangTemplate = (films) => {
  return `<section class="header__profile profile">
  <p class="profile__rating">${getUserRank(films)}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

export default class SiteMenu extends AbstractView {
  constructor(films) {
    super();

    this._films = films;
  }

  getTemplate() {
    return createUserRangTemplate(this._films);
  }

  changeUserRang(watchedFilms) {
    this.getElement().querySelector(`.profile__rating`).textContent = `${getUserRank(watchedFilms)}`;
  }
}
