import {getRandomInteger, render, RenderPosition} from "./utils.js";

import UserRangView from "./view/user-rang.js";
import NavigationView from "./view/navigation.js";
import FilterView from "./view/site-menu.js";
import StatsLinkView from "./view/stats-link.js";
import SortView from "./view/sort.js";
import MainContentView from "./view/main-content.js";
import FilmsListView from "./view/films-list.js";
import CardFilmView from "./view/card.js";
import ShowMoreButtonView from "./view/show-more-btn.js";
import TopRatedListView from "./view/top-rated.js";
import MostCommentedListView from "./view/most-comment.js";
import SiteStatisticView from "./view/statistics.js";
import PopupView from "./view/popup.js";

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
const siteBodyNode = document.querySelector(`body`);
const statisticNode = document.querySelector(`.footer__statistics`);

render(siteHeaderNode, new UserRangView().getElement(), RenderPosition.BEFOREEND);

const navigationComponent = new NavigationView();

render(siteMainNode, navigationComponent.getElement(), RenderPosition.BEFOREEND);
render(navigationComponent.getElement(), new FilterView(filters).getElement(), RenderPosition.BEFOREEND);
render(navigationComponent.getElement(), new StatsLinkView(filters).getElement(), RenderPosition.BEFOREEND);
render(siteMainNode, new SortView().getElement(), RenderPosition.BEFOREEND);
render(siteMainNode, new MainContentView().getElement(), RenderPosition.BEFOREEND);

const filmsNode = siteMainNode.querySelector(`.films`);

render(filmsNode, new FilmsListView().getElement(), RenderPosition.BEFOREEND);

const filmsListNode = filmsNode.querySelector(`.films-list`);
const filmsContainerNode = filmsNode.querySelector(`.films-list__container`);

for (let i = 1; i < Math.min(films.length, FILMS_AMOUNT_PER_STEP + 1); i++) {
  render(filmsContainerNode, new CardFilmView(films[i]).getElement(), RenderPosition.BEFOREEND);
}

if (films.length > FILMS_AMOUNT_PER_STEP) {
  let renderedFilmCount = FILMS_AMOUNT_PER_STEP;
  const showMoreButtonComponent = new ShowMoreButtonView();

  render(filmsListNode, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  showMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();

    films.slice(renderedFilmCount, renderedFilmCount + FILMS_AMOUNT_PER_STEP)
    .forEach((filmsElems) => render(filmsContainerNode, new CardFilmView(filmsElems).getElement(), RenderPosition.BEFOREEND));

    renderedFilmCount += FILMS_AMOUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButtonComponent.getElement().remove();
      showMoreButtonComponent.removeElement();
    }
  });
}

render(filmsNode, new TopRatedListView().getElement(), RenderPosition.BEFOREEND);
render(filmsNode, new MostCommentedListView().getElement(), RenderPosition.BEFOREEND);

const topRatedFilmsNode = filmsNode.querySelector(`.films-list--top-rated`);
const topRatedFilmsContainerNode = topRatedFilmsNode.querySelector(`.films-list__container`);
const mostCommentedFilmsNode = filmsNode.querySelector(`.films-list--most-comment`);
const mostCommentedFilmsContainerNode = mostCommentedFilmsNode.querySelector(`.films-list__container`);

sortByComments(films).slice(0, 2).forEach((film) => {
  render(mostCommentedFilmsContainerNode, new CardFilmView(film).getElement(), RenderPosition.BEFOREEND);
});
sortByRating(films).slice(0, 2).forEach((film) => {
  render(topRatedFilmsContainerNode, new CardFilmView(film).getElement(), RenderPosition.BEFOREEND);
});

render(statisticNode, new SiteStatisticView(films.length).getElement(), RenderPosition.BEFOREEND);
render(siteBodyNode, new PopupView(films[0]).getElement(), RenderPosition.BEFOREEND);

