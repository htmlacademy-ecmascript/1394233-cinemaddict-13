import SortView from "../view/sort.js";
import MainContentView from "../view/main-content.js";
import FilmsBoardView from "../view/films-board.js";
import FilmsListView from "../view/films-list.js";
import NoFilmView from "../view/no-film.js";
import ShowMoreButtonView from "../view/show-more-btn.js";
import FilmPresenter from "./film.js";

import {generateRandomComment} from "../moks/comments.js";

import {FilmListTitles, SortType} from "../consts.js";
import {getRandomInteger, sortByRating, sortingByRating, sortByComments, sortByDate, updateItem} from "../utils/common.js";
import {render, RenderPosition, remove} from "../utils/render.js";

const FILMS_AMOUNT_PER_STEP = 5;

const CommentsAmount = {
  MIN: 1,
  MAX: 5,
};

const MAXIMUM_EXTRA_FILMS = 2;

export default class Films {
  constructor(filmsContainer, siteBody) {
    this._filmsContainer = filmsContainer;
    this._siteBody = siteBody;
    this._renderFilmsAmount = FILMS_AMOUNT_PER_STEP;
    this._filmPresenter = {};
    this._topRatedFilmPresenter = {};
    this._mostCommentedFilmPresenter = {};
    this._currentSortType = SortType.DEFAULT;

    this._mainContentComponent = new MainContentView();
    this._sortComponent = new SortView();
    this._filmsBoardComponent = new FilmsBoardView(FilmListTitles.ALL);
    this._filmsListComponent = new FilmsListView();
    this._noFilmComponent = new NoFilmView();
    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._topRatedFilmsBoardComponent = new FilmsBoardView(FilmListTitles.TOP_RATED);
    this._mostCommentedBoardComponent = new FilmsBoardView(FilmListTitles.MOST_COMMENTED);

    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(filmList) {
    this._filmList = filmList.slice();
    this._sourcedFilmList = filmList.slice();

    this._renderSort();
    render(this._filmsContainer, this._mainContentComponent, RenderPosition.BEFOREEND);
    render(this._mainContentComponent, this._filmsBoardComponent, RenderPosition.BEFOREEND);
    render(this._filmsBoardComponent, this._filmsListComponent, RenderPosition.BEFOREEND);

    this._renderFilmsList(true);
  }

  _sortFilms(sortType) {
    switch (sortType) {
      case SortType.DATE:
        this._filmList.sort(sortByDate);
        break;
      case SortType.RATING:
        this._filmList.sort(sortingByRating);
        break;
      default:
        this._filmList = this._sourcedFilmList.slice();
    }
    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortFilms(sortType);
    this._clearFilmList();
    this._renderFilmsList();
  }

  _renderSort() {
    render(this._filmsContainer, this._sortComponent, RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderFilm(filmListElement, film, presenter) {
    const filmPresenter = new FilmPresenter(filmListElement, this._siteBody, this._handleFilmChange, this._handleModeChange);
    filmPresenter.init(film);
    presenter[film.id] = filmPresenter;
  }

  _renderFilms(from, to) {
    this._filmList
    .slice(from, to)
    .forEach((filmItem) => this._renderFilm(this._filmsListComponent, filmItem, this._filmPresenter));
  }

  _renderFilmsList(shouldRenderExtraList) {
    if (this._filmList.length === 0) {
      this._renderNoFilms();
      remove(this._sortComponent);
      return;
    }

    for (let film of this._filmList) {
      film.comments = new Array(getRandomInteger(CommentsAmount.MIN, CommentsAmount.MAX)).fill(``).map(generateRandomComment);
    }

    this._renderFilms(0, Math.min(this._filmList.length, this._renderFilmsAmount));

    if (this._filmList.length > this._renderFilmsAmount) {
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

  _clearFilmList() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    this._renderFilmsAmount = FILMS_AMOUNT_PER_STEP;
    remove(this._showMoreButtonComponent);
  }

  _handleModeChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleFilmChange(updatedFilm) {
    this._filmList = updateItem(this._filmList, updatedFilm);
    this._sourcedFilmList = updateItem(this._sourcedFilmList, updatedFilm);
    this._updatePresenter(this._filmPresenter, updatedFilm);
    this._updatePresenter(this._topRatedFilmPresenter, updatedFilm);
    this._updatePresenter(this._mostCommentedFilmPresenter, updatedFilm);
  }

  _updatePresenter(presenter, updatedFilm) {
    if (presenter.hasOwnProperty(updatedFilm.id)) {
      presenter[updatedFilm.id].init(updatedFilm);
    }
  }

  _handleShowMoreButtonClick() {
    this._filmList.slice(this._renderFilmsAmount, this._renderFilmsAmount + FILMS_AMOUNT_PER_STEP).forEach((filmsElements) => this._renderFilm(this._filmsListComponent, filmsElements, this._filmPresenter));
    this._renderFilmsAmount += FILMS_AMOUNT_PER_STEP;

    if (this._renderFilmsAmount >= this._filmList.length) {
      remove(this._showMoreButtonComponent);
    }
  }

  _renderShowMoreButton() {
    render(this._filmsBoardComponent, this._showMoreButtonComponent, RenderPosition.BEFOREEND);
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _renderTopRatedList() {
    const topRatedFilmsListComponent = new FilmsListView();
    render(this._mainContentComponent, this._topRatedFilmsBoardComponent, RenderPosition.BEFOREEND);
    render(this._topRatedFilmsBoardComponent, topRatedFilmsListComponent, RenderPosition.BEFOREEND);

    sortByRating(this._filmList).slice(0, MAXIMUM_EXTRA_FILMS).forEach((film) => {
      this._renderFilm(topRatedFilmsListComponent, film, this._topRatedFilmPresenter);
    });
  }

  _renderMostCommentedList() {
    const mostCommentedListComponent = new FilmsListView();
    render(this._mainContentComponent, this._mostCommentedBoardComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedBoardComponent, mostCommentedListComponent, RenderPosition.BEFOREEND);

    sortByComments(this._filmList).slice(0, MAXIMUM_EXTRA_FILMS).forEach((film) => {
      this._renderFilm(mostCommentedListComponent, film, this._mostCommentedFilmPresenter);
    });
  }
}
