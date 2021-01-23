import AbstractView from "./abstract.js";


export default class Loading extends AbstractView {
  getTemplate() {
    return `<h2 class="films-list__title">Movies loading...</h2>`;
  }
}
