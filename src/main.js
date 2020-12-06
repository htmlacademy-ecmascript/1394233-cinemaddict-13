import {getRandomInteger, KeyboardKeys, sortByRating, sortByComments} from "./utils/common.js";
import {render, RenderPosition, remove, addElement, removeElement} from "./utils/render.js";

import UserRangView from "./view/user-rang.js";
import NavigationView from "./view/navigation.js";
import FilterView from "./view/site-menu.js";
import StatsLinkView from "./view/stats-link.js";
import SortView from "./view/sort.js";
import MainContentView from "./view/main-content.js";
import FilmsListView from "./view/films-list.js";
import NoFilmView from "./view/no-film.js";
import CardFilmView from "./view/card.js";
import ShowMoreButtonView from "./view/show-more-btn.js";
import TopRatedListView from "./view/top-rated.js";
import MostCommentedListView from "./view/most-comment.js";
import SiteStatisticView from "./view/statistics.js";
import PopupView from "./view/popup.js";

import {generateFilm} from "./moks/film.js";
import {generateFilter} from "./moks/filter.js";
import {generateRandomComment} from "./moks/comments.js";

const FILMS_AMOUNT = 20;
const FILMS_AMOUNT_PER_STEP = 5;

const ComentsAmmount = {
  MIN: 1,
  MAX: 5,
};

const renderFilm = (filmListElement, film) => {
  const filmComponent = new CardFilmView(film);
  const popupComponent = new PopupView(film);

  render(filmListElement, filmComponent, RenderPosition.BEFOREEND);

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
};

const renderFilmsList = (filmListContainer, filmsItems) => {
  if (filmsItems.length === 0) {
    render(filmListContainer, new NoFilmView(), RenderPosition.BEFOREEND);
    remove(sortComponent);
    return;
  }

  render(siteHeaderNode, new UserRangView(), RenderPosition.BEFOREEND);

  for (let film of filmsItems) {
    film.comments = new Array(getRandomInteger(ComentsAmmount.MIN, ComentsAmmount.MAX)).fill(``).map(generateRandomComment);
  }

  for (let i = 0; i < Math.min(filmsItems.length, FILMS_AMOUNT_PER_STEP); i++) {
    renderFilm(filmListContainer, filmsItems[i]);
  }

  render(filmsNode, new TopRatedListView(), RenderPosition.BEFOREEND);
  render(filmsNode, new MostCommentedListView(), RenderPosition.BEFOREEND);

  if (filmsItems.length > FILMS_AMOUNT_PER_STEP) {
    let renderedFilmCount = FILMS_AMOUNT_PER_STEP;
    const showMoreButtonComponent = new ShowMoreButtonView();

    render(filmsListNode, showMoreButtonComponent, RenderPosition.BEFOREEND);

    showMoreButtonComponent.setClickHandler(() => {
      filmsItems.slice(renderedFilmCount, renderedFilmCount + FILMS_AMOUNT_PER_STEP)
      .forEach((filmsElements) => renderFilm(filmListContainer, filmsElements));

      renderedFilmCount += FILMS_AMOUNT_PER_STEP;

      if (renderedFilmCount >= filmsItems.length) {
        remove(showMoreButtonComponent);
      }
    });
  }

  const topRatedFilmsNode = filmsNode.querySelector(`.films-list--top-rated`);
  const topRatedFilmsContainerNode = topRatedFilmsNode.querySelector(`.films-list__container`);
  const mostCommentedFilmsNode = filmsNode.querySelector(`.films-list--most-comment`);
  const mostCommentedFilmsContainerNode = mostCommentedFilmsNode.querySelector(`.films-list__container`);

  sortByComments(filmsItems).slice(0, 2).forEach((film) => {
    renderFilm(mostCommentedFilmsContainerNode, film);
  });
  sortByRating(filmsItems).slice(0, 2).forEach((film) => {
    renderFilm(topRatedFilmsContainerNode, film);
  });
};

const films = new Array(FILMS_AMOUNT).fill(``).map(generateFilm);
const filters = generateFilter(films);

const siteHeaderNode = document.querySelector(`.header`);
const siteMainNode = document.querySelector(`.main`);
const siteBodyNode = document.querySelector(`body`);
const statisticNode = document.querySelector(`.footer__statistics`);

const navigationComponent = new NavigationView();
render(siteMainNode, navigationComponent, RenderPosition.BEFOREEND);
render(navigationComponent, new FilterView(filters), RenderPosition.BEFOREEND);
render(navigationComponent, new StatsLinkView(filters), RenderPosition.BEFOREEND);

const sortComponent = new SortView();
render(siteMainNode, sortComponent, RenderPosition.BEFOREEND);
render(siteMainNode, new MainContentView(), RenderPosition.BEFOREEND);

const filmsNode = siteMainNode.querySelector(`.films`);
render(filmsNode, new FilmsListView(), RenderPosition.BEFOREEND);

const filmsListNode = filmsNode.querySelector(`.films-list`);
const filmsContainerNode = filmsNode.querySelector(`.films-list__container`);

renderFilmsList(filmsContainerNode, films);
render(statisticNode, new SiteStatisticView(films.length), RenderPosition.BEFOREEND);
