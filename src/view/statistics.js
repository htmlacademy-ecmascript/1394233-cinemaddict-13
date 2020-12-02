import {createElement} from "../utils.js";

const createSiteStatisticTemplate = (statistic) => `<p>${statistic} movies inside</p>`;

export default class SiteStatistic {
  constructor(statistic) {
    this._element = null;
    this._statistic = statistic;
  }

  getTemplate() {
    return createSiteStatisticTemplate(this._statistic);
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
