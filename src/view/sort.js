import AbstractView from "./abstract.js";
import {SortType, ACTIVE_SORT_CLASS} from "../consts.js";


const createSortTemplate = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
  <li><a href="#" class="sort__button" data-sort-type="${SortType.DATE}">Sort by date</a></li>
  <li><a href="#" class="sort__button" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
</ul>`;
};

export default class Sort extends AbstractView {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
  }

  _sortTypeChangeHandler(evt) {
    evt.currentTarget.querySelectorAll(`A`).forEach((element) => {
      if (element.classList.contains(ACTIVE_SORT_CLASS)) {
        element.classList.remove(ACTIVE_SORT_CLASS);
      }
    });

    if (evt.target.tagName !== `A`) {
      return;
    } else {
      evt.target.classList.add(ACTIVE_SORT_CLASS);
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
