import {getRandomInteger, renderTemplate, renderElement, RenderPosition} from "./utils.js";
import UserRangView from "./view/user-rang.js";
import ShowMoreButtonView from "./view/show-more-btn.js";
import SortView from "./view/sort.js";

import {createSiteMenuTemplate} from "./view/site-menu.js";
import MainContentView from "./view/main-content.js";
import FilmsListView from "./view/films-list.js";
import {createCardFilmTemplate} from "./view/card.js";

import TopRatedListView from "./view/top-rated.js";
import MostCommentedListView from "./view/most-comment.js";
import {createSiteStatisticTemplate} from "./view/statistics.js";
import {createPopupTemplate} from "./view/popup.js";
import {generateFilm} from "./moks/film.js";
import {generateFilter} from "./moks/filter.js";
import {generateRandomComment} from "./moks/comments.js";

const FILMS_AMOUNT = 25;
const FILMS_AMOUNT_PER_STEP = 5;

const ComentsAmmount = {
  MIN: 1,
  MAX: 5,
};

const films = new Array(FILMS_AMOUNT).fill(``).map(generateFilm);
const filters = generateFilter(films);

const sortByRating = (items) => items.slice().sort((a, b) => b.rating - a.rating);
const sortByComments = (items) => items.slice().sort((a, b) => b.comments.length - a.comments.length);

for (let film of films) {
  film.comments = new Array(getRandomInteger(ComentsAmmount.MIN, ComentsAmmount.MAX)).fill(``).map(generateRandomComment);
}

const siteHeaderNode = document.querySelector(`.header`);
const siteMainNode = document.querySelector(`.main`);
const siteFooterNode = document.querySelector(`.footer`);
const statisticNode = siteFooterNode.querySelector(`.footer__statistics`);

renderElement(siteHeaderNode, new UserRangView().getElement(), RenderPosition.BEFOREEND);
renderTemplate(siteMainNode, createSiteMenuTemplate(filters), `beforeend`);
renderElement(siteMainNode, new SortView().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainNode, new MainContentView().getElement(), RenderPosition.BEFOREEND);

const filmsNode = siteMainNode.querySelector(`.films`);

renderElement(filmsNode, new FilmsListView().getElement(), RenderPosition.BEFOREEND);

const filmsListNode = filmsNode.querySelector(`.films-list`);
const filmsContainerNode = filmsNode.querySelector(`.films-list__container`);

if (films.length > FILMS_AMOUNT_PER_STEP) {
  let renderedFilmCount = FILMS_AMOUNT_PER_STEP;
  const showMoreButtonComponent = new ShowMoreButtonView();

  renderElement(filmsListNode, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  showMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();

    films.slice(renderedFilmCount, renderedFilmCount + FILMS_AMOUNT_PER_STEP)
    .forEach((filmsElems) => renderTemplate(filmsContainerNode, createCardFilmTemplate(filmsElems), `beforeend`));

    renderedFilmCount += FILMS_AMOUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButtonComponent.getElement().remove();
      showMoreButtonComponent.removeElement();
    }
  });
}

for (let i = 1; i < Math.min(films.length, FILMS_AMOUNT_PER_STEP + 1); i++) {
  renderTemplate(filmsContainerNode, createCardFilmTemplate(films[i]), `beforeend`);
}

renderElement(filmsNode, new TopRatedListView().getElement(), RenderPosition.BEFOREEND);
renderElement(filmsNode, new MostCommentedListView().getElement(), RenderPosition.BEFOREEND);

const topRatedFilmsNode = filmsNode.querySelector(`.films-list--top-rated`);
const topRatedFilmsContainerNode = topRatedFilmsNode.querySelector(`.films-list__container`);
const mostCommentedFilmsNode = filmsNode.querySelector(`.films-list--most-comment`);
const mostCommentedFilmsContainerNode = mostCommentedFilmsNode.querySelector(`.films-list__container`);

sortByComments(films).slice(0, 2).forEach((film) => {
  renderTemplate(mostCommentedFilmsContainerNode, createCardFilmTemplate(film), `beforeend`);
});

sortByRating(films).slice(0, 2).forEach((film) => {
  renderTemplate(topRatedFilmsContainerNode, createCardFilmTemplate(film), `beforeend`);
});

renderTemplate(statisticNode, createSiteStatisticTemplate(films.length), `beforeend`);

renderTemplate(siteFooterNode, createPopupTemplate(films[0]), `afterend`);

