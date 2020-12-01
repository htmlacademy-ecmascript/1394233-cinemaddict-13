import {upperFirst, createElement} from "../utils.js";

const createFilterItemTemplate = ({name, count}, isActive) => {

  return (
    `<a href="#${name}"
        class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
        ${name === `all` ? `All movies` : `${upperFirst(name)}`}
        ${name !== `all` ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

const createFilterTemplate = (filterItems) => {

  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join(``);

  return `<div class="main-navigation__items">
    ${filterItemsTemplate}
  </div>`;
};


export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
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
