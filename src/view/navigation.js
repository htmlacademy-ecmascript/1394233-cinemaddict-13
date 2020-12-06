import AbstractView from "./abstract.js";

export default class Navigation extends AbstractView {
  getTemplate() {
    return `<nav class="main-navigation"></nav>`;
  }
}
