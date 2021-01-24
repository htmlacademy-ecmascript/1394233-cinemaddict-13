import SortView from "../view/sort.js";
import MainContentView from "../view/main-content.js";
import FilmsBoardView from "../view/films-board.js";
import FilmsListView from "../view/films-list.js";
import NoFilmView from "../view/no-film.js";
import LoadingView from "../view/loading.js";
import ShowMoreButtonView from "../view/show-more-btn.js";
import FilmPresenter from "./film.js";
import CommentsModel from "../model/comments.js";

import {FilmListTitles, SortType, UpdateType, UserAction} from "../consts.js";
import {filter} from "../utils/filter.js";
import {sortByRating, sortingByRating, sortByComments, sortByDate} from "../utils/common.js";
import {render, RenderPosition, remove} from "../utils/render.js";

const FILMS_AMOUNT_PER_STEP = 5;

const MAXIMUM_EXTRA_FILMS = 2;

export default class Films {
  constructor(filmsContainer, siteBody, filmsModel, filterModel, filterPresenter, api) {
    this._filmsModel = filmsModel;
    this._filterModel = filterModel;
    this._filmsContainer = filmsContainer;
    this._siteBody = siteBody;
    this._renderFilmsAmount = FILMS_AMOUNT_PER_STEP;
    this._filmPresenter = {};
    this._topRatedFilmPresenter = {};
    this._mostCommentedFilmPresenter = {};
    this._filterPresenter = filterPresenter;
    this._currentSortType = SortType.DEFAULT;
    this._comments = {};
    this._isLoading = true;
    this._api = api;

    this._sortComponent = null;
    this._showMoreButtonComponent = null;

    this._mainContentComponent = new MainContentView();
    this._filmsBoardComponent = new FilmsBoardView(FilmListTitles.ALL);
    this._filmsListComponent = new FilmsListView();
    this._noFilmComponent = new NoFilmView();
    this._topRatedFilmsBoardComponent = new FilmsBoardView(FilmListTitles.TOP_RATED);
    this._mostCommentedBoardComponent = new FilmsBoardView(FilmListTitles.MOST_COMMENTED);
    this._loadingComponent = new LoadingView();

    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._renderMostCommentedList = this._renderMostCommentedList.bind(this);

    this._filmsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._renderSort();
    render(this._filmsContainer, this._mainContentComponent, RenderPosition.BEFOREEND);
    render(this._mainContentComponent, this._filmsBoardComponent, RenderPosition.BEFOREEND);
    render(this._filmsBoardComponent, this._filmsListComponent, RenderPosition.BEFOREEND);

    this._renderFilmsList(true);
  }

  show() {
    this._mainContentComponent.show();
    this._sortComponent.show();
  }

  hide() {
    this._mainContentComponent.hide();
    this._sortComponent.hide();
    this._handleSortTypeChange(SortType.DEFAULT);
    this._sortComponent.setActiveSortButton(SortType.DEFAULT);
  }

  _getFilms() {
    const filterType = this._filterModel.get();
    const films = this._filmsModel.get().slice();
    const filtredFilms = filter[filterType](films);

    switch (this._currentSortType) {
      case SortType.DATE:
        return filtredFilms.sort(sortByDate);
      case SortType.RATING:
        return filtredFilms.sort(sortingByRating);
    }

    return filtredFilms;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearFilmList({resetRenderFilmsAmount: true});
    this._renderFilmsList();
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }
    this._sortComponent = new SortView(this._currentSortType);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);

    render(this._filmsContainer, this._sortComponent, RenderPosition.BEFOREEND);

  }

  _renderFilm(filmListElement, film, presenterStore) {
    const filmPresenter = new FilmPresenter(filmListElement, this._siteBody, this._handleViewAction, this._handleModeChange, this._comments[film.id], this._renderMostCommentedList);
    filmPresenter.init(film);
    presenterStore[film.id] = filmPresenter;
  }

  _clearFilmList({resetRenderFilmsAmount = false, resetSortType = false} = {}) {
    const filmAmount = this._getFilms().length;

    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};

    if (this._noFilmComponent) {
      remove(this._noFilmComponent);
    }
    if (this._showMoreButtonComponent) {
      remove(this._showMoreButtonComponent);
    }
    if (this._loadingComponent) {
      remove(this._loadingComponent);
    }

    this._renderFilmsAmount = resetRenderFilmsAmount ? FILMS_AMOUNT_PER_STEP : Math.min(filmAmount, this._renderFilmsAmount);

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }

  _clearMostCommentedList() {
    Object
      .values(this._mostCommentedFilmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._mostCommentedFilmPresenter = {};
  }

  _renderFilms(films) {
    films.forEach((film) => this._renderFilm(this._filmsListComponent, film, this._filmPresenter));
  }

  _renderFilmsList(shouldRenderExtraList) {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }

    for (let film of this._getFilms()) {
      const commentsModel = new CommentsModel();
      this._api.getComments(film.id)
        .then((comments) => {
          commentsModel.set(comments);
        });
      this._comments[film.id] = commentsModel;
    }

    const filmAmount = this._getFilms().length;
    const films = this._getFilms().slice(0, Math.min(filmAmount, FILMS_AMOUNT_PER_STEP));
    if (filmAmount === 0) {
      this._renderNoFilms();
      remove(this._sortComponent);
      return;
    }

    this._renderFilms(films);

    if (filmAmount > this._renderFilmsAmount) {
      this._renderShowMoreButton();
    }

    if (shouldRenderExtraList) {
      this._renderTopRatedList();
      this._renderMostCommentedList();
    }
  }

  _renderNoFilms() {
    render(this._filmsListComponent, this._noFilmComponent, RenderPosition.BEFOREEND);
  }

  _renderLoading() {
    render(this._filmsListComponent, this._loadingComponent, RenderPosition.BEFOREEND);
  }

  _modeChange(presenterStore) {
    Object
    .values(presenterStore)
    .forEach((presenter) => presenter.resetView());
  }

  _handleModeChange() {
    this._modeChange(this._filmPresenter);
    this._modeChange(this._topRatedFilmPresenter);
    this._modeChange(this._mostCommentedFilmPresenter);
  }

  _handleViewAction(actionType, updateType, update, comment) {
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this._api.updateFilm(update).then((response) => {
          this._filmsModel.updateFilm(updateType, response);
        });
        break;
      case UserAction.DELETE_COMMENT:
        this._comments[update.id].delete(comment);
        this._filmsModel.updateFilm(updateType, update);
        break;
      case UserAction.ADD_COMMENT:
        this._comments[update.id].add(comment);
        this._filmsModel.updateFilm(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._updateFilmPresenter(this._filmPresenter, data);
        this._updateFilmPresenter(this._topRatedFilmPresenter, data);
        this._updateFilmPresenter(this._mostCommentedFilmPresenter, data);
        break;
      case UpdateType.MINOR:
        this._clearFilmList();
        this._renderFilmsList();
        break;
      case UpdateType.MAJOR:
        this._clearFilmList({resetRenderFilmsAmount: true, resetSortType: true});
        this._renderFilmsList();
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderFilmsList(true);
        break;
    }
  }

  _updateFilmPresenter(presenter, data) {
    if (presenter.hasOwnProperty(data.id)) {
      presenter[data.id].init(data);
    }
  }

  _handleShowMoreButtonClick() {
    const filmAmount = this._getFilms().length;
    const newRenderFilmsAmount = Math.min(filmAmount, this._renderFilmsAmount + FILMS_AMOUNT_PER_STEP);
    const films = this._getFilms().slice(this._renderFilmsAmount, this._renderFilmsAmount + FILMS_AMOUNT_PER_STEP);

    this._renderFilms(films);
    this._renderFilmsAmount = newRenderFilmsAmount;

    if (this._renderFilmsAmount >= filmAmount) {
      remove(this._showMoreButtonComponent);
    }
  }

  _renderShowMoreButton() {
    if (this._showMoreButtonComponent !== null) {
      this._showMoreButtonComponent = null;
    }

    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);

    render(this._filmsBoardComponent, this._showMoreButtonComponent, RenderPosition.BEFOREEND);
  }

  _renderTopRatedList() {
    const topRatedFilmsListComponent = new FilmsListView();
    render(this._mainContentComponent, this._topRatedFilmsBoardComponent, RenderPosition.BEFOREEND);
    render(this._topRatedFilmsBoardComponent, topRatedFilmsListComponent, RenderPosition.BEFOREEND);

    sortByRating(this._getFilms()).slice(0, MAXIMUM_EXTRA_FILMS).forEach((film) => {
      this._renderFilm(topRatedFilmsListComponent, film, this._topRatedFilmPresenter);
    });
  }

  _renderMostCommentedList() {
    const mostCommentedListComponent = new FilmsListView();

    if (this._mostCommentedBoardComponent) {
      remove(this._mostCommentedBoardComponent);
    }

    render(this._mainContentComponent, this._mostCommentedBoardComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedBoardComponent, mostCommentedListComponent, RenderPosition.BEFOREEND);

    sortByComments(this._getFilms()).slice(0, MAXIMUM_EXTRA_FILMS).forEach((film) => {
      this._renderFilm(mostCommentedListComponent, film, this._mostCommentedFilmPresenter);
    });
  }
}
