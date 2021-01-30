import AbstractView from "./abstract.js";

export default class Statistic extends AbstractView {
  constructor(statistic) {
    super();
    this._statistic = statistic;
  }

  getTemplate() {
    return `<p>${this._statistic} movies inside</p>`;
  }
}
