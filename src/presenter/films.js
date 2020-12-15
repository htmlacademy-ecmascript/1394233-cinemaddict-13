import NavigationView from "./view/navigation.js";
import FilterView from "./view/site-menu.js";
import StatsLinkView from "./view/stats-link.js";
import SortView from "./view/sort.js";
import MainContentView from "./view/main-content.js";
import FilmsBoardView from "./view/films-board.js";
import FilmsListView from "./view/films-list.js";
import NoFilmView from "./view/no-film.js";
import CardFilmView from "./view/card.js";
import ShowMoreButtonView from "./view/show-more-btn.js";
import TopRatedListView from "./view/top-rated.js";
import MostCommentedListView from "./view/most-comment.js";
import PopupView from "./view/popup.js";

import {KeyboardKeys} from "./utils/common.js";
import {render, RenderPosition, addElement, remove, removeElement} from "../utils/render.js";

const FILMS_AMOUNT_PER_STEP = 5;

export default class Films {
  constructor(filmsContainer) {
    this._filmsContainer = filmsContainer;

    this._navigationComponent = new NavigationView();
    this._mainContentComponent = new MainContentView();
    this._sortComponent = new SortView();
    this._filter = new FilterView();
    this._statsLink = new StatsLinkView();
    this._filmsBoardComponent = new FilmsBoardView();
    this._filmsListComponent = new FilmsListView();
    this._noFilmComponent = new NoFilmView();
    this._cardFilmComponent = new CardFilmView();
    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._topRatedListComponent = new TopRatedListView();
    this._mostCommentedListComponent = new MostCommentedListView();
  }

  init(filmList) {
    this._filmList = filmList.slice();

    render(this._filmsContainer, this._navigationComponent, RenderPosition.BEFOREEND);
    this._renderSort();
    render(this._filmsContainer, this._mainContentComponent, RenderPosition.BEFOREEND);
    render(this._mainContentComponent, this._filmsBoardComponent, RenderPosition.BEFOREEND);
    render(this._filmsBoardComponent, this._filmsListComponent, RenderPosition.BEFOREEND);

    this._renderFilmsList();
  }

  _renderSort() {
    render(this._filmsContainer, this._sortComponent, RenderPosition.BEFOREEND);
  }

  _renderFilter() {
    render(this._navigationComponent, this._filter, RenderPosition.BEFOREEND);
  }

  _renderStats() {
    render(this._navigationComponent, this._statsLink, RenderPosition.BEFOREEND);
  }

  _renderFilm(film) {
    const filmComponent = new CardFilmView(film);
    const popupComponent = new PopupView(film);

    render(this._filmsListComponent, filmComponent, RenderPosition.BEFOREEND);

    const closePopup = () => {
      removeElement(siteBodyNode, popupComponent);
      siteBodyNode.classList.remove(`hide-overflow`);
      document.removeEventListener(`keydown`, onPopupEscPress);
    };

    const openPopup = () => {
      addElement(siteBodyNode, popupComponent);
      siteBodyNode.classList.add(`hide-overflow`);
      document.addEventListener(`keydown`, onPopupEscPress);
      popupComponent.setCloseButtonClickHandler(closePopup);
    };

    const onPopupEscPress = (evt) => {
      if (evt.key === KeyboardKeys.ESCAPE) {
        closePopup();
      }
    };

    filmComponent.setPosterClickHandler(openPopup);
    filmComponent.setCommentsClickHandler(openPopup);
    filmComponent.setTitleClickHandler(openPopup);
  }

  _renderFilms(from, to) {
    this._filmList
    .slice(from, to)
    .forEach((filmsItem) => this._renderFilm(filmsItem));
  }

  _renderFilmsList(filmListContainer, filmsItems) {
    if (filmsItems.length === 0) {
      this._renderNoFilms();
      remove(this._renderSort());
      return;
    }

    this._renderFilms(0, Math.min(this._filmList.length, FILMS_AMOUNT_PER_STEP));

    if (this._filmList.length > FILMS_AMOUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderNoFilms() {
    render(this._filmsListComponent, this._renderNoFilms(), RenderPosition.BEFOREEND);
  }

  _renderShowMoreButton() {
    let renderedFilmCount = FILMS_AMOUNT_PER_STEP;
    const showMoreButtonComponent = new ShowMoreButtonView();

    render(this._filmsListComponent, showMoreButtonComponent, RenderPosition.BEFOREEND);

    showMoreButtonComponent.setClickHandler(() => {
      this._filmList.slice(renderedFilmCount, renderedFilmCount + FILMS_AMOUNT_PER_STEP)
      .forEach((filmsElements) => this._renderFilm(filmsElements));

      renderedFilmCount += FILMS_AMOUNT_PER_STEP;

      if (renderedFilmCount >= this._filmList.length) {
        remove(showMoreButtonComponent);
      }
    });
  }

  _renderTopRatedList() {
    // отрисовываем топ по рейтингу
  }

  _renderMostCommentedList() {
    // отрисовываем топ по комментариям
  }
}
