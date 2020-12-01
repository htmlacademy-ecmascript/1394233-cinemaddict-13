import {createElement} from "../utils.js";


const createStatsLinkTemplate = () => `<a href="#stats" class="main-navigation__additional">Stats</a>`;

export default class StatsLink {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createStatsLinkTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
