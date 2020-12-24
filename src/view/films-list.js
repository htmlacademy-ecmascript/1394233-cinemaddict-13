import AbstractView from "./abstract.js";

const createFilmsListTemplate = () => `<div class="films-list__container"></div>`;

export default class FilmsList extends AbstractView {
  getTemplate() {
    return createFilmsListTemplate();
  }
}
