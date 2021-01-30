import Observer from "../utils/observer.js";
import {FilterType} from "../consts.js";

export default class Filter extends Observer {
  constructor() {
    super();
    this._activeFilter = FilterType.ALL;
  }

  set(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  isFavouriteActive() {
    return this._activeFilter === FilterType.FAVORITES;
  }

  isWatchListActive() {
    return this._activeFilter === FilterType.WATCH_LIST;
  }

  isHistoryActive() {
    return this._activeFilter === FilterType.HISTORY;
  }

  get() {
    return this._activeFilter;
  }
}
